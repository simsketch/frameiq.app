# FrameIQ — Newsroom Pulse

Restyled locally on `news-hub` on November 12, 2026. No push or deployment. No dependencies added. All existing routes, story content, sources, calculator math, and Capture downloads remain available.

## Visual source and implementation

Read the Israel coalition `SPEC.md` and `video/SPEC.md`; extracted and inspected the delivery video at 2, 10, 20, 30, 45, and 57 seconds. Reference frames and contact sheet: `qa/reference/`. The explicit brief overrides the cream/red legacy logo plaques and the 57-second closing bumper.

The site now uses only the Newsroom Pulse visual system: royal blue `#1648ef`, yellow `#ffee38`, teal `#00dfd2`, coral `#ff6459`, ink `#171717`, and white. Removed paper/cream and editorial-red CSS tokens. Full-width blue hero and site chrome, yellow story sections, teal tools/knowledge sections, square yellow labels, broad slanted teal/yellow/blue bands, bold uppercase IBM Plex Sans headlines, IBM Plex Mono kickers, and decorative seat dots/data bars match the reference. The decorative motif is hidden from assistive technology and encodes no statistics. Body text stays readable on white. Original YouTube thumbnail artwork is retained.

`components/SiteChrome.tsx` supplies shared navigation/footer everywhere. Capture retains its original product content, app illustrations, local Features/Preview links, all three DMG download links, and macOS requirement; its header/footer now use Pulse. Channel CSS stays scoped outside Capture content. Mobile layouts wrap with 20px gutters, native labeled controls, visible focus, a skip link, and reduced-motion support.

Measured text contrasts (WCAG AA normal-text minimum 4.5:1):

| Text / ground | Ratio |
| --- | --- |
| White / blue | 6.55:1 |
| Yellow / blue | 5.47:1 |
| Ink / yellow | 14.97:1 |
| Ink / teal | 10.66:1 |
| Blue / white | 6.55:1 |
| Muted gray / white | 9.59:1 |

Teal sections use ink text. Coral is restricted to decorative bars/borders and logo option C.

## Logo options and default

All recolors derive from the supplied horizontal and bracket-document symbol SVGs in `frameiq-brand-kit/logos/`. Geometry and dimensions are unchanged; only fill/stroke colors differ. Geometry assertions passed for all 16 variants after removing color attributes.

`public/brand/pulse/` contains horizontal and symbol SVGs in light/dark variants for four options, plus an SVG favicon per option:

| Option | Main direction | Adaptation |
| --- | --- | --- |
| A | Blue mark + ink wordmark | White reverse for blue grounds |
| B — default | Yellow mark + white wordmark on blue | Blue mark + ink wordmark on light grounds |
| C | Ink bracket + coral document lines | White bracket/wordmark + coral lines on blue |
| D | Teal mark + white wordmark on blue | Ink mark/wordmark for light and teal grounds |

`public/brand/pulse/options.png` shows all four options on blue, yellow, teal, and white, each with a 48px symbol preview. Visually inspected the sheet and the generated OG image.

**B is the default** because its yellow mark/white wordmark immediately belongs to the blue Pulse palette, keeps the original silhouette clear at favicon size, and shares the reference's strongest contrast pairing. Change the single `PULSE_LOGO_OPTION` constant in `lib/brand.ts` to `a`, `b`, `c`, or `d` to switch the site lockups and SVG favicon. `Wordmark` defaults to the dark-ground variant; `reverse={false}` selects its light-ground variant. Raster favicon fallbacks, Apple icon, and the OG image were generated for B and must be regenerated if a different option becomes the permanent identity.

Favicon metadata uses the chosen blue-backed symbol SVG plus ICO fallback. `/favicon.png` and the Apple touch icon also use B. `/opengraph-image.png` is 1200 × 630, with B, outlined IBM Plex type, royal blue, and diagonal teal/yellow bands. Existing old brand files remain available but are no longer referenced by the site chrome.

## Long-form video repair

YouTube RSS only contains the latest 15 uploads, currently Shorts. Added the curated archive in `lib/youtube-long-forms.mjs`. `getLatestVideos()` merges RSS entries first, then curated long forms, deduplicating by ID so feed metadata wins. The archive still renders if RSS fails, times out, or contains malformed XML. RSS and home revalidation remain 1,800 seconds, with the existing eight-second request timeout. The six latest Shorts remain separate.

