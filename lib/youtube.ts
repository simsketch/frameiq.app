export type YouTubeVideo = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  url: string;
  isShort: boolean;
};

function decodeXml(value: string) {
  const entities: Record<string, string> = {
    amp: "&", lt: "<", gt: ">", quot: '"', apos: "'",
  };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (entity, code: string) => {
    if (!code.startsWith("#")) return entities[code.toLowerCase()];
    const point = code[1].toLowerCase() === "x"
      ? parseInt(code.slice(2), 16)
      : Number(code.slice(1));
    return point > 0 && point <= 0x10ffff && !(point >= 0xd800 && point <= 0xdfff)
      ? String.fromCodePoint(point)
      : entity;
  });
}

export function parseYouTubeFeed(xml: string): YouTubeVideo[] {
  if (!/<feed\b[^>]*>[\s\S]*<\/feed>/.test(xml)) return [];
  const videos: YouTubeVideo[] = [];
  for (const [, entry] of xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
    const id = entry.match(/<yt:videoId>\s*([\w-]{11})\s*<\/yt:videoId>/)?.[1];
    const rawTitle = entry.match(/<title\b[^>]*>([\s\S]*?)<\/title>/)?.[1];
    const published = entry.match(/<published>\s*([^<]+)\s*<\/published>/)?.[1]?.trim();
    if (!id || !rawTitle || !published || !/^\d{4}-\d{2}-\d{2}T/.test(published)) continue;
    const date = new Date(published);
    if (!Number.isFinite(date.getTime())) continue;
    const title = rawTitle.startsWith("<![CDATA[") && rawTitle.endsWith("]]>")
      ? rawTitle.slice(9, -3).trim()
      : decodeXml(rawTitle).trim();
    if (!title) continue;
    const isShort = /#shorts\b/i.test(title)
      || /<link\b[^>]*\bhref=["'][^"']*\/shorts\//i.test(entry);
    videos.push({
      id, title, published: date.toISOString(), isShort,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      url: isShort ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
    });
  }
  return videos;
}

export async function getLatestVideos(): Promise<YouTubeVideo[]> {
  // shortcut: the feed covers the latest 15 uploads; use an archive source if older-video coverage is needed.
  try {
    const response = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UChYuUiz1Dk5UhNL_UYsFkcQ",
      { next: { revalidate: 1800 }, signal: AbortSignal.timeout(8000) },
    );
    return response.ok ? parseYouTubeFeed(await response.text()) : [];
  } catch {
    return [];
  }
}
