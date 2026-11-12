import type { Story } from "./types";

export const volcanicAshEngines = {
  "slug": "volcanic-ash-engines",
  "title": "How volcanic ash can damage a jet engine",
  "description": "Rock, minerals, and volcanic glass can erode engine parts and form deposits inside a hot engine.",
  "category": "Aviation",
  "section": "Aviation",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-11",
  "thumbnail": "https://i.ytimg.com/vi/osdlbTRcRvE/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ's How Volcanic Ash Can Glaze a Jet Engine video thumbnail",
  "summarySources": [
    1,
    2,
    4,
    5,
    6
  ],
  "summary": [
    "Volcanic ash consists of fragments of rock, minerals, and volcanic glass, and its hard grains can erode engine parts.",
    "Ingested ash can melt in an engine's burner and form a hard glaze on stationary turbine guide vanes.",
    "Deposits can narrow gas passages and disrupt operation, potentially causing power loss or shutdown.",
    "These effects depend on material and engine conditions; not every encounter causes melting or engine failure.",
    "Wind can carry ash far from its source, and ordinary airborne radar does not reliably map the hazard."
  ],
  "videos": [
    {
      "id": "osdlbTRcRvE",
      "title": "How Volcanic Ash Can Glaze a Jet Engine",
      "description": "An enlarged engine cutaway illustrates ash damage and deposits on stationary guide vanes. It depicts no specific flight or eruption and supplies no operating limits or pilot procedure."
    }
  ],
  "timeline": [],
  "known": [
    {
      "text": "Volcanic ash is hard, abrasive material made of rock, minerals, and volcanic glass.",
      "sources": [
        1
      ]
    },
    {
      "text": "A compressor compresses incoming air; fuel burns in the combustor, and the turbine helps drive the compressor.",
      "sources": [
        3
      ]
    },
    {
      "text": "Stationary turbine inlet guide vanes direct hot gas onto rotating turbine blades.",
      "sources": [
        4
      ]
    },
    {
      "text": "Burner heat can melt ingested ash, allowing a hard glaze to deposit on turbine nozzles; erosion and cooling-system damage are additional pathways.",
      "sources": [
        2
      ]
    },
    {
      "text": "Wind can disperse ash over long distances, while monitoring and forecasts track the hazard.",
      "sources": [
        1,
        5
      ]
    },
    {
      "text": "FAA guidance says ash clouds are not normally detected by airborne or air traffic radar; that does not mean every radar system can never detect ash.",
      "sources": [
        6
      ]
    }
  ],
  "unknown": [
    {
      "text": "The reviewed teaching model establishes no ash concentration, exposure duration, temperature, or engine-specific shutdown threshold.",
      "sources": [
        2,
        3,
        4
      ]
    },
    {
      "text": "No actual eruption, flight encounter, or current aviation advisory is established by this location-free explanation.",
      "sources": [
        1,
        5,
        6
      ]
    }
  ],
  "analysis": [
    {
      "title": "A conditional mechanism, not a failure forecast",
      "paragraphs": [
        "The animation enlarges particles and deposits and compresses time to show one damage pathway. It does not calculate flow or predict when an engine will lose power; material properties and operating conditions determine the outcome."
      ],
      "sources": [
        2,
        3,
        4
      ]
    }
  ],
  "sources": [
    {
      "title": "USGS · What is volcanic ash?",
      "url": "https://volcanoes.usgs.gov/volcanic_ash/ash.html",
      "note": "Composition, abrasiveness, and dispersal; checked November 11, 2026."
    },
    {
      "title": "FAA testimony · Effects of volcanic ash on aircraft",
      "url": "https://www.transportation.gov/testimony/mitigating-impact-volcanic-ash-clouds-aviation-%E2%80%93-what-do-we-need-know",
      "note": "May 5, 2010 testimony describing melting, turbine deposits, erosion, cooling damage, and shutdown risk; checked November 11, 2026."
    },
    {
      "title": "NASA Glenn · Gas turbine parts",
      "url": "https://www.grc.nasa.gov/WWW/K-12/BGP/turbparts.html",
      "note": "Compressor, combustor, and turbine functions; checked November 11, 2026."
    },
    {
      "title": "FAA · Aviation maintenance glossary",
      "url": "https://www.faa.gov/sites/faa.gov/files/14_amtp_glossary.pdf",
      "note": "Turbine inlet guide vane and turbine nozzle definitions; checked November 11, 2026."
    },
    {
      "title": "National Weather Service · Volcanic ash",
      "url": "https://www.weather.gov/safety/airquality-volcanic-ash",
      "note": "Ash transport, aviation hazard, and monitoring; checked November 11, 2026."
    },
    {
      "title": "FAA · Volcanic ash air traffic guidance",
      "url": "https://www.faa.gov/air_traffic/publications/atpubs/atc_html/chap10_section_2.html",
      "note": "Section 10-2-18: ash clouds are not normally detected by airborne or air traffic radar; checked November 11, 2026."
    }
  ],
  "corrections": "Reporting checked November 11, 2026 against the project's reviewed source material. The explanatory model's limitations remain explicit; substantive corrections and new source findings will be dated here."
} satisfies Story;
