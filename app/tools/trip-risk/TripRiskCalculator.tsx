"use client";

import { useState } from "react";
import { calculateRisk, travelModes, type ExposureUnit, type TravelMode } from "@/lib/risk";

const number = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 });

export default function TripRiskCalculator() {
  const [mode, setMode] = useState<TravelMode>("charter");
  const [unit, setUnit] = useState<ExposureUnit>("hours");
  const [amount, setAmount] = useState("2");
  let result: ReturnType<typeof calculateRisk> | undefined;
  let error = "";

  try {
    result = calculateRisk(mode, amount.trim() === "" ? NaN : Number(amount), unit);
  } catch (cause) {
    error = cause instanceof Error ? cause.message : "Enter a valid distance or duration.";
  }

  return (
    <div className="risk-calculator">
      <div className="risk-grid">
        <div className="form-field">
          <label className="field-label" htmlFor="travel-mode">Travel mode</label>
          <select className="input" id="travel-mode" value={mode} onChange={(event) => setMode(event.target.value as TravelMode)}>
            {Object.entries(travelModes).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label className="field-label" htmlFor="exposure-unit">Measure your trip in</label>
          <select className="input" id="exposure-unit" value={unit} onChange={(event) => setUnit(event.target.value as ExposureUnit)}>
            <option value="hours">Hours</option>
            <option value="miles">Miles</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label" htmlFor="trip-amount">{unit === "hours" ? "Trip duration (hours)" : "Trip distance (miles)"}</label>
          <input className="input" id="trip-amount" type="number" inputMode="decimal" min="0" step="any" required value={amount}
            aria-invalid={Boolean(error)} aria-describedby="trip-assumptions trip-error" onChange={(event) => setAmount(event.target.value)} />
        </div>
      </div>
      <p className="muted" id="trip-assumptions">
        {travelModes[mode].cohort} Conversion assumes {travelModes[mode].speedMph} mph.
        {result && <> Your modeled trip: {number.format(result.miles)} miles / {number.format(result.hours)} hours.</>}
      </p>
      <p id="trip-error" role="status" className="form-error">{error}</p>

      <div className="result-panel" aria-live="polite" aria-atomic="true">
        {result ? <>
          <span className="data-chip">Analysis · historical averages</span>
          <p className="risk-value">{number.format(result.eventsPerMillion)}</p>
          <h2>Expected fatal events per million modeled vehicle trips</h2>
          <p>Aviation: fatal accidents. Roads: vehicles involved in fatal crashes.</p>
          <div className="risk-equivalences">
            <p>≈ <strong>{number.format(result.carMiles)} miles of driving</strong></p>
            <p>≈ <strong>{number.format(result.motorcycleMiles)} miles by motorcycle</strong></p>
          </div>
          <p className="muted">Approximate exposure equivalences; different event definitions remain.</p>
        </> : <p>Enter a positive distance or duration to see the comparison.</p>}
      </div>

      <aside className="callout" aria-labelledby="risk-caveats">
        <h2 id="risk-caveats">Averages, not your personal odds</h2>
        <p>This is a model of fatal-event exposure, not a probability of your death, a passenger-risk estimate, or a safety rating for a particular aircraft, operator or route.</p>
        <ul>
          <li>Aviation counts fatal accidents; roads count vehicles involved in deadly crashes. One road crash can involve several vehicles, aviation events can aggregate aircraft, and fatal-injury reporting rules differ.</li>
          <li>Charter includes piston aircraft, turboprops and jets. General aviation is a broad proxy, not a measured small-private-plane-only category. These are not Learjet 60 odds.</li>
          <li>Historical averages assume a constant rate across your exposure. Weather, pilots, road types and routes differ; takeoff and landing risk is not uniform by hour. Occupancy and survivability are not modeled.</li>
        </ul>
      </aside>
    </div>
  );
}
