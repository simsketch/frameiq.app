import type { Metadata } from "next";
import StoryIndex from "@/components/StoryIndex";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Stories",
  description: "The evidence, sources, and open questions behind FrameIQ's explainers.",
  alternates: { canonical: "/stories" },
  openGraph: {
    title: "Stories · FrameIQ",
    description: "Follow the evidence behind the headlines.",
    url: "https://frameiq.app/stories",
  },
};

export default function StoriesPage() {
  return (
    <main id="main-content" className="stories-page">
      <div className="page-banner pulse-band">
      <header className="page-intro shell section">
        <p className="eyebrow">The evidence file</p>
        <h1>Stories</h1>
        <p>The reporting, sources, and unanswered questions behind our videos. What we know, how we know it, and what may change.</p>
      </header>
      </div>
      <StoryIndex stories={stories.map(({ slug, title, description, category, section, status, updatedAt, thumbnail }) => ({ slug, title, description, category, section, status, updatedAt, thumbnail }))} />
    </main>
  );
}
