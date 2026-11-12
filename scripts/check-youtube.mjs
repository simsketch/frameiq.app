import assert from "node:assert/strict";
import { getLatestVideos, parseYouTubeFeed } from "../lib/youtube.ts";
import { curatedLongForms } from "../lib/youtube-long-forms.mjs";

const entry = (id, title, link = "watch?v=" + id, published = "2026-11-08T12:00:00+00:00") =>
  `<entry><yt:videoId>${id}</yt:videoId><title>${title}</title><published>${published}</published><link rel="alternate" href="https://www.youtube.com/${link}"/></entry>`;
const feed = (entries) => `<feed xmlns:yt="http://www.youtube.com/xml/schemas/2015">${entries}</feed>`;

const videos = parseYouTubeFeed(feed(
  entry("QfEGcw0wwt0", "Ice &amp; data &#x2014; &#39;analysis&#39;")
  + entry("Ssnn5VR2Tb4", "A question #Shorts")
  + entry("jLFZ3hOuH-I", "<![CDATA[Raw data & analysis]]>", "shorts/jLFZ3hOuH-I"),
));
assert.equal(videos.length, 3);
assert.equal(videos[0].title, "Ice & data — 'analysis'");
assert.equal(videos[0].published, "2026-11-08T12:00:00.000Z");
assert.equal(videos[0].thumbnail, "https://i.ytimg.com/vi/QfEGcw0wwt0/hqdefault.jpg");
assert.equal(videos[0].url, "https://www.youtube.com/watch?v=QfEGcw0wwt0");
assert.equal(videos[0].isShort, false);
assert.equal(videos[1].isShort, true);
assert.equal(videos[2].title, "Raw data & analysis");
assert.equal(videos[2].url, "https://www.youtube.com/shorts/jLFZ3hOuH-I");
assert.deepEqual(parseYouTubeFeed("<html>Unavailable</html>"), []);
assert.deepEqual(parseYouTubeFeed("<feed><entry>"), []);
assert.deepEqual(parseYouTubeFeed(feed(entry("invalid", "Bad ID"))), []);
assert.deepEqual(parseYouTubeFeed(feed(entry("QfEGcw0wwt0", "Bad date", undefined, "not-a-date"))), []);
assert.deepEqual(parseYouTubeFeed(feed(entry("QfEGcw0wwt0", " "))), []);
assert.equal(parseYouTubeFeed(feed(entry("QfEGcw0wwt0", "Bad entity &#x110000;")))[0].title, "Bad entity &#x110000;");

const originalFetch = globalThis.fetch;
try {
  globalThis.fetch = async (url, options) => {
    assert.match(url, /channel_id=UChYuUiz1Dk5UhNL_UYsFkcQ/);
    assert.equal(options.next.revalidate, 1800);
    assert.ok(options.signal instanceof AbortSignal);
    return new Response(feed(entry("QfEGcw0wwt0", "A video")));
  };
  const merged = await getLatestVideos();
  assert.equal(merged.length, curatedLongForms.length);
  assert.equal(merged.filter((video) => video.id === "QfEGcw0wwt0").length, 1);
  assert.equal(merged[0].title, "A video");
  assert.ok(merged.every((video) => !video.isShort));
  globalThis.fetch = async () => new Response(feed(entry("abcdefghijk", "Latest #Shorts")));
  const shortsAndArchive = await getLatestVideos();
  assert.equal(shortsAndArchive[0].isShort, true);
  assert.equal(shortsAndArchive.filter((video) => !video.isShort).length, 3);
  globalThis.fetch = async () => new Response("Unavailable", { status: 503 });
  const archive = await getLatestVideos();
  assert.deepEqual(archive.map((video) => video.id), curatedLongForms.map((video) => video.id));
  assert.ok(archive.every((video) => !video.isShort && Number.isFinite(Date.parse(video.published))));
  globalThis.fetch = async () => new Response("<html>Unavailable</html>");
  assert.deepEqual(await getLatestVideos(), archive);
  globalThis.fetch = async () => { throw new Error("Network unavailable"); };
  assert.deepEqual(await getLatestVideos(), archive);
} finally {
  globalThis.fetch = originalFetch;
}
console.log("YouTube checks passed: XML, entities, Shorts, invalid entries, curated fallback, and feed-first deduplication.");
