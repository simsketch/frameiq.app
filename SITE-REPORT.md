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


## Story collection expansion — November 12, 2026

Built 30 new story pages and expanded the existing Learjet page: **31 stories, 52 public FrameIQ videos, 114 source entries**. Related Jensen projects share one page; Learjet follow-ups share the original URL. No dependencies were added.

Content comes only from the supplied FrameIQ project research, scripts, review notes, upload metadata, and the existing Learjet source material. Each page has a neutral summary, cited key facts, dated events where supported, explicit limits, source links, corrections/check date, and NewsArticle metadata. Analysis is labeled. Research check dates remain November 9–12 rather than implying that website publication refreshed all reporting.

`/stories` uses the existing Pulse cards with YouTube thumbnails and accessible category buttons. Pages are sorted newest first by website publication date; same-day pages follow the latest confirmed RSS order, with the older archive after it. The home section shows the first four. The existing sitemap consumes the full registry. Video players retain click-to-load privacy embeds.

### Story inventory

All rows were website-published/updated November 12, 2026; `learjet-n722bd` is the existing page, updated in place.

| Slug | Public video IDs | Sources |
| --- | --- | --- |
| `ai-power-grid` | `BOS9RSEiIfk` | 3 |
| `airline-private-flying-safety` | `cuANLbwMl5M`, `WsePyQYIYKg`, `N1MAtM3zxl8`, `OvUHlRR_vsU`, `8edQBZgf5oI` | 4 |
| `apollo-13-filter` | `H7z7jL3ae7c` | 2 |
| `bayshore-road-landing` | `l_RebWnHj6Q` | 4 |
| `boca-raton-electrical-scare` | `dqfYOmC3VEg` | 3 |
| `boston-molasses` | `dYHbpArWJ0g` | 3 |
| `challenger-joint` | `IVbfLmHgrGk` | 3 |
| `dali-key-bridge` | `2GwvVGsoAkc` | 3 |
| `deerfield-checkers` | `CYmm-0p-8Bw` | 4 |
| `edmund-fitzgerald` | `k1NbZIw-Hus` | 3 |
| `escapade-flyby` | `sqSpm6CQ1SQ` | 2 |
| `gwinnett-plane-crash` | `raWMLZh7GQw` | 3 |
| `hamburg-iowa-crash` | `9oijiOCHJq8` | 4 |
| `hyatt-walkways` | `s9Anz5XmBs0` | 2 |
| `ingenuity-thin-air` | `p66uxYh7ils` | 4 |
| `jensen-huang` | `j9EBYbho4WI`, `7i2q7oVEfJQ` | 2 |
| `johnstown-flood` | `Rl6wSFFmbeU` | 3 |
| `kentucky-l39-crash` | `x9pfWcfm7Zg` | 4 |
| `lake-nyos` | `di84Od-A15w` | 3 |
| `lax-close-call` | `vRB2jvToKR4` | 5 |
| `learjet-n722bd` | `QfEGcw0wwt0`, `Ssnn5VR2Tb4`, `jLFZ3hOuH-I`, `RIC7xU2GyRw`, `7rd3K8WDtG0`, `9_Q0Q1DAcGU`, `TJAiIAjuCMM`, `JZBeZHtei_k`, `8qmRaJ9Sb_4`, `MnUiArIkXMc`, `KH5_p9inYfE`, `22zfCyzaLfw`, `Sw75yKbMXUs`, `TdEiewhQyzc`, `bmefYTzjSkc`, `7jh93LIenfI`, `grPmD3uFviw` | 12 |
| `liquefaction` | `eSEbqWERlEY` | 3 |
| `microwave-cold-spots` | `WPNGwqUeqHk` | 4 |
| `quantum-fridge` | `0d2OA5LW4AE` | 5 |
| `swift-reentry` | `xXdvwuj-ddk` | 4 |
| `tacoma-narrows` | `U2W5mxaP-V4` | 2 |
| `titan-pressure-hull` | `fCIWTD7Ttfk` | 3 |
| `tsunami-shoaling` | `kp3sIvuJuXI` | 4 |
| `undersea-internet` | `eM-3Li01yPY` | 4 |
| `volcanic-ash-engines` | `osdlbTRcRvE` | 6 |
| `webb-mirrors` | `Mr22cH3ROC0` | 3 |

### Editorial limits and updates

- Learjet: incorporated the November 9 recorder recovery/evaluation and completed excavation, with the research cutoff advanced to November 11. No probable cause, usable recorder audio, May crew identity, repair allegation, or causal maintenance link is asserted. Older videos carry dated context and analysis limits.
- Jensen: only verified, attributed NVIDIA statements are summarized. Qualified relationship, intelligence, and proposed-removal reports were omitted from factual copy. The two dated public videos retain captions explaining that their reporting extends beyond the verified statements summarized here.
- Crashes and disasters: no victim names or graphic detail were added. Historical causal findings retain their qualifications, including Titan’s likely delamination/unknown damage origin, Nyos’s uncertain trigger, and Challenger’s broader design/decision failures.
- Food inspections: dirty dining has no confirmed public video and was skipped; no business allegations were added.

### Topics skipped and grouped

Public visibility was checked using the channel RSS and YouTube oEmbed. All 278 candidate IDs from the scoped files and feed were checked; 53 returned HTTP 200 with FrameIQ as author. Third-party source videos were excluded. A public video for the explicitly excluded GDR project was also excluded.

