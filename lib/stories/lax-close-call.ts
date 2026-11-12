import type { Story } from "./types";

export const laxCloseCall = {
  "slug": "lax-close-call",
  "title": "LAX close call: one turn, two departing jets",
  "description": "The FAA-attributed account, the controller intervention and the difference between height and lateral separation.",
  "category": "Aviation",
  "section": "Aviation",
  "status": "Developing",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-10",
  "thumbnail": "https://i.ytimg.com/vi/vRB2jvToKR4/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ video thumbnail: One Turn Put Two Departing Jets in Conflict at LAX",
  "summary": [
    "Air France 28 and American 1660 departed parallel runways at Los Angeles International Airport around 12:20 a.m. on November 7, 2026.",
    "Fox News reported an FAA statement that Air France made an unauthorized turn into the other aircraft’s departure path. Controllers issued immediate corrective instructions, and both flights continued safely.",
    "ABC7 reported flight-tracking estimates of 400 feet of vertical separation and 4,600 feet of lateral separation. Those estimates were not final FAA closest-approach findings, and the reason for the turn remained under investigation in the checked material."
  ],
  "summarySources": [
    1,
    2,
    3
  ],
  "videos": [
    {
      "id": "vRB2jvToKR4",
      "title": "One Turn Put Two Departing Jets in Conflict at LAX",
      "description": "Schematic aircraft and narrated ATC paraphrases explain the reporting; they are not synchronized radar or original radio audio."
    }
  ],
  "timeline": [
    {
      "date": "2026-11-07",
      "label": "November 7, 2026 · Departures and intervention",
      "text": "Reporting places the event around 12:20 a.m. local time. Controllers issued corrective instructions after the turn; both flights continued safely.",
      "sources": [
        1,
        3
      ]
    }
  ],
  "known": [
    {
      "text": "The FAA statement, attributed through Fox News reporting, described an unauthorized turn by Air France during parallel departures around 12:20 a.m. on November 7.",
      "sources": [
        1
      ]
    },
    {
      "text": "Reported instructions told Air France to turn west immediately and American to remain at 2,000 feet; both flights continued safely.",
      "sources": [
        1,
        3
      ]
    },
    {
      "text": "The reported 400-foot vertical and 4,600-foot lateral figures came from flight-tracking estimates cited by ABC7; 400 feet was not the total distance between aircraft.",
      "sources": [
        2
      ]
    },
    {
      "text": "The FAA’s climb-via explanation means following a departure’s lateral path and associated altitude and speed restrictions.",
      "sources": [
        4,
        5
      ]
    }
  ],
  "unknown": [
    {
      "text": "The checked sources did not establish the reason for Air France’s turn or a final FAA closest-approach measurement.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "No actual TCAS activation, pilot motive, collision countdown or measured final flight paths were established by this review.",
      "sources": [
        1,
        2,
        3
      ]
    }
  ],
  "analysis": [],
  "sources": [
    {
      "title": "Fox News · FAA-attributed account",
      "url": "https://www.foxnews.com/travel/american-airlines-plane-nearly-hit-air-france-jet-after-takeoff-lax",
      "note": "FAA statement accessed through the requested outlet’s reporting; the research did not locate a direct FAA incident publication."
    },
    {
      "title": "ABC7 · LAX close-call reporting",
      "url": "https://abc7.com/post/air-france-flight-hits-american-airlines-plane-lax-close-call/20027385/",
      "note": "The 400-foot vertical and 4,600-foot lateral figures are attributed tracking estimates, not final agency measurements."
    },
    {
      "title": "AeroCorner · Reported instructions and outcome",
      "url": "https://aerocorner.com/news/air-france-af28-lax-wrong-turn-american-aa1660/",
      "note": "Supports the reported corrective instructions and continuation of the flights."
    },
    {
      "title": "FAA AIM · Departure procedures",
      "url": "https://www.faa.gov/Air_traffic/publications/atpubs/aim_html/chap5_section_2.html",
      "note": "Primary technical explanation of climb-via procedures and restrictions."
    },
    {
      "title": "FAA · SUMMR TWO departure chart",
      "url": "https://aeronav.faa.gov/d-tpp/2611/00237SUMMR.PDF",
      "note": "Chart valid October 29–November 26, 2026; contextual evidence, not current flight-planning guidance."
    }
  ],
  "corrections": "Reporting checked November 10, 2026. Separation figures remain attributed tracking estimates, and the graphics are schematic with aircraft enlarged. No final FAA cause or closest-approach finding has been incorporated. New official findings will be dated here."
} satisfies Story;
