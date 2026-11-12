import type { Story } from "./types";

export const hyattWalkways = {
  "slug": "hyatt-walkways",
  "title": "Hyatt Regency: the connection that carried too much load",
  "description": "How a changed hanger-rod arrangement rerouted force into an already inadequate walkway connection.",
  "category": "Engineering",
  "section": "Engineering",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-11",
  "thumbnail": "https://i.ytimg.com/vi/s9Anz5XmBs0/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ video thumbnail: Hyatt Regency: the connection that carried too much load",
  "summary": [
    "The second- and fourth-floor walkways at the Hyatt Regency in Kansas City collapsed on July 17, 1981, killing 114 people. The investigation traced a critical weakness to the walkway beam-and-hanger connections.",
    "The built arrangement hung the second-floor walkway from the fourth-floor beams, increasing demand at those local connections. The original connection was already inadequate under the applicable code.",
    "The lesson concerns the load path through a specific connection; the change did not double the total weight supported by the roof."
  ],
  "summarySources": [
    1,
    2
  ],
  "videos": [
    {
      "id": "s9Anz5XmBs0",
      "title": "A Small Change Rerouted the Load. Two Walkways Collapsed. #Shorts",
      "description": "Original FrameIQ explanatory animation. Geometry, motion and timing are illustrative; read the source record and limitations below."
    }
  ],
  "timeline": [
    {
      "date": "1981-07-17",
      "label": "July 17, 1981 · Walkway collapse",
      "text": "Two suspended walkways collapsed at the Kansas City hotel. The disaster killed 114 people.",
      "sources": [
        1,
        2
      ]
    }
  ],
  "known": [
    {
      "text": "The July 17, 1981 collapse killed 114 people during a tea dance.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "The original detail used continuous rods through the fourth-floor beam, with separate nuts supporting each walkway.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "The constructed offset rod sets hung the lower walkway from the upper beams, essentially doubling load transfer at the critical upper beam/rod connections.",
      "sources": [
        1
      ]
    },
    {
      "text": "The original connection was also inadequate; returning to the original drawing alone would not establish safety.",
      "sources": [
        1
      ]
    }
  ],
  "unknown": [
    {
      "text": "The approximate doubling applies to demand at a representative critical connection under comparable walkway loads. It is not a doubling of all roof forces or a complete capacity calculation.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "The video simplifies geometry and vertical spacing rather than reconstructing the exact building.",
      "sources": [
        1
      ]
    }
  ],
  "analysis": [],
  "sources": [
    {
      "title": "NBS/NIST · Investigation of the Kansas City Hyatt Regency walkways collapse",
      "url": "https://nvlpubs.nist.gov/nistpubs/Legacy/BSS/nbsbuildingscience143.pdf",
      "note": "BSS 143, abstract, executive summary and section 3.3; checked November 11, 2026."
    },
    {
      "title": "NIST · Historical structural-failure review",
      "url": "https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir7396.pdf",
      "note": "Appendix C, section C.2.2: Hyatt arrangement and load-path context; checked November 11, 2026."
    }
  ],
  "corrections": "Reporting checked November 11, 2026. This page uses the dated source checks in the production research; publication does not imply a new check of external sources. Substantive corrections will be recorded here."
} satisfies Story;
