import type { Story } from "./types";

export const quantumFridge = {
  "slug": "quantum-fridge",
  "title": "Why a tiny quantum chip needs a large refrigerator",
  "description": "Cooling, shielding and control wires explain the hardware surrounding superconducting qubits.",
  "category": "Technology",
  "section": "Technology",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-11",
  "thumbnail": "https://i.ytimg.com/vi/0d2OA5LW4AE/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ video thumbnail: Why a tiny quantum chip needs a large refrigerator",
  "summary": [
    "An IBM Quantum System Two computer was unveiled at the University of Chicago’s Hyde Park Labs on November 6, 2026. FrameIQ’s explainer uses that news to examine why superconducting quantum processors sit inside much larger cooling systems.",
    "Cooling suppresses unwanted thermal transitions, while shields and vacuum insulation limit heat transfer. Control and readout wires are necessary, but they also carry heat from warmer electronics.",
    "Low temperature does not remove every error, and other quantum-computing technologies use different hardware."
  ],
  "summarySources": [
    1,
    2,
    3,
    4
  ],
  "videos": [
    {
      "id": "0d2OA5LW4AE",
      "title": "Why Does a Tiny Quantum Chip Need This Giant Fridge? #Shorts",
      "description": "Original FrameIQ explanatory animation. Geometry, motion and timing are illustrative; read the source record and limitations below."
    }
  ],
  "timeline": [
    {
      "date": "2026-11-06",
      "label": "November 6, 2026 · Chicago unveiling",
      "text": "The university reported the unveiling of IBM Quantum System Two at Hyde Park Labs.",
      "sources": [
        1
      ]
    }
  ],
  "known": [
    {
      "text": "The university reported the November 6, 2026 unveiling of IBM Quantum System Two at Hyde Park Labs.",
      "sources": [
        1
      ]
    },
    {
      "text": "Controlled signals manipulate and read the quantum states of superconducting circuit qubits.",
      "sources": [
        3
      ]
    },
    {
      "text": "Staged cooling, thermal shields and vacuum insulation reduce unwanted heat transfer.",
      "sources": [
        2,
        3
      ]
    },
    {
      "text": "Wiring between warmer electronics and a cold processor adds heat load; refrigeration alone does not remove all disturbances.",
      "sources": [
        3,
        4
      ]
    }
  ],
  "unknown": [
    {
      "text": "The video’s generic refrigerator is not a view inside the Chicago installation, and its dimensions and wiring count are not machine specifications.",
      "sources": [
        2,
        3
      ]
    },
    {
      "text": "The 15-millikelvin example comes from an IBM chip-testing laboratory. It is not a reported operating temperature for the Chicago installation.",
      "sources": [
        5
      ]
    }
  ],
  "analysis": [],
  "sources": [
    {
      "title": "University of Chicago · Quantum System Two unveiled",
      "url": "https://quantum.uchicago.edu/news-events/news/ibms-most-advanced-quantum-computer-unveiled-uchicagos-hyde-park-labs",
      "note": "University account of the November 6 unveiling; checked November 11, 2026."
    },
    {
      "title": "IBM · Modular cryogenics",
      "url": "https://www.ibm.com/quantum/blog/modular-cryogenics",
      "note": "Vacuum insulation, staged cooling and thermal shielding; checked November 11, 2026."
    },
    {
      "title": "Nature via NIST · Cryogenic control of quantum circuits",
      "url": "https://tf.nist.gov/general/pdf/3134.pdf",
      "note": "Research paper, pages 575–576: thermal transitions, control/readout and wiring heat load; checked November 11, 2026."
    },
    {
      "title": "NIST · Quantum computing explained",
      "url": "https://www.nist.gov/quantum-information-science/quantum-computing-explained",
      "note": "Different qubit technologies and sensitivity to outside disturbances; checked November 11, 2026."
    },
    {
      "title": "IBM Research · Quantum characterization lab tour",
      "url": "https://research.ibm.com/blog/ibm-quantum-characterization-lab-tour",
      "note": "The specific 15-millikelvin chip-testing example; checked November 11, 2026."
    }
  ],
  "corrections": "Reporting checked November 11, 2026. This page uses the dated source checks in the production research; publication does not imply a new check of external sources. Substantive corrections will be recorded here."
} satisfies Story;
