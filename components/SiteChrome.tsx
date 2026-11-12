import Link from "next/link";
import Wordmark from "./Wordmark";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="channel">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header shell">
        <Wordmark />
        <nav aria-label="Main navigation">
          <Link href="/#videos">Videos</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/#tools">Tools</Link>
          <a href="https://www.youtube.com/@frameiqapp" target="_blank" rel="noopener noreferrer">YouTube <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><Wordmark reverse /><p className="footer-tagline">CONTEXT. CLARITY. FRAMEIQ.</p></div>
          <div>
            <a className="footer-youtube" href="https://www.youtube.com/@frameiqapp" target="_blank" rel="noopener noreferrer">Watch FrameIQ on YouTube ↗<span className="sr-only"> (opens in a new tab)</span></a>
            <p id="corrections-policy"><strong>Corrections policy:</strong> We correct factual errors openly and date material updates on each story.</p>
            <Link className="capture-link" href="/capture">Also by FrameIQ: FrameIQ Capture for macOS <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} FrameIQ</span><span>THE STORY. IN FOCUS.</span></div>
      </footer>
    </div>
  );
}
