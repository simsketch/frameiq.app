import type { Story } from "./types";

export const challengerJoint = {
  "slug": "challenger-joint",
  "title": "Challenger: the joint failure and the decisions behind it",
  "description": "The Rogers Commission's findings on the booster joint, cold-sensitive seals, and the launch decision.",
  "category": "Space history",
  "section": "Space",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-11",
  "thumbnail": "https://i.ytimg.com/vi/IVbfLmHgrGk/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ's The Tiny Gap Behind Challenger’s Disaster video thumbnail",
  "summarySources": [
    1,
    2,
    3
  ],
  "summary": [
    "Space shuttle Challenger broke apart about 73 seconds after launch on January 28, 1986, and all seven crew members died.",
    "The Rogers Commission located the initiating failure in the joint between the two lower segments of the right solid rocket motor.",
    "The joint used two rubber O-rings to contain combustion gas, and cold impaired the seals' timely response.",
    "The commission also documented engineers' opposition to launch and flaws in decision-making; its findings do not support a cold-only explanation."
  ],
  "videos": [
    {
      "id": "IVbfLmHgrGk",
      "title": "The Tiny Gap Behind Challenger’s Disaster",
      "description": "FrameIQ's original explanatory animation. The enlarged teaching model illustrates the mechanism; it is not an exact reconstruction."
    }
  ],
  "timeline": [
    {
      "date": "1986-01-28",
      "label": "January 28, 1986 · Launch and loss",
      "text": "Challenger launched and broke apart about 73 seconds into flight; all seven crew members died.",
      "sources": [
        1
      ]
    }
  ],
  "known": [
    {
      "text": "The Rogers Commission identified the right solid rocket motor's lower-segment joint as the initiating failure site.",
      "sources": [
        2
      ]
    },
    {
      "text": "The tang-and-clevis field joint used two rubber O-rings, with combustion-gas pressure acting to create sealing contact.",
      "sources": [
        2
      ]
    },
    {
      "text": "Cold reduced the rings' recovery and hindered timely sealing as the joint moved; material recovery alone is not a complete model of the failure.",
      "sources": [
        2
      ]
    },
    {
      "text": "A hot-gas flame later impinged on the external tank and booster attachment before structural breakup.",
      "sources": [
        1
      ]
    },
    {
      "text": "The commission documented engineering opposition to launch and flaws in the launch decision process.",
      "sources": [
        3
      ]
    }
  ],
  "unknown": [
    {
      "text": "The enlarged warm/cold animation does not establish exact accident gap dimensions, forces, or seal timing, and does not guarantee that a warm ring would always seal.",
      "sources": [
        2
      ]
    },
    {
      "text": "The research does not support a claim that the crew died at the instant of breakup; no exact death timing is asserted here.",
      "sources": [
        1
      ]
    }
  ],
  "analysis": [
    {
      "title": "A material demonstration has limits",
      "paragraphs": [
        "The warm/cold comparison illustrates slower material recovery. The source record also describes pressure-actuated sealing, joint movement, design sensitivity, and decision-making failures. Those factors keep a small-component demonstration from becoming a complete causal explanation."
      ],
      "sources": [
        2,
        3
      ]
    }
  ],
  "sources": [
    {
      "title": "Rogers Commission · Chapter III: The accident",
      "url": "https://www.nasa.gov/history/rogersrep/v1ch3.htm",
      "note": "Launch date, flight sequence, flame development, structural breakup, and seven fatalities; checked November 11, 2026."
    },
    {
      "title": "Rogers Commission · Chapter IV: The cause",
      "url": "https://www.nasa.gov/history/rogersrep/v1ch4.htm",
      "note": "Joint location, two-ring seal, pressure actuation, cold response, and design findings; checked November 11, 2026."
    },
    {
      "title": "Rogers Commission · Chapter V: The contributing cause",
      "url": "https://www.nasa.gov/history/rogersrep/v1ch5.htm",
      "note": "Engineer opposition and flaws in the decision-making process; checked November 11, 2026."
    }
  ],
  "corrections": "Reporting checked November 11, 2026 against the project's reviewed source material. The explanatory model's limitations remain explicit; substantive corrections and new source findings will be dated here."
} satisfies Story;
