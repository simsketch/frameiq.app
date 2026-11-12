import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LiteYouTube from "@/components/LiteYouTube";
import { formatStoryDate, getStory, stories } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return {
    title: story.title,
    description: story.description,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.description,
      url: `https://frameiq.app/stories/${story.slug}`,
      publishedTime: `${story.publishedAt}T12:00:00Z`,
      modifiedTime: `${story.updatedAt}T12:00:00Z`,
      authors: ["FrameIQ"],
      images: [{ url: story.thumbnail, width: 480, height: 360, alt: story.thumbnailAlt }],
    },
    twitter: { card: "summary_large_image", title: story.title, description: story.description, images: [story.thumbnail] },
  };
}

function SourceRefs({ sources }: { sources: number[] }) {
  return <span className="source-refs"> {sources.map((source) => <a key={source} href={`#source-${source}`} aria-label={`Source ${source}`}>[{source}]</a>)}</span>;
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const url = `https://frameiq.app/stories/${story.slug}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story.title,
    description: story.description,
    image: [story.thumbnail],
    datePublished: `${story.publishedAt}T12:00:00Z`,
    dateModified: `${story.updatedAt}T12:00:00Z`,
    author: { "@type": "Organization", name: "FrameIQ", url: "https://frameiq.app" },
    publisher: { "@type": "Organization", name: "FrameIQ", url: "https://frameiq.app" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    citation: story.sources.map((source) => source.url),
    articleSection: story.section,
    inLanguage: "en-US",
  };

  return (
    <main id="main-content" className="story-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article).replace(/</g, "\\u003c") }} />
      <article>
        <div className="page-banner pulse-band">
        <header className="page-intro shell section">
          <Link href="/stories" className="text-link">← All stories</Link>
          <p className="eyebrow">{story.category}</p>
          <h1>{story.title}</h1>
          <p>{story.description}</p>
          <p className="story-meta">By FrameIQ · Published <time dateTime={story.publishedAt}>{formatStoryDate(story.publishedAt)}</time> · Updated <time dateTime={story.updatedAt}>{formatStoryDate(story.updatedAt)}</time></p>
          <span className="data-chip">Investigation-status cutoff: {formatStoryDate(story.sourceCutoff)}</span>
        </header>
        </div>
        <nav className="article-jump-links shell" aria-label="On this page">
          <a href="#summary">Summary</a><a href="#videos">Videos</a><a href="#timeline">Timeline</a><a href="#known">Known & unknown</a><a href="#analysis">Analysis</a><a href="#sources">Sources</a><a href="#corrections">Updates</a>
        </nav>
        <div className="article-body">
          <section id="summary" className="article-section" aria-labelledby="summary-heading">
            <p className="eyebrow">01 / The summary</p>
            <h2 id="summary-heading">What happened</h2>
            {story.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p><SourceRefs sources={story.summarySources} /></p>
          </section>
          <section id="videos" className="article-section" aria-labelledby="videos-heading">
            <p className="eyebrow">02 / Watch the explainers</p>
            <h2 id="videos-heading">The story, in context</h2>
            <p className="muted">A YouTube player loads only when you choose to play a video. Reconstructions and explanatory analysis are not official findings.</p>
            <div className="video-grid">{story.videos.map((video) => <LiteYouTube key={video.id} {...video} />)}</div>
          </section>
          <section id="timeline" className="article-section" aria-labelledby="timeline-heading">
            <p className="eyebrow">03 / Dated record</p>
            <h2 id="timeline-heading">A timeline of the evidence</h2>
            <ol className="timeline">
              {story.timeline.map((event) => <li key={event.date}><h3><time dateTime={event.date}>{event.label}</time></h3><p>{event.text}<SourceRefs sources={event.sources} /></p></li>)}
            </ol>
          </section>
          <section id="known" className="article-section" aria-labelledby="known-heading">
            <p className="eyebrow">04 / Limits of the record</p>
            <h2 id="known-heading">What’s known / what isn’t</h2>
            <p className="muted">Investigation status as of {formatStoryDate(story.sourceCutoff)}.</p>
            <div className="knowledge-grid">
              <div><h3>What’s known</h3><ul>{story.known.map((item) => <li key={item.text}>{item.text}<SourceRefs sources={item.sources} /></li>)}</ul></div>
              <div><h3>What remains unknown</h3><ul>{story.unknown.map((item) => <li key={item.text}>{item.text}<SourceRefs sources={item.sources} /></li>)}</ul></div>
            </div>
          </section>
          <section id="analysis" className="article-section" aria-labelledby="analysis-heading">
            <p className="eyebrow">05 / FrameIQ analysis</p>
            <h2 id="analysis-heading">Reading the evidence carefully</h2>
            <p className="data-chip">Analysis · Not an official cause or NTSB finding</p>
            {story.analysis.map((analysis) => <div key={analysis.title}><h3>{analysis.title}</h3>{analysis.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p><SourceRefs sources={analysis.sources} /></p></div>)}
          </section>
          <section id="sources" className="article-section" aria-labelledby="sources-heading">
            <p className="eyebrow">06 / Follow the sources</p>
            <h2 id="sources-heading">The source record</h2>
            <p className="muted">These links are the sources cited in the checked material used for this page. External pages may have changed since the checked material was prepared.</p>
            <ol className="source-list">{story.sources.map((source, index) => <li key={source.url} id={`source-${index + 1}`}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} <span aria-hidden="true">↗</span></a><p>{source.note}</p></li>)}</ol>
          </section>
          <section id="corrections" className="callout article-section" aria-labelledby="corrections-heading">
            <p className="eyebrow">A record that can change</p>
            <h2 id="corrections-heading">Corrections & updates</h2>
            <p><strong>Last updated:</strong> <time dateTime={story.updatedAt}>{formatStoryDate(story.updatedAt)}</time>.</p>
            <p>{story.corrections}</p>
            <p>No subsequent official findings have been incorporated into this version.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
