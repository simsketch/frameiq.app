import type { Story } from "./types";

export const liquefaction = {
  "slug": "liquefaction",
  "title": "Why earthquake ground can temporarily act like a liquid",
  "description": "Water already between soil grains, rising pore pressure and reduced strength explain a conditional ground-failure mechanism.",
  "category": "Science",
  "section": "Science",
  "status": "Explainer",
  "publishedAt": "2026-11-12",
  "updatedAt": "2026-11-12",
  "sourceCutoff": "2026-11-11",
  "thumbnail": "https://i.ytimg.com/vi/eSEbqWERlEY/hqdefault.jpg",
  "thumbnailAlt": "FrameIQ video thumbnail: Why earthquake ground can temporarily act like a liquid",
  "summary": [
    "Some loose, water-saturated ground can temporarily lose strength during earthquake shaking. The grains remain solid, while water already between them becomes central to how the soil carries load.",
    "Shaking rearranges the grains, and restricted drainage can allow water pressure to rise. Higher pore pressure reduces the effective forces at grain contacts, so buildings may settle and some buried tanks may rise.",
    "Whether this happens depends on the site and shaking; the explanation is not an assessment of a particular property."
  ],
  "summarySources": [
    1,
    2,
    3
  ],
  "videos": [
    {
      "id": "eSEbqWERlEY",
      "title": "Why Earthquake Ground Can Act Like a Liquid #Shorts",
      "description": "Original FrameIQ explanatory animation. Geometry, motion and timing are illustrative; read the source record and limitations below."
    }
  ],
  "timeline": [],
  "known": [
    {
      "text": "Loose saturated sand has load-bearing grain contacts and water between the grains before shaking begins.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "Grain rearrangement during shaking and restricted drainage can increase pore pressure.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "Increasing pore pressure can reduce effective stress and soil strength without melting the grains.",
      "sources": [
        1,
        2
      ]
    },
    {
      "text": "Water and sand escaping upward can form sand boils.",
      "sources": [
        1
      ]
    }
  ],
  "unknown": [
    {
      "text": "Susceptibility and possible settlement or uplift depend on soil, groundwater, structures and shaking. No universal earthquake threshold or property-specific risk is established here.",
      "sources": [
        3
      ]
    },
    {
      "text": "Ground improvement and suitable foundations require a site assessment; the schematic pile example does not guarantee protection.",
      "sources": [
        3
      ]
    }
  ],
  "analysis": [],
  "sources": [
    {
      "title": "USGS · Ground failures and liquefaction",
      "url": "https://pubs.usgs.gov/pp/1240b/report.pdf",
      "note": "Printed pages B24–B25: loss of bearing strength, grain contacts and sand boils; checked November 11, 2026."
    },
    {
      "title": "New York State DOT · Geotechnical Design Procedure GDP-9",
      "url": "https://www.dot.ny.gov/divisions/engineering/technical-services/technical-services-repository/GDP-9b.pdf",
      "note": "Revision 3, effective stress and pore-pressure mechanism, printed page 8; checked November 11, 2026."
    },
    {
      "title": "Utah Geological Survey · Liquefaction",
      "url": "https://geology.utah.gov/hazards/earthquakes/liquefaction/",
      "note": "Site conditions, susceptibility and mitigation context; checked November 11, 2026."
    }
  ],
  "corrections": "Reporting checked November 11, 2026. This page uses the dated source checks in the production research; publication does not imply a new check of external sources. Substantive corrections will be recorded here."
} satisfies Story;
