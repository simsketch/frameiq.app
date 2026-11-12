import type { MetadataRoute } from "next";
import { stories } from "@/lib/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://frameiq.app";
  return [
    { url: base, changeFrequency: "daily", priority: 1 },
    { url: `${base}/stories`, changeFrequency: "weekly", priority: 0.8 },
    ...stories.map((story) => ({ url: `${base}/stories/${story.slug}`, lastModified: story.updatedAt, changeFrequency: "weekly" as const, priority: 0.8 })),
    { url: `${base}/tools/trip-risk`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/capture`, changeFrequency: "monthly", priority: 0.4 },
  ];
}
