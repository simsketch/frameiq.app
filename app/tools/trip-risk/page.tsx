import type { Metadata } from "next";
import TripRiskCalculator from "./TripRiskCalculator";

export const metadata: Metadata = {
  title: "How risky is your trip?",
  description: "Compare modeled fatal-event exposure for airline, charter, general aviation, car and motorcycle trips, with transparent assumptions and sources.",
  alternates: { canonical: "/tools/trip-risk" },
  openGraph: {
    title: "How risky is your trip? · FrameIQ",
    description: "Explore the numbers behind travel risk. Historical averages, clear assumptions, and approximate exposure equivalences.",
    url: "/tools/trip-risk",
    images: ["/opengraph-image"],
  },
};

export default function TripRiskPage() {
  return (
    <main id="main-content" className="shell section">
      <div className="page-intro">
        <p className="eyebrow">FrameIQ tools / 01</p>
        <h1>How risky is your trip?</h1>
        <p>Put an unfamiliar number in context. Choose a travel mode and a trip length to compare historical fatal-event exposure.</p>
      </div>
      <TripRiskCalculator />
      <section className="section" aria-labelledby="method-heading">
        <p className="eyebrow">Open methodology</p>
        <h2 id="method-heading">The numbers behind the comparison</h2>
        <p>Aviation: E = (fatal accidents ÷ flight hours) × your modeled hours × 1,000,000. Roads: E = (fatal-crash vehicle involvements ÷ vehicle miles) × your modeled miles × 1,000,000. We use the pooled aviation totals directly, without averaging annual rates or rounding inputs.</p>
        <ul className="source-list">
          <li>Airline: 3 ÷ 172,105,447 flight hours; charter airplanes: 44 ÷ 27,683,634.1895 hours; general aviation: (2,102 − 17) ÷ 220,802,471.5655 hours. <a href="https://www.ntsb.gov/safety/Documents/AviationAccidentStatistics_2005-2024_20260112.xlsx" target="_blank" rel="noopener noreferrer">NTSB 2015–2024, Tables 6, 17 and 10 note c (XLSX) ↗</a></li>
          <li>Passenger car: 1.80 involvements per 100,000,000 vehicle miles; motorcycle: 31.87 per 100,000,000 vehicle miles. <a href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813738" target="_blank" rel="noopener noreferrer">NHTSA 2023, Table 3 (PDF) ↗</a></li>
        </ul>
        <p>Distance/hour conversions assume 300 mph for airline and charter, 120 mph for general aviation, and 60 mph for car and motorcycle. These are illustrative journey averages, not aircraft specifications. A 600-mile example becomes 2 flight hours, 5 general-aviation hours, or 10 road hours; airline/charter time includes climb and descent. Stops and airport ground travel are omitted, and equal road and air distances are a simplifying assumption.</p>
        <p>Road equivalents divide the trip’s modeled exposure by the relevant road involvement rate per mile. Changing road duration changes assumed mileage at 60 mph; at a fixed mileage, driving time alone does not change exposure. Results are expected counts across a million modeled vehicle journeys, not measured counts of identical trips. Display values are rounded; calculations use the full inputs.</p>
        <p className="muted">Verified source cutoff: November 8, 2026. Source cohorts and fatal-event definitions differ; these are approximate comparisons.</p>
      </section>
    </main>
  );
}
