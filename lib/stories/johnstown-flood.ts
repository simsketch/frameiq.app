import type { Story } from "./types";

export const johnstownFlood = {
  slug: "johnstown-flood",
  title: "Johnstown: the flood that began fourteen miles upstream",
  description: "The National Park Service record of the South Fork Dam failure, the altered outlets, and the flood that reached Johnstown in under an hour.",
  category: "History · Explainer",
  section: "History",
  status: "Explainer",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  sourceCutoff: "2026-11-11",
  thumbnail: "https://i.ytimg.com/vi/Rl6wSFFmbeU/hqdefault.jpg",
  thumbnailAlt: "FrameIQ's illustrated Johnstown flood explainer",
  summary: [
    "On May 31, 1889, the South Fork Dam failed above Pennsylvania's Conemaugh Valley. The official historical death toll from the Johnstown flood is 2,209; the National Park Service notes that the exact total cannot be known.",
    "The dam stood fourteen miles upstream from Johnstown by river, and the flood reached the city in under an hour. The NPS account describes heavy rain, changes that limited safe outflow, and water overtopping the earthen dam before it failed.",
    "FrameIQ's animation explains those connections with simplified terrain and flow, rather than an exact reconstruction of the flood.",
  ],
  summarySources: [1, 2, 3],
  videos: [
    {
      id: "Rl6wSFFmbeU",
      title: "Johnstown: The Flood Began Fourteen Miles Away",
      description: "A teaching illustration of the reservoir, outlets, overtopping and downstream valley. Distances, terrain and time are simplified; no victims are depicted.",
    },
  ],
  timeline: [
    {
      date: "1889-05-31",
      label: "May 31, 1889 · Dam failure and downstream flood",
      text: "The NPS history places the dam's failure at about 3:10 p.m. and the flood's arrival in Johnstown at 4:07 p.m. Water and debris devastated communities along the fourteen-mile river route.",
      sources: [1, 3],
    },
  ],
  known: [
    { text: "The official historical death toll is 2,209. NPS distinguishes that official count from an exact total that cannot now be established.", sources: [1, 2] },
    { text: "The fourteen-mile distance is measured along the river, rather than in a straight line.", sources: [1, 3] },
    { text: "NPS records a lowered dam crest, removed bottom outlet pipes and a spillway obstructed by fish screens. These changes limited safe discharge from the reservoir.", sources: [1] },
    { text: "The NPS narrative describes water overtopping the dam and eroding a growing notch before failure.", sources: [2] },
  ],
  unknown: [
    { text: "The exact number of people who died is unknowable, according to the NPS history.", sources: [2] },
    { text: "The animation does not determine exact flood depth, velocity, inundation boundaries or breach shape. It cannot establish fish screens as the sole cause of the disaster.", sources: [1, 2, 3] },
  ],
  analysis: [
    {
      title: "A connected safety system",
      paragraphs: ["Analysis: The reservoir, its outlets and downstream communities form a connected system. FrameIQ uses the documented alterations and overtopping account to explain why storage and safe outflow must be considered together; its procedural terrain and prescribed erosion are teaching choices, not a surveyed hydraulic model."],
      sources: [1, 2, 3],
    },
  ],
  sources: [
    { title: "National Park Service · The South Fork Dam", url: "https://www.nps.gov/jofl/learn/historyculture/the-south-fork-dam.htm", note: "Official history supporting the dam alterations, fourteen river miles, historical toll and event times; checked November 11, 2026." },
    { title: "National Park Service · In the Lakebed", url: "https://www.nps.gov/places/in-the-lakebed.htm", note: "Overtopping, the growing notch and the limits of the official death toll; checked November 11, 2026." },
    { title: "National Park Service · Path of the Flood", url: "https://home.nps.gov/jofl/learn/historyculture/path-of-the-flood.htm", note: "The valley communities, debris and flood travel in under an hour; checked November 11, 2026." },
  ],
  corrections: "Reporting checked November 11, 2026. This page follows the project's reviewed NPS sources. The official toll is qualified, river distance is explicit, and the illustration supplies no exact flood speed or surveyed reconstruction. Later factual corrections will be dated here.",
} satisfies Story;
