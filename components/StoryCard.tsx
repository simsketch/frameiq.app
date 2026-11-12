import Link from "next/link";
import { formatStoryDate } from "@/lib/story-date";
import type { Story } from "@/lib/stories/types";

export type StoryCardData = Pick<Story, "slug" | "title" | "description" | "category" | "section" | "status" | "updatedAt" | "thumbnail">;

export default function StoryCard({ story, heading = "h2" }: { story: StoryCardData; heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <article className="story-card">
      <Link href={`/stories/${story.slug}`} className="story-thumbnail" tabIndex={-1} aria-hidden="true">
        <img src={story.thumbnail} alt="" width="480" height="360" loading="lazy" />
      </Link>
      <div className="story-card-body">
        <p className="eyebrow">{story.category} · {story.status}</p>
        <Heading><Link href={`/stories/${story.slug}`}>{story.title}</Link></Heading>
        <p>{story.description}</p>
        <p className="story-meta">Updated <time dateTime={story.updatedAt}>{formatStoryDate(story.updatedAt)}</time></p>
        <Link href={`/stories/${story.slug}`} className="text-link">Read the evidence <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
