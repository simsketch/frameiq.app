import type { Story } from "./types";

export const daliKeyBridge = {
  "slug": "dali-key-bridge",
  "title": "Dali and the Key Bridge: a loose wire in a wider failure",
  "description": "The NTSB's adopted findings connect an electrical failure to the Baltimore bridge disaster and identify failures in other safety layers.",
  "category": "Engineering",
  "section": "Engineering",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-11",
  "thumbnail": "https://i.ytimg.com/vi/2GwvVGsoAkc/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ's One Loose Wire. Baltimore’s Key Bridge Disaster. video thumbnail",
  "summarySources": [
    1,
    2,
    3
  ],
  "summary": [
    "On March 26, 2024, the containership Dali lost power, propulsion, and steering before striking a support pier of Baltimore's Key Bridge.",
    "The bridge collapsed, and six highway workers died.",
    "In findings adopted in 2025, the NTSB traced the initiating blackout to a loose signal-wire terminal connection caused by improperly positioned wire-label banding.",
    "The NTSB also identified limited recovery time, inadequate bridge countermeasures, and ineffective communication to evacuate the workers."
  ],
  "videos": [
    {
      "id": "2GwvVGsoAkc",
      "title": "One Loose Wire. Baltimore’s Key Bridge Disaster.",
      "description": "FrameIQ's original explanatory animation. The enlarged teaching model illustrates the mechanism; it is not an exact reconstruction."
    }
  ],
  "timeline": [
    {
      "date": "2024-03-26",
      "label": "March 26, 2024 · Collision and collapse",
      "text": "Dali struck a bridge support pier after losing power, propulsion, and steering; six highway workers died.",
      "sources": [
        2,
        3
      ]
    },
    {
      "date": "2025-11-18",
      "label": "November 18, 2025 · NTSB findings",
      "text": "The NTSB announced the loose signal-wire connection finding and the wider safety failures in its adopted findings.",
      "sources": [
        1,
        2
      ]
    }
  ],
  "known": [
    {
      "text": "The initiating electrical loss was attributed to a loose signal-wire terminal connection caused by improperly positioned label banding.",
      "sources": [
        1,
        2,
        3
      ]
    },
    {
      "text": "Banding interfered with full insertion of the wire's ferrule into the spring-clamp terminal, leaving an inadequate connection.",
      "sources": [
        2
      ]
    },
    {
      "text": "The loose connection began a sequence leading to two underway blackouts; the second blackout involved a distinct generator fuel-pressure consequence.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "Loss of propulsion and steering close to the bridge left insufficient recovery time before the collision.",
      "sources": [
        2,
        3
      ]
    },
    {
      "text": "Worker-evacuation communication failed; this is distinct from the successful actions to stop road traffic.",
      "sources": [
        2,
        3
      ]
    }
  ],
  "unknown": [
    {
      "text": "The teaching model does not establish exact terminal dimensions, ship track, stopping distance, or bridge-collapse geometry.",
      "sources": [
        2
      ]
    },
    {
      "text": "This source review does not establish the current status of bridge rebuilding or later operational changes.",
      "sources": [
        3
      ]
    }
  ],
  "analysis": [
    {
      "title": "The initiating failure is one part of the finding",
      "paragraphs": [
        "The wire explains the start of the electrical failure sequence. The NTSB's findings also address recovery time, bridge protection, and warnings to workers, so the wire should not be treated as a complete explanation of every failure in the disaster."
      ],
      "sources": [
        1,
        2,
        3
      ]
    }
  ],
  "sources": [
    {
      "title": "NTSB · November 18, 2025 findings announcement",
      "url": "https://www.ntsb.gov/news/press-releases/pages/NR20251118.aspx",
      "note": "Adopted loose-wire finding and blackout sequence; independently checked in the project on November 11, 2026."
    },
    {
      "title": "NTSB · Final report MIR-25-40",
      "url": "https://www.ntsb.gov/investigations/AccidentReports/Reports/MIR2540.pdf",
      "note": "Executive summary, terminal-connection evidence, probable cause, and contributing safety factors; checked November 11, 2026."
    },
    {
      "title": "NTSB · Investigation DCA24MM031",
      "url": "https://www.ntsb.gov/investigations/pages/dca24mm031.aspx",
      "note": "Official case account of the collision and adopted findings; checked November 11, 2026."
    }
  ],
  "corrections": "Reporting checked November 11, 2026 against the project's reviewed source material. The explanatory model's limitations remain explicit; substantive corrections and new source findings will be dated here."
} satisfies Story;
