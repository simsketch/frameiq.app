export const learjetN722bd = {
  slug: "learjet-n722bd",
  title: "The Learjet 60 Crash in Greenacres, Florida (N722BD)",
  description:
    "What is known, what remains unresolved, and what tracking-data analysis can tell us about the November 1, 2026 Learjet 60 crash.",
  category: "Aviation · Developing story",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  sourceCutoff: "2026-11-05",
  thumbnail: "https://i.ytimg.com/vi/QfEGcw0wwt0/hqdefault.jpg",
  thumbnailAlt: "FrameIQ's Learjet reconstruction video thumbnail",
  section: "Aviation",
  summarySources: [1, 2, 3],
  summary: [
    "On November 1, 2026, Learjet 60 N722BD crashed in Greenacres, Florida, during a flight from Austin to North Eleuthera in the Bahamas. All nine people aboard—two crew and seven passengers—were killed.",
    "The cause has not been established. As of the November 5 investigation-status cutoff for this page, the NTSB investigation was ongoing. An undetermined cause here means no cause had yet been released; it is not a final probable-cause finding.",
    "The crew reported ice and moderate turbulence. Investigators found parts of the left elevator away from the main impact site. Neither fact, by itself, establishes why the aircraft descended.",
  ],
  videos: [
    {
      id: "QfEGcw0wwt0",
      title: "Inside the Storm: A 3D Reconstruction",
      description:
        "FrameIQ reconstruction and tracking-data analysis. The reconstruction is an illustration, not an official finding.",
    },
    {
      id: "Ssnn5VR2Tb4",
      title: "Why Did the Learjet Crash in Greenacres? Ice, or a Breakup?",
      description:
        "The reported evidence and competing explanations. Possible mechanisms are labeled analysis; the official cause remains unresolved at our investigation-status cutoff.",
    },
    {
      id: "jLFZ3hOuH-I",
      title: "The first FrameIQ explainer",
      description:
        "Our earlier explanation of the crash. Read the dated evidence and limitations on this page alongside the video.",
    },
  ],
  timeline: [
    {
      date: "2026-11-01",
      label: "November 1, 2026 · The flight",
      text: "The Learjet departed Austin for North Eleuthera with nine people aboard. The crew later reported ice and moderate turbulence and requested a climb to 37,000 feet. The aircraft crashed in Greenacres; all aboard were killed.",
      sources: [1, 2, 3],
    },
    {
      date: "2026-11-02",
      label: "November 2, 2026 · Investigation briefing",
      text: "The NTSB discussed the crew's weather reports and the investigation. Investigators were still trying to determine whether a cockpit voice recorder was aboard.",
      sources: [3],
    },
    {
      date: "2026-11-03",
      label: "November 3, 2026 · Elevator evidence",
      text: "AP reported that most of the left elevator had been found in three pieces, between 1.3 and 3.8 miles from the crash site. NTSB board member Tom Chapman said investigators did not yet know whether its loss caused the descent or resulted from forces during it.",
      sources: [2],
    },
    {
      date: "2026-11-05",
      label: "November 5, 2026 · Recovery work",
      text: "Investigators recovered part of an engine during excavation. The NTSB asked anyone finding debris to leave it in place and report it.",
      sources: [4, 5],
    },
  ],
  known: [
    {
      text: "A Learjet 60 crashed in Greenacres on November 1 while flying from Austin toward the Bahamas. All nine people aboard were killed.",
      sources: [1, 2],
    },
    {
      text: "The crew reported ice and moderate turbulence and requested a climb. A reported encounter is evidence to investigate, not proof that icing caused the crash.",
      sources: [2, 3],
    },
    {
      text: "Most of the left elevator was recovered in three pieces away from the main crash site. The timing and significance of that separation remained unresolved.",
      sources: [2],
    },
  ],
  unknown: [
    {
      text: "The sequence of failures and the probable cause. The NTSB had not released a cause at our November 5 investigation-status cutoff.",
      sources: [1, 2],
    },
    {
      text: "Whether the elevator's separation initiated the descent or happened because of forces during it.",
      sources: [2],
    },
    {
      text: "Whether a cockpit voice recorder was aboard. No flight data recorder had been reported in the checked material; this is not confirmation that none existed.",
      sources: [2, 3],
    },
  ],
  analysis: [
    {
      title: "Did the aircraft level off near 8,000 feet?",
      paragraphs: [
        "Our analysis of the raw ADS-B trace found the barometric altitude fixed at exactly 8,750 feet over about 9.1 seconds. Over the same interval, GPS altitude fell from 9,075 to 325 feet. A flat barometric trace therefore does not show a level-off in the GPS data.",
        "The observation is that the barometric reading stopped updating while GPS altitude continued falling. It does not establish why the reading stopped updating, and it does not establish the cause of the crash. The reported vertical-rate field was at its encoding limit, so that field cannot independently confirm or rule out a level-off.",
      ],
      sources: [6],
    },
    {
      title: "The elevator's role remains unresolved",
      paragraphs: [
        "Finding elevator pieces away from the impact site does not, by itself, settle the sequence of events. Its separation could be important without being the event that initiated the descent.",
        "The elevator evidence supports questions about the sequence, rather than a settled answer. AP reported both Chapman's uncertainty about when it separated and an outside expert's view that the separation may have been a consequence of the dive. The investigation must resolve those alternatives.",
      ],
      sources: [2],
    },
  ],
  sources: [
    {
      title: "NTSB · Investigation ERA27MA026",
      url: "https://www.ntsb.gov/investigations/Pages/ERA27MA026.aspx",
      note: "Official investigation page, referenced by our November 5 factcheck.",
    },
    {
      title: "AP via WLRN · Elevator evidence and the investigation",
      url: "https://www.wlrn.org/transportation/2026-11-03/very-important-evidence-found-miles-from-learjet-crash-site-in-florida-investigator-says",
      note: "November 3, 2026. Reports the NTSB briefing and distinguishes investigator comments from an outside expert's interpretation.",
    },
    {
      title: "CBS12 · November 2 NTSB briefing",
      url: "https://cbs12.com/news/local/national-transportation-safety-board-share-new-details-palm-beach-county-learjet-60-emergency-operation-center-crash-greenacres-south-military-trail-co-pilot-identified-nathalia-filgueiras-florida-news",
      note: "Crew reports, investigation details, and the uncertainty about a cockpit voice recorder.",
    },
    {
      title: "CBS12 · Excavation and engine recovery",
      url: "https://cbs12.com/news/local/ntsb-says-excavation-at-greenacres-learjet-crash-site-is-ongoing-engine-section-found-florida-news-learjet-update-plane-crash-in-greenacres",
      note: "November 5, 2026. Recovery work at the crash site.",
    },
    {
      title: "WFLX · Engine recovery and debris appeal",
      url: "https://www.wflx.com/2026/11/05/ntsb-recovers-part-learjet-engine-asks-public-report-crash-debris/",
      note: "November 5, 2026. NTSB request to leave debris in place and report it.",
    },
    {
      title: "ADS-B Exchange · Flight-tracking data",
      url: "https://globe.adsbexchange.com/?icao=a9ab17&lat=26.6&lon=-80.1&zoom=9&showTrace=2026-11-01",
      note: "Underlying trace for FrameIQ's analysis, not an NTSB finding. The supplied, undated analysis notes record repeated barometric-altitude reports and falling GPS altitude.",
    },
  ],
  corrections:
    "This page was assembled from FrameIQ's checked source material, with an investigation-status cutoff of November 5, 2026. The tracking-data analysis comes from supplied, undated notes. The page's publication date is not a fresh verification of the investigation. Substantive corrections and new official findings will be dated here; analysis will remain clearly identified.",
};
