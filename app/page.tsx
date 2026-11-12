import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/lib/stories";
import { getLatestVideos, type YouTubeVideo } from "@/lib/youtube";

export const revalidate = 1800;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function VideoCard({ video }: { video: YouTubeVideo }) {
  return (
    <a className={`video-card${video.isShort ? " short-card" : ""}`} href={video.url} target="_blank" rel="noopener noreferrer">
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={`Thumbnail for ${video.title}`} width="480" height="360" loading="lazy" />
        <span className="thumbnail-label">{video.isShort ? "SHORT" : "WATCH EXPLAINER"}<span aria-hidden="true">↗</span></span>
      </div>
      <div className="video-card-body">
        <time dateTime={video.published}>{new Date(video.published).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time>
        <h3>{video.title}</h3>
        <span className="sr-only">Watch on YouTube (opens in a new tab)</span>
      </div>
    </a>
  );
}

function WatchFallback({ shorts = false }: { shorts?: boolean }) {
  return (
    <a className="watch-fallback" href={`https://www.youtube.com/@frameiqapp${shorts ? "/shorts" : "/videos"}`} target="_blank" rel="noopener noreferrer">
      <span className="fallback-play" aria-hidden="true">▶</span>
      <div><h3>{shorts ? "Explore FrameIQ Shorts" : "Watch on YouTube"}</h3><p>{shorts ? "The evidence, one detail at a time." : "The latest explainers are available on our channel."}</p></div>
      <span className="fallback-arrow" aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default async function Home() {
  const videos = await getLatestVideos();
  const longForms = videos.filter((video) => !video.isShort);
  const shorts = videos.filter((video) => video.isShort);
  const newsletterUrl = process.env.NEWSLETTER_URL;
  const editionDate = new Date();

  return (
    <SiteChrome>
      <main id="main-content">
        <section className="hero-band pulse-band" aria-labelledby="hero-title">
          <div className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">News explained · <time dateTime={editionDate.toISOString().slice(0, 10)}>{editionDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })}</time></p>
            <h1 id="hero-title">News, explained<br />through <span>evidence.</span></h1>
            <p className="hero-description">Crashes, disasters, science, and technology.<br className="desktop-break" /> Calm breakdowns of what happened—and what we actually know.</p>
            <a className="button button-primary" href="https://www.youtube.com/@frameiqapp?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">▶</span> Subscribe on YouTube <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <Link className="hero-feature" href="/stories/learjet-n722bd">
            <div className="feature-topline"><span className="eyebrow">The story. In focus.</span><span className="data-chip">Investigation</span></div>
            <div className="feature-image"><img src="https://i.ytimg.com/vi/QfEGcw0wwt0/hqdefault.jpg" alt="FrameIQ's 3D reconstruction of Learjet N722BD" width="480" height="360" fetchPriority="high" /></div>
            <div className="feature-body"><p className="eyebrow">The Greenacres Learjet crash</p><h2>Follow the evidence.<br />Understand the unknowns.</h2><span className="text-link">Read the story <span aria-hidden="true">↗</span></span></div>
          </Link>
          </div>
        </section>

        <div className="topic-band"><div className="topic-strip shell" aria-label="Our approach"><span>Evidence over assumption</span><span>Sources in the open</span><span>Analysis, clearly labeled</span></div></div>

        <section id="videos" className="shell section" aria-labelledby="videos-title">
          <div className="section-heading"><div><p className="eyebrow">01 / The channel</p><h2 id="videos-title">The latest, explained.</h2></div><a className="text-link" href="https://www.youtube.com/@frameiqapp/videos" target="_blank" rel="noopener noreferrer">All videos <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>
          {longForms.length ? <div className="video-grid">{longForms.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <WatchFallback />}
          <div className="shorts-heading"><h3>A closer look. In a shorter frame.</h3><span className="data-chip">Shorts</span></div>
          {shorts.length ? <div className="shorts-row">{shorts.slice(0, 6).map((video) => <VideoCard key={video.id} video={video} />)}</div> : <WatchFallback shorts />}
        </section>

        <section id="stories" className="stories-section" aria-labelledby="stories-title">
          <div className="shell section"><div className="section-heading"><div><p className="eyebrow">02 / Beyond the video</p><h2 id="stories-title">The story behind the frame.</h2></div><Link className="text-link" href="/stories">All stories <span aria-hidden="true">↗</span></Link></div>
            <div className="story-grid">{stories.slice(0, 4).map((story) => <StoryCard key={story.slug} story={story} heading="h3" />)}</div>
          </div>
        </section>

        <section id="tools" className="tools-band" aria-labelledby="tools-title">
          <div className="shell section tools-section">
          <div><p className="eyebrow">03 / Put it in perspective</p><h2 id="tools-title">Make sense<br /> of the numbers.</h2><p className="muted">A little context can change how a number feels.<br />Explore the assumptions for yourself.</p></div>
          <Link className="tool-card" href="/tools/trip-risk"><div className="tool-card-top"><span className="data-chip">Interactive calculator</span><span aria-hidden="true">↗</span></div><div className="tool-motif" aria-hidden="true"><div className="seat-dots" /><div className="data-bars"><span /><span /><span /></div></div><h3>How risky is your trip?</h3><p>Compare average fatal-event exposure across five ways to travel, with the sources and caveats in view.</p><span className="text-link">Explore the calculator <span aria-hidden="true">→</span></span></Link>
          </div>
        </section>

        {/* Newsletter placeholder: no section is rendered until a provider URL is configured. */}
        {newsletterUrl && /^https?:\/\//i.test(newsletterUrl) ? <section className="shell newsletter section"><p className="eyebrow">Keep the context</p><h2>More evidence. In your inbox.</h2><a className="button button-primary" href={newsletterUrl} target="_blank" rel="noopener noreferrer">Subscribe to the newsletter ↗<span className="sr-only"> (opens in a new tab)</span></a></section> : null}
      </main>
    </SiteChrome>
  );
}
