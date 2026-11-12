type SourcedFact = { text: string; sources: number[] };

export type Story = {
  slug: string;
  title: string;
  description: string;
  category: string;
  section: string;
  status: "Developing" | "Explainer";
  publishedAt: string;
  updatedAt: string;
  sourceCutoff: string;
  thumbnail: string;
  thumbnailAlt: string;
  summary: string[];
  summarySources: number[];
  videos: { id: string; title: string; description: string }[];
  timeline: { date: string; label: string; text: string; sources: number[] }[];
  known: SourcedFact[];
  unknown: SourcedFact[];
  analysis: { title: string; paragraphs: string[]; sources: number[] }[];
  sources: { title: string; url: string; note: string }[];
  corrections: string;
};