- **Dirty dining:** no public FrameIQ ID found in the scoped files or feed; no page or business allegations added.
- **News explained:** `brooklyn-collapse`, `israel-coalition`, `rubio-arms-financing` have no public FrameIQ video in the checked candidates.
- **Six-hour run:** 19 of the fixed 87 projects had a public FrameIQ video; the following 68 had none and were skipped.
  - **engineering**: `aloha-lap-joints`, `cabin-outflow`, `chernobyl-shutdown`, `concrete-rebar`, `deepwater-bop`, `fukushima-decay-heat`, `halifax-explosion`, `helicopter-tail-thrust`, `hindenburg-gas-cells`, `hydraulic-excavator`, `i35w-gusset-plates`, `imperial-sugar-dust`, `pump-cavitation`, `rail-heat-buckling`, `silver-bridge`, `submarine-ballast`, `texas-city-refinery`, `titanic-bulkheads`, `vajont-wave`, `water-hammer`.
  - **general**: `abs-brake-control`, `elevator-safety`, `gps-relativity`, `heat-pump-cycle`, `induction-cooking`, `navajo-reservoir`, `noise-cancelling-headphones`, `ozone-hole-2026`, `panama-locks`, `powerbank-warning`, `qr-error-correction`, `smoke-alarm-light`, `sprinkler-heat-release`, `turbine-blade-cooling`.
  - **natural-hazards**: `armero-lahar`, `chelyabinsk-airburst`, `dry-canyon-flash-flood`, `frost-wedging`, `geyser-pressure`, `hail-growth`, `lightning-thunder`, `lituya-runup`, `london-great-smog`, `rip-current-channel`, `rogue-waves`, `sinkhole-collapse`, `slab-avalanche`, `storm-surge`, `tambora-1816`, `urban-heat-island`, `wildfire-embers`, `wind-turbine-feathering`.
  - **space-history**: `apollo-11-alarm`, `bennu-soft-surface`, `columbia-foam`, `dart-asteroid`, `enceladus-ocean`, `hubble-glasses`, `iss-freefall`, `lunar-tidal-locking`, `mars-units`, `moon-laser`, `parker-heat-shield`, `rocket-max-q`, `saturn-rings-edge-on`, `venus-day-year`, `voyager-light-day`, `voyager-power`.
- **Trending shorts:** `turkey-steelworks` and `voyager-light-day` had no public FrameIQ video found. Voyager overlaps the skipped six-hour topic. The AI power-grid variants were grouped into the data-center electricity story; the Fitzgerald variants were grouped into the Fitzgerald story.
- **Merged coverage:** both Jensen projects share one story. Learjet crater, follow-up, comments, recorder updates and earlier videos share the existing Learjet story. Three commercial/private comparison Shorts share one story; related safety and micromort videos found only in the allowed Learjet source project were accounted as related coverage rather than new unsourced topics.
- **Excluded projects:** `fable-*`, `keyring-series-*`, `gdr-tenzin-*`, `skills`, `formats`, and brand folders, as requested.

The durable discovery and skip audit is in `qa/stories-inventory.json`; `qa/stories-public-check.json` records the 52 eligible embedded videos, their live oEmbed titles/status, and each story’s source count. Public availability follows the brief’s HTTP-200 criterion, checked November 12, 2026.


### Verification and screenshots

- `npm run build` passes with TypeScript and all 31 story routes generated.
- `node scripts/check-stories.mjs` passes: 31 registered stories, 52 live HTTP-200 FrameIQ videos, at least two sources per story, required/nonempty text, valid dates, unique IDs and source-reference bounds. Optional absent timeline/analysis sections do not render.
- `node scripts/check-youtube.mjs` passes; the existing archive/RSS behavior remains intact.
- Production ran with `next start -p 3217` through the npm start script. Every story route returns 200; the unknown-story route returns 404; all 31 story URLs occur in `/sitemap.xml`.
- Chrome checked all 31 story pages at 1440 × 1080 and 390 × 844: one H1, correct canonical URL, NewsArticle JSON-LD/source counts, no initial iframe, correct video counts, and no horizontal overflow. Category buttons, pressed state, live count, keyboard reset, source/jump anchors, first-four home ordering, and click-to-load privacy embeds passed. No uncaught browser errors. Evidence: `qa/stories-browser-checks.json`.
- Desktop/mobile screenshots of the index, Challenger and Jensen pages were opened and visually inspected, along with card/evidence-panel views. The index wraps filters and cards cleanly on mobile; article titles, source links and known/unknown panels remain readable. Card links use yellow focus outlines against blue.
- `git diff --check` passes. Independent code and targeted source/sensitivity reviews found no blocking issues.

| Page | Desktop | Mobile |
| --- | --- | --- |
| Story index | `qa/stories-index-1440.png` | `qa/stories-index-390.png` |
| Challenger | `qa/challenger-joint-1440.png` | `qa/challenger-joint-390.png` |
| Jensen Huang | `qa/jensen-huang-1440.png` | `qa/jensen-huang-390.png` |

Additional screenshots: `qa/stories-cards-{1440,390}.png`, `qa/challenger-joint-facts-{1440,390}.png`, `qa/jensen-huang-facts-{1440,390}.png`, and `qa/stories-home-{1440,390}.png`. Browser screenshots used installed Chrome after the older cached Chromium build timed out during capture; no package was installed.

No push or deployment. No full video/audio playback, screen-reader session, or physical-device test. Public video availability and developing-story findings can change after these dated checks; no fresh external factual reporting beyond the supplied source reviews is implied.
