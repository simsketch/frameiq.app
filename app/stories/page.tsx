import type { Metadata } from "next";
import Link from "next/link";
import { formatStoryDate, stories } from "@/lib/stories";

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
      <div className="story-grid shell section">
        {stories.map((story) => (
          <article className="story-card" key={story.slug}>
            <Link href={`/stories/${story.slug}`} className="story-thumbnail" tabIndex={-1} aria-hidden="true">
              <img src={story.thumbnail} alt="" width="480" height="360" />
            </Link>
            <div className="story-card-body">
              <p className="eyebrow">{story.category}</p>
              <h2><Link href={`/stories/${story.slug}`}>{story.title}</Link></h2>
              <p>{story.description}</p>
              <p className="story-meta">Updated <time dateTime={story.updatedAt}>{formatStoryDate(story.updatedAt)}</time></p>
              <Link href={`/stories/${story.slug}`} className="text-link">Read the evidence <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
