import type { Story } from "./types";

export const bostonMolasses = {
  slug: "boston-molasses",
  title: "How molasses became a deadly flood in Boston",
  description: "The documented 1919 disaster and the limits of a physics illustration about scale, viscosity and cooling.",
  category: "History · Explainer",
  section: "History",
  status: "Explainer",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  sourceCutoff: "2026-11-11",
  thumbnail: "https://i.ytimg.com/vi/dYHbpArWJ0g/hqdefault.jpg",
  thumbnailAlt: "FrameIQ's illustrated Boston molasses flood explainer",
  summary: [
    "On January 15, 1919, a storage tank ruptured in Boston's North End, releasing molasses into the neighborhood. Boston City Archives records that 21 people died.",
    "The city history describes a tank fifty feet tall and a release of approximately 2.3 million U.S. gallons. FrameIQ uses an illustrative animation to explore why a large volume of thick liquid can still be dangerous.",
    "The checked research discusses viscosity and possible cooling effects, but the animation does not establish the rupture trigger, an exact flood speed or the historical flow through individual streets.",
  ],
  summarySources: [1, 2, 3],
  videos: [
    {
      id: "dYHbpArWJ0g",
      title: "How Molasses Became a Deadly Flood in Boston",
      description: "An original teaching illustration of industrial scale, gravity, viscosity and cooling. The tank, streets and flow are simplified; no victims are depicted.",
    },
  ],
  timeline: [
    {
      date: "1919-01-15",
      label: "January 15, 1919 · The North End disaster",
      text: "A molasses storage tank ruptured in Boston's North End. The city history records 21 deaths and approximately 2.3 million U.S. gallons released.",
      sources: [1],
    },
  ],
  known: [
    { text: "Boston City Archives places the disaster on January 15, 1919, in the North End and records 21 deaths.", sources: [1] },
    { text: "The city history gives a tank height of fifty feet and a release of about 2.3 million U.S. gallons. These are rounded historical figures.", sources: [1] },
    { text: "The original American Physical Society conference research describes molasses as highly viscous and denser than water. Viscosity means resistance to flow; it does not make a large volume harmless.", sources: [2] },
  ],
  unknown: [
    { text: "The project's reviewed material does not establish the tank's rupture trigger or an exact historical wave speed. The animation cannot supply either measurement.", sources: [1, 3] },
    { text: "Researchers' cooling explanation is conditional. It does not provide a measured temperature history or establish cooling as the sole fatal mechanism.", sources: [3] },
  ],
  analysis: [
    {
      title: "What the cooling research can explain",
      paragraphs: ["Research interpretation: The APS research release explains that cooling would have increased the spilled molasses' viscosity and made rescue and cleanup harder. That is an attributed reconstruction informed by laboratory rheology, rather than a measured account of every stage of the disaster.", "FrameIQ's jar-to-tank comparison and flood animation illustrate scale and a gravity-driven flow. Their prescribed timing and generic streets cannot be used to infer the actual flood's speed or damage at a particular location."],
      sources: [2, 3],
    },
  ],
  sources: [
    { title: "Boston City Archives · 100 years ago today: Molasses crashes through Boston's North End", url: "https://www.boston.gov/news/100-years-ago-today-molasses-crashes-through-bostons-north-end", note: "Official city history for the date, neighborhood, 21 deaths, tank height and approximate volume; checked November 11, 2026." },
    { title: "American Physical Society · DFD 2016 research abstract L27.00008", url: "https://meetings-archive.aps.org/dfd/2016/l27/8/", note: "Original conference research on molasses material properties and the flood; checked November 11, 2026." },
    { title: "American Physical Society · Molasses Creates a Sticky Situation", url: "https://higherlogicdownload.s3.amazonaws.com/APS/22d184d0-d6d2-4493-97da-847d341d3d82/UploadedImages/Documents/Molasses-Creates-a-Stick-Situation.pdf", note: "Page 2 supports the conditional cooling and rescue interpretation. An inconsistent speed conversion on page 1 was excluded by the project review; checked November 11, 2026." },
  ],
  corrections: "Reporting checked November 11, 2026. This page uses the reviewed Boston City Archives and APS material. It omits the speed figures flagged by the project review and makes no claim about the rupture trigger. The video is an illustration, not an exact flood reconstruction. Later factual corrections will be dated here.",
} satisfies Story;
