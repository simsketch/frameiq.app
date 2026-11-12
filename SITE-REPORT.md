# FrameIQ news hub

Implemented locally on `news-hub`. No push, deployment, newsletter subscription, or external publishing was performed. No dependencies were added or changed.

## Pages and assets

| Route | Result |
| --- | --- |
| `/` | Channel wordmark, navigation, evidence-led hero, YouTube subscription link, latest-video grid, portrait Shorts cards, story and calculator links. |
| `/capture` | Existing macOS capture landing page, with its original content intact and its own metadata. `/FrameIQ.dmg`, app icon, and favicon are preserved. |
| `/stories` | Data-driven story listing. |
| `/stories/learjet-n722bd` | Summary, three click-to-load public videos, dated timeline, known/unknown facts, labeled analysis, linked sources, corrections box, and NewsArticle JSON-LD. |
| `/tools/trip-risk` | Client-side five-mode calculator accepting miles or hours, modeled fatal events per million vehicle trips, road equivalents, sources, and visible caveats. |
| `/sitemap.xml`, `/robots.txt` | Crawl metadata; story entries come from the story registry. |
| `/opengraph-image.png` | Static 1200 × 630 PNG with the approved logo, Plex type, paper/ink base, and Newsroom Pulse accents. |

## Implementation decisions

- Resumed the existing implementation on `news-hub` and replaced the superseded navy kit with the approved Editorial / option G identity. Read `brand.json`, `brand.css`, the current-brand pointer, the PDF guide, and supplied templates/social artwork. Extracted and inspected a still at 13 seconds from the Israel coalition delivery video.
- Identity uses ink `#171717`, paper `#EEE8DC`, editorial red `#AC322B`, and reverse red `#D87970`. IBM Plex Sans Regular/Bold and IBM Plex Mono Medium load via `next/font/google`. Bold uppercase display headlines and mono labels follow the guide. `CONTEXT. CLARITY. FRAMEIQ.` and `THE STORY. IN FOCUS.` appear in the site chrome.
- Copied the approved horizontal primary/reverse/white and symbol SVGs into `public/brand/` unchanged. `components/Wordmark.tsx` is the single logo component, using the primary lockup in the header and reverse in the ink footer. Lockups stay at least 180px wide and preserve their proportions/clear space. Favicon and touch icon use the approved symbol; the existing `/favicon.png`, app icon, and DMG remain available.
- Newsroom Pulse blue `#1648EF`, yellow `#FFEE38`, teal `#00DFD2`, and coral `#FF6459` distinguish videos, stories, knowledge panels, calculator results, chips, and slanted color bands. Yellow/teal carry ink text; blue carries white. Channel styles remain scoped to `.channel` to preserve the capture page.
- Mobile styles use 16px gutters, wrapping navigation/layouts, visible keyboard focus, a skip link, labeled inputs, and reduced-motion support. Contrast calculations pass AA for the selected text pairs: white/blue 6.55:1, ink/yellow 14.97:1, ink/teal 10.66:1, red/paper 5.30:1, muted/paper 6.27:1, and reverse red/ink 5.88:1. Player buttons use an inset focus outline so their wrapper cannot clip it. Only the channel's YouTube thumbnails and approved brand artwork are used for imagery.
- The home page and RSS request revalidate every 1,800 seconds. The dependency-free parser decodes XML entities, validates video IDs/dates, and identifies Shorts from `#Shorts` or `/shorts/` links. Failed/invalid feeds yield a YouTube fallback instead of a page error. Requests time out after eight seconds.
- YouTube RSS contains only its latest 15 uploads. At verification, all 15 were Shorts. The home page displays the latest six in its portrait-card row, and the long-form area displays its YouTube fallback. Older long-form videos remain accessible from the story and channel links. The parser follows the requested Shorts heuristic; titles without the tag and ordinary watch links cannot identify a Short reliably.
- Players appear only on story pages. Thumbnails load first; clicking the accessible play button creates a `youtube-nocookie.com` iframe. A direct YouTube link remains available.
- Story facts use only the three supplied local files. Investigation status is dated November 5, 2026; the page publication/update date is November 12. The supplied tracking-analysis notes are undated, and the page says so. No fresh official investigation verification is implied. No cause or victim names are asserted. The notes' prose says 11 repeated altitude reports, while its table has 12; the page omits that count and retains the consistent 9.1-second interval and altitude values.
- Add a story data file following `lib/stories/learjet-n722bd.ts`, then register it in `lib/stories/index.ts`; the story route, listing, metadata, and sitemap reuse that data.
- Risk calculations use exact pooled source totals before rounding: airline `3 / 172105447` per flight hour; charter `44 / 27683634.1895`; GA `(2102 - 17) / 220802471.5655`; passenger cars `1.80 / 100000000` per vehicle mile; motorcycles `31.87 / 100000000`. Assumed average speeds are 300/300/120/60/60 mph. Source years, broad charter/GA categories, vehicle-event numerator differences, historical-average assumptions, and the absence of personal death probabilities are stated beside the results and methodology.

## Checks

- `npm run build` passes, including TypeScript checks and generation of all routes.
- `node scripts/check-risk.mjs` passes the five source examples, miles/hours conversions, two-hour charter ≈177 driving miles, 600 car miles ≈34 motorcycle miles, sensitivity examples, and invalid/overflow inputs. It imports the actual shared calculator code.
- `node scripts/check-youtube.mjs` passes XML/entity/CDATA parsing, Shorts detection, malformed entries, and mocked success/failure behavior.
- `npm run start -- --port 39127` serves the production build. The six requested pages/sitemap return HTTP 200. The stylesheet, robots, static OG image, approved brand SVGs/icons, preserved favicon, and DMG also return 200 (HEAD for binary assets). Unknown story slugs return 404.
- Native Brave preview inspected the styled home at desktop, 400px, 375px and 320px, plus the story list, story/video section, and calculator at 320px. Observed no horizontal clipping in the reviewed content. Tested internal navigation, live calculator updates (2h charter → 177 driving miles; 3h → 265), and click-to-load player creation/playback from the first story thumbnail. Native input focus and the keyboard-only skip link were visibly verified; the first player used `youtube-nocookie.com`. The isolated preview used Brave because the browser connector was unavailable and Chrome had concurrent user activity.
- The moved capture source matches the original after excluding the added metadata. DMG Git hash remains `13e04adf38c886eafd6f3867da177780f104bf07`.
- `git diff --check` passes.
- Production HTML checks confirm page titles and one H1 per page, six live Shorts, a hidden newsletter, no initial iframes, three story play buttons, valid NewsArticle JSON-LD, the default 177-mile driving equivalent, capture download links, and sitemap entries. Copied SVGs match the approved kit byte for byte; the generated OG PNG was visually inspected. The browser showed a non-blocking Next CSS-preload warning; the active stylesheet returns 200 and renders correctly.

The Node self-check scripts use native TypeScript imports, tested on Node 22.22.3. Node prints a harmless module-format warning because the existing package has no `type` field. The existing `output: "standalone"` setting also makes Next print a `next start` recommendation; the requested start command successfully serves the checked routes.

## Left for later

- Newsletter provider is not selected. The marked placeholder in `app/page.tsx` renders nothing unless `NEWSLETTER_URL` is set to an HTTP(S) signup URL. Set it in the build/runtime environment and rebuild before enabling the section. No email storage or subscription form is implemented.
- Full-length video/audio review, automated screen-reader testing, and physical-device testing were not performed. The first story video successfully loaded and played in the native browser.
- Investigation/source refresh before eventual publication remains an editorial step. This implementation deliberately preserves the supplied evidence cutoff.