All three videos were public at authoring time on November 12, 2026; each exact oEmbed URL returned HTTP 200. Titles were checked via oEmbed, including the conditional third item. Publication timestamps were taken from the respective YouTube watch pages and normalized to UTC.

| ID | Verified public title | oEmbed |
| --- | --- | --- |
| `QfEGcw0wwt0` | Inside the Storm: A 3D Reconstruction of the Learjet N722BD Crash | `https://www.youtube.com/oembed?url=https://youtu.be/QfEGcw0wwt0&format=json` — 200 |
| `Ssnn5VR2Tb4` | Why Did the Learjet Crash in Greenacres? Ice, or a Breakup? | `https://www.youtube.com/oembed?url=https://youtu.be/Ssnn5VR2Tb4&format=json` — 200 |
| `jLFZ3hOuH-I` | 35,000 Feet in 75 Seconds: The Last Flight of Learjet 60 N722BD, Explained | `https://www.youtube.com/oembed?url=https://youtu.be/jLFZ3hOuH-I&format=json` — 200 |

## Preserved behavior and content

| Route | Result |
| --- | --- |
| `/` | Pulse hero, three long-form explainers, latest six Shorts, story/tool links, subscription link |
| `/stories` | Story registry/listing with Pulse banner and video artwork |
| `/stories/learjet-n722bd` | Summary, three click-to-load videos, timeline, known/unknown panels, labeled analysis, linked sources, corrections, NewsArticle JSON-LD |
| `/tools/trip-risk` | Five modes, hours/miles, fatal-event exposure and road equivalences, input validation, source methodology and caveats |
| `/capture` | Original product content and DMG, with shared Pulse header/footer |

Story investigation-status cutoff remains November 5, 2026; publication/update is November 12. No new investigation verification or official cause is implied. The prior source notes' contradictory repeated-altitude count remains omitted. Risk source values, assumptions, conversions, and distinctions between fatal accidents, fatal-crash involvements, and personal death probabilities are unchanged. Newsletter still renders only when an HTTP(S) `NEWSLETTER_URL` is configured. Sitemap/robots and story metadata remain in place.

## Verification

- `npm run build` passes, including TypeScript and all static route generation.
- `node scripts/check-risk.mjs` passes: five modes, hours/miles, source examples, two-hour charter ≈177 driving miles, 600 car miles ≈34 motorcycle miles, sensitivity examples, invalid/overflow inputs. Added package `"type": "module"`; the Node module warning is gone.
- `node scripts/check-youtube.mjs` passes: XML/entities/CDATA, Shorts, malformed entries, curated data, feed success/failure, archive retention, ID deduplication, and feed-first metadata.
- Production server started on port **3217**. Explicit curl requests returned **200** for `/`, `/stories`, `/stories/learjet-n722bd`, `/tools/trip-risk`, and `/capture`. Port 3100 was not used.
- Playwright/Chromium checked each required screenshot route at **1440 × 1080** and **390 × 844**. All six have one H1, one shared header/footer, and no horizontal overflow. Full-page screenshots below were opened and visually inspected. Additional Capture and story-index desktop screenshots are included.
- Browser assertions confirm three curated long-form cards render exactly once, navigation anchors work, no initial story iframe loads, clicking creates the `youtube-nocookie.com` player, and source links navigate correctly. Playback/audio was not reviewed.
- Calculator browser checks: default charter/2h = 3.18; car/600mi = 10.8; zero input exposes the validation error, marks the field invalid, and removes the result; a valid value restores it. No uncaught page errors. Detailed results: `qa/browser-checks.json`.
- React review: existing server/client boundaries, labels, stable keys, secure external links, skip-link targets, lazy player behavior, and capture navigation/downloads preserved.
- `git diff --check` passes.

| Page | Desktop | Mobile |
| --- | --- | --- |
| Home | `qa/home-1440.png` | `qa/home-390.png` |
| Learjet story | `qa/learjet-1440.png` | `qa/learjet-390.png` |
| Trip risk | `qa/trip-risk-1440.png` | `qa/trip-risk-390.png` |

The existing `output: "standalone"` configuration causes `next start` to print its standalone-server recommendation; all requested production routes and assets served successfully. This task did not change deployment configuration.

## Limits

No push/deployment, full video/audio playback review, screen-reader session, or physical-device testing. YouTube public availability may change after the authoring-time oEmbed checks; the curated archive needs manual updates for future older long forms. Existing story source cutoffs remain explicit and require editorial refresh when appropriate.
