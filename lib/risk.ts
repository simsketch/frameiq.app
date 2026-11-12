export type TravelMode = "airline" | "charter" | "ga" | "car" | "motorcycle";
export type ExposureUnit = "hours" | "miles";

export const travelModes: Record<TravelMode, {
  label: string;
  speedMph: number;
  rate: number;
  rateUnit: "hour" | "mile";
  cohort: string;
}> = {
  airline: {
    label: "Scheduled airline",
    speedMph: 300,
    rate: 3 / 172_105_447,
    rateUnit: "hour",
    cohort: "Scheduled-airline fatal accidents, 2015–2024.",
  },
  charter: {
    label: "Charter airplane",
    speedMph: 300,
    rate: 44 / 27_683_634.1895,
    rateUnit: "hour",
    cohort: "Charter-airplane fatal accidents, 2015–2024; includes piston, turboprop and jet aircraft, excludes helicopters.",
  },
  ga: {
    label: "Small private plane / general aviation",
    speedMph: 120,
    rate: (2_102 - 17) / 220_802_471.5655,
    rateUnit: "hour",
    cohort: "Broad general-aviation fatal accidents, 2015–2024, retaining the source exclusions; not a measured small-plane-only rate.",
  },
  car: {
    label: "Passenger car",
    speedMph: 60,
    rate: 1.80 / 100_000_000,
    rateUnit: "mile",
    cohort: "Passenger-car involvements in fatal crashes, 2023; excludes SUVs, pickups and vans from this source row.",
  },
  motorcycle: {
    label: "Motorcycle",
    speedMph: 60,
    rate: 31.87 / 100_000_000,
    rateUnit: "mile",
    cohort: "Motorcycle involvements in fatal crashes, 2023; vehicle involvements, not motorcyclist deaths.",
  },
};

export function calculateRisk(mode: TravelMode, amount: number, unit: ExposureUnit) {
  if (!Object.hasOwn(travelModes, mode) || !Number.isFinite(amount) || amount <= 0 ||
    (unit !== "hours" && unit !== "miles")) {
    throw new RangeError("Choose a travel mode and enter a positive, finite distance or duration.");
  }

  const selected = travelModes[mode];
  const miles = unit === "miles" ? amount : amount * selected.speedMph;
  const hours = unit === "hours" ? amount : amount / selected.speedMph;
  const exposure = selected.rate * (selected.rateUnit === "hour" ? hours : miles);
  const result = {
    miles,
    hours,
    eventsPerMillion: exposure * 1_000_000,
    carMiles: exposure / travelModes.car.rate,
    motorcycleMiles: exposure / travelModes.motorcycle.rate,
  };

  if (!Object.values(result).every(Number.isFinite) || result.eventsPerMillion <= 0) {
    throw new RangeError("Enter a distance or duration within the calculator’s numeric range.");
  }
  return result;
}
