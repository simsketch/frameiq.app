import type { Story } from "./types";

export const tacomaNarrows = {
  "slug": "tacoma-narrows",
  "title": "Tacoma Narrows: how wind fed a bridge’s twisting motion",
  "description": "The 1940 collapse, aerodynamic feedback, and why wind speed alone does not explain a bridge’s stability.",
  "category": "Engineering",
  "section": "Engineering",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-11",
  "thumbnail": "https://i.ytimg.com/vi/U2W5mxaP-V4/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ video thumbnail: Tacoma Narrows: how wind fed a bridge’s twisting motion",
  "summary": [
    "The Tacoma Narrows Bridge in Washington collapsed on November 7, 1940, four months after opening. Its flexible deck shifted from vertical movement into twisting, and roadway sections fell into Puget Sound.",
    "WSDOT’s historical account describes how motion and changing airflow can reinforce one another through torsional flutter. The precise historical mechanisms remain complex and debated.",
    "The failure changed bridge design by emphasizing aerodynamic stability and wind-tunnel testing alongside structural strength."
  ],
  "summarySources": [
    1,
    2
  ],
  "videos": [
    {
      "id": "U2W5mxaP-V4",
      "title": "The Wind Didn't Just Push This Bridge. It Fed the Motion. #Shorts",
      "description": "Original FrameIQ explanatory animation. Geometry, motion and timing are illustrative; read the source record and limitations below."
    }
  ],
  "timeline": [
    {
      "date": "1940-11-07",
      "label": "November 7, 1940 · Collapse",
      "text": "The deck developed torsional movement and roadway sections fell into Puget Sound.",
      "sources": [
        1,
        2
      ]
    }
  ],
  "known": [
    {
      "text": "The bridge collapsed on November 7, 1940, four months after opening.",
      "sources": [
        1
      ]
    },
    {
      "text": "Vertical movement changed to twisting, with one side of the deck rising as the other fell.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "WSDOT presents torsional flutter as the principal explanation: changing aerodynamic forces can feed energy into motion.",
      "sources": [
        2
      ]
    },
    {
      "text": "The collapse helped establish aerodynamic analysis and wind-tunnel testing as important parts of suspension-bridge design.",
      "sources": [
        2
      ]
    }
  ],
  "unknown": [
    {
      "text": "An approximate wind speed of forty miles per hour is context, not a uniform measurement across the bridge or a universal failure threshold.",
      "sources": [
        1
      ]
    },
    {
      "text": "The animation does not establish the exact failure sequence or calculate the airflow; WSDOT describes continuing complexity in the historical explanation.",
      "sources": [
        1,
        2
      ]
    }
  ],
  "analysis": [],
  "sources": [
    {
      "title": "WSDOT · The collapse",
      "url": "https://www.wsdot.wa.gov/TNBhistory/collapse.htm",
      "note": "Historical sequence, deck movement and approximate wind measurements; checked November 11, 2026."
    },
    {
      "title": "WSDOT · Why bridges fail",
      "url": "https://www.wsdot.wa.gov/TNBhistory/bridges-failure.htm",
      "note": "Aerodynamic feedback, historical uncertainty and the influence on bridge design; checked November 11, 2026."
    }
  ],
  "corrections": "Reporting checked November 11, 2026. This page uses the dated source checks in the production research; publication does not imply a new check of external sources. Substantive corrections will be recorded here."
} satisfies Story;
