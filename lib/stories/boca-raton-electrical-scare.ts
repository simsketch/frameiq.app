import type { Story } from "./types";

export const bocaRatonElectricalScare = {
  "slug": "boca-raton-electrical-scare",
  "title": "Boca Raton electrical scare: a safe landing, an unconfirmed fault",
  "description": "What a reported alternator concern can tell us about an airplane’s electrical system—and what it cannot.",
  "category": "Aviation",
  "section": "Aviation",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-09",
  "thumbnail": "https://i.ytimg.com/vi/dqfYOmC3VEg/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ video thumbnail: Can a Plane Land Without Electricity? Boca Raton Scare Explained #Shorts",
  "summary": [
    "A Cessna landed safely in Boca Raton on November 9, 2026, after a reported possible alternator problem.",
    "BocaNewsNow reported that the tower called for rescue crews around 7:40 a.m., the aircraft landed before 8 a.m. and both occupants exited. The outlet said the aircraft retained power.",
    "An alternator problem and a total electrical failure are different conditions. The exact aircraft model and the failed component were not established in the reviewed report."
  ],
  "summarySources": [
    1,
    2
  ],
  "videos": [
    {
      "id": "dqfYOmC3VEg",
      "title": "Can a Plane Land Without Electricity? Boca Raton Scare Explained #Shorts",
      "description": "General aircraft-systems context; the diagrams are not the unidentified Cessna’s checklist or a reconstruction."
    }
  ],
  "timeline": [
    {
      "date": "2026-11-09",
      "label": "November 9, 2026 · Alert and safe landing",
      "text": "BocaNewsNow reported a tower alert around 7:40 a.m. and a safe landing before 8 a.m.",
      "sources": [
        1
      ]
    }
  ],
  "known": [
    {
      "text": "BocaNewsNow reported a safe landing before 8 a.m. and two occupants exiting the aircraft.",
      "sources": [
        1
      ]
    },
    {
      "text": "The report described a possible alternator problem, not a confirmed total electrical loss.",
      "sources": [
        1
      ]
    },
    {
      "text": "An engine-driven alternator normally supplies electricity and charges the battery; a working battery can temporarily supply electrical loads if charging stops.",
      "sources": [
        2
      ]
    },
    {
      "text": "Many conventional piston engines use magnetos independent of the main electrical system, while electrically dependent designs differ.",
      "sources": [
        2
      ]
    }
  ],
  "unknown": [
    {
      "text": "No exact Cessna model or confirmed mechanical diagnosis was established in the report.",
      "sources": [
        1
      ]
    },
    {
      "text": "Battery endurance depends on condition and electrical loads; the general systems explanation does not supply an aircraft-specific countdown.",
      "sources": [
        2
      ]
    }
  ],
  "analysis": [],
  "sources": [
    {
      "title": "BocaNewsNow · Safe landing after an electrical concern",
      "url": "https://bocanewsnow.com/2026/11/09/airplane-crash-scare-in-boca-raton-fire-rescue-on-standby-for-troubled-aircraft/",
      "note": "November 9, 2026 reporting; no primary incident report was available in FrameIQ’s review, so event details remain attributed to the outlet."
    },
    {
      "title": "FAA · Pilot’s Handbook, Aircraft Systems",
      "url": "https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf",
      "note": "Chapter 7 background on generation, batteries, magnetos and design-dependent systems."
    },
    {
      "title": "FAA · Airport light signals",
      "url": "https://www.faa.gov/Air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
      "note": "General tower-signal context in the video; no claim that light signals were used in this event."
    }
  ],
  "corrections": "Reporting checked November 9, 2026. No primary incident report or confirmed fault was available in the reviewed material. General systems information is educational context; the aircraft-specific checklist governs actual operation. Substantive updates will be dated here."
} satisfies Story;
