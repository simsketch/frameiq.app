import assert from "node:assert/strict";
import { getLatestVideos, parseYouTubeFeed } from "../lib/youtube.ts";

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
  assert.equal((await getLatestVideos()).length, 1);
  globalThis.fetch = async () => new Response("Unavailable", { status: 503 });
  assert.deepEqual(await getLatestVideos(), []);
  globalThis.fetch = async () => new Response("<html>Unavailable</html>");
  assert.deepEqual(await getLatestVideos(), []);
  globalThis.fetch = async () => { throw new Error("Network unavailable"); };
  assert.deepEqual(await getLatestVideos(), []);
} finally {
  globalThis.fetch = originalFetch;
}
console.log("YouTube checks passed: XML, entities, Shorts, invalid entries, and feed fallback.");
