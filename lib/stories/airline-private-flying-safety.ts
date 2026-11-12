import type { Story } from "./types";

export const airlinePrivateFlyingSafety = {
  "slug": "airline-private-flying-safety",
  "title": "Airline and private flying: what the safety data compares",
  "description": "Historical accident rates describe categories of flying, with limits that matter as much as the numbers.",
  "category": "Aviation",
  "section": "Aviation",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-09",
  "thumbnail": "https://i.ytimg.com/vi/cuANLbwMl5M/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ video thumbnail: Airline vs Private Flying: What the Safety Data Shows #Shorts",
  "summary": [
    "FrameIQ compared U.S. NTSB fatal-accident rates for 2015–2024 across three categories of flying.",
    "The exposure-weighted rates per 100,000 flight hours were about 0.002 for scheduled Part 121 service, 0.16 for on-demand Part 135 fixed-wing airplanes and 1.83 for general-aviation personal flying. These are operation-level accident rates, not a passenger’s probability of dying.",
    "The categories include different aircraft, missions and environments. The comparison describes historical records and does not establish a causal effect or predict an individual flight."
  ],
  "summarySources": [
    1,
    2
  ],
  "videos": [
    {
      "id": "cuANLbwMl5M",
      "title": "Airline vs Private Flying: What the Safety Data Shows #Shorts",
      "description": "The operation categories, denominator and limits behind the comparison."
    },
    {
      "id": "WsePyQYIYKg",
      "title": "Leather Seats Don’t Make a Flight Safer #Shorts",
      "description": "Cabin appearance is not a measure of training, maintenance or oversight."
    },
    {
      "id": "N1MAtM3zxl8",
      "title": "100,000 Flight Hours: Airline vs Private Flying #Shorts",
      "description": "Equal flight-hour exposure does not make aircraft, missions or operating environments identical."
    },
    {
      "id": "OvUHlRR_vsU",
      "title": "How Safe Are Private Jets? Learjet 60 Safety by the Numbers",
      "description": "Earlier long-form context checked November 7. Its broad general-aviation comparison is a different category from the personal-flying series summarized on this page; no Learjet-specific risk rate or passenger death probability is established."
    },
    {
      "id": "8edQBZgf5oI",
      "title": "What Is a Micromort? 1-in-a-Million Risk Explained",
      "description": "A related general risk-unit explainer. A risk unit does not convert the operation-level fatal-accident rates on this page into an individual passenger’s probability."
    }
  ],
  "timeline": [],
  "known": [
    {
      "text": "The comparison uses NTSB tables 6, 17 and 26 for 2015–2024 and weights annual published rates by the corresponding annual flight hours.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "Scheduled Part 121 service includes passenger and cargo operations; on-demand fixed-wing flying includes more than private jets.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "The rounded fatal-accident rates are 0.002, 0.16 and 1.83 per 100,000 flight hours for the three stated categories.",
      "sources": [
        2
      ]
    },
    {
      "text": "FAA background describes different training, maintenance and safety requirements for certified charter and airline operations.",
      "sources": [
        3,
        4
      ]
    }
  ],
  "unknown": [
    {
      "text": "These broad historical categories cannot supply a private-jet-only estimate or an individual passenger’s odds for a particular flight.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "Differences between categories do not isolate the causal contribution of a particular aircraft, practice or safety system.",
      "sources": [
        1,
        2
      ]
    }
  ],
  "analysis": [
    {
      "title": "How the comparison was calculated",
      "paragraphs": [
        "FrameIQ multiplied each published annual rate by that year’s flight hours, summed the products and divided by total flight hours for 2015–2024. The resulting rates were rounded for display.",
        "Using the same denominator makes the reported rates comparable as measures of exposure, but does not remove differences in aircraft, missions or environments. The calculation is descriptive analysis, not a controlled estimate of what makes a particular flight safe."
      ],
      "sources": [
        1,
        2
      ]
    }
  ],
  "sources": [
    {
      "title": "NTSB · Aviation statistical reviews",
      "url": "https://www.ntsb.gov/safety/Pages/Research.aspx",
      "note": "Tables 6, 17 and 26; the completed 2005–2024 series was the basis of the November 9, 2026 research."
    },
    {
      "title": "NTSB · 2005–2024 statistical workbook",
      "url": "https://www.ntsb.gov/safety/Documents/AviationAccidentStatistics_2005-2024_20260112.xlsx",
      "note": "FrameIQ’s documented calculation uses the 2015–2024 annual published rates weighted by annual flight hours; it preserves the tables’ intentional-act exclusions."
    },
    {
      "title": "FAA · Safe Air Charter",
      "url": "https://www.faa.gov/charter",
      "note": "General context on certified charter training, certification, maintenance and safety requirements."
    },
    {
      "title": "FAA · Airline safety systems",
      "url": "https://www.faa.gov/newsroom/out-front-airline-safety-two-decades-continuous-evolution",
      "note": "General background on airline oversight, training, maintenance, dispatch and safety-management systems."
    }
  ],
  "corrections": "Research and calculation checked November 9, 2026. Rates are historical, U.S.-specific and rounded; they are not passenger fatality probabilities. The three videos share one dataset and should not be read as three independent studies. Corrections to the calculation or source tables will be dated here. The earlier long-form video uses a broader general-aviation category and a November 7 research cutoff; its rates should not be substituted for the personal-flying category summarized here."
} satisfies Story;
