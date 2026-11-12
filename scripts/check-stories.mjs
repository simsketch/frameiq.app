import assert from "node:assert/strict";
import { readdir, readFile, writeFile } from "node:fs/promises";

const directory = new URL("../lib/stories/", import.meta.url);
const registry = await readFile(new URL("index.ts", directory), "utf8");
const files = (await readdir(directory)).filter((file) => file.endsWith(".ts") && !["index.ts", "types.ts"].includes(file));
const stories = [];
for (const file of files) {
  assert.ok(registry.includes(`"./${file.slice(0, -3)}"`), `${file}: missing from story registry`);
  const exports = Object.values(await import(new URL(file, directory)));
  const story = exports.find((value) => value && typeof value === "object" && "slug" in value);
  assert.ok(story, `${file}: no story export`);
  stories.push(story);
}
assert.ok(stories.length > 0, "Story collection is empty");
assert.equal(new Set(stories.map((story) => story.slug)).size, stories.length, "Duplicate story slug");

function checkFields(value, path) {
  if (typeof value === "string") assert.ok(value.trim(), `${path}: empty field`);
  else if (Array.isArray(value)) value.forEach((item, index) => checkFields(item, `${path}[${index}]`));
  else if (value && typeof value === "object") {
    for (const [key, field] of Object.entries(value)) checkFields(field, `${path}.${key}`);
  } else assert.ok(typeof value === "number" && Number.isFinite(value), `${path}: invalid field`);
}

const videos = new Map();
for (const story of stories) {
  for (const key of ["slug", "title", "description", "category", "section", "status", "publishedAt", "updatedAt", "sourceCutoff", "thumbnail", "thumbnailAlt", "corrections"]) {
    assert.ok(typeof story[key] === "string" && story[key].trim(), `${story.slug}: missing ${key}`);
  }
  for (const key of ["summary", "summarySources", "videos", "known", "sources"]) {
    assert.ok(Array.isArray(story[key]) && story[key].length, `${story.slug}: empty ${key}`);
  }
  for (const key of ["timeline", "analysis", "unknown"]) assert.ok(Array.isArray(story[key]), `${story.slug}: missing ${key}`);
  checkFields(story, story.slug);
  assert.match(story.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(["Developing", "Explainer"].includes(story.status), `${story.slug}: invalid status`);
  for (const date of [story.publishedAt, story.updatedAt, story.sourceCutoff, ...story.timeline.map((event) => event.date)]) {
    assert.match(date, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Date(`${date}T12:00:00Z`).toISOString().slice(0, 10), date, `${story.slug}: invalid date`);
  }
  assert.ok(story.updatedAt >= story.publishedAt && story.updatedAt >= story.sourceCutoff, `${story.slug}: invalid date order`);
  assert.ok(story.sources.length >= 2, `${story.slug}: needs at least two sources`);
  assert.equal(new Set(story.sources.map((source) => source.url)).size, story.sources.length, `${story.slug}: duplicate source`);
  for (const source of story.sources) assert.equal(new URL(source.url).protocol, "https:", `${story.slug}: source must use HTTPS`);
  for (const refs of [story.summarySources, ...story.known.map((item) => item.sources), ...story.unknown.map((item) => item.sources), ...story.timeline.map((item) => item.sources), ...story.analysis.map((item) => item.sources)]) {
    assert.ok(refs.length && refs.every((ref) => Number.isInteger(ref) && ref >= 1 && ref <= story.sources.length), `${story.slug}: broken source reference`);
  }
  assert.equal(new Set(story.videos.map((video) => video.id)).size, story.videos.length, `${story.slug}: duplicate video`);
  for (const video of story.videos) {
    assert.match(video.id, /^[\w-]{11}$/);
    videos.set(video.id, null);
  }
}

const ids = [...videos.keys()];
// Keep requests in small batches so a full collection does not flood YouTube.
for (let start = 0; start < ids.length; start += 5) {
  await Promise.all(ids.slice(start, start + 5).map(async (id) => {
    const response = await fetch(`https://www.youtube.com/oembed?url=https://youtu.be/${id}&format=json`, { signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, `${id}: video is not public (HTTP ${response.status})`);
    const data = await response.json();
    assert.equal(data.author_name.toLowerCase(), "frameiq", `${id}: not a FrameIQ video`);
    videos.set(id, { id, title: data.title, author: data.author_name, status: response.status });
  }));
}
const report = {
  checkedAt: new Date().toISOString(),
  stories: stories.map((story) => ({ slug: story.slug, videos: story.videos.map((video) => video.id), sources: story.sources.length })),
  videos: [...videos.values()],
};
await writeFile(new URL("../qa/stories-public-check.json", import.meta.url), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Story checks passed: ${stories.length} stories, ${videos.size} public FrameIQ videos, source references, dates, required fields, and registry coverage.`);
