import assert from "node:assert/strict";
import { calculateRisk, travelModes } from "../lib/risk.ts";

function near(actual, expected, tolerance = 1e-8) {
  assert.ok(Math.abs(actual - expected) < tolerance, `${actual} ≈ ${expected}`);
}

const expectedAt600Miles = {
  airline: 0.0348623481,
  charter: 3.1787734008,
  ga: 47.2141454128,
  car: 10.8,
  motorcycle: 191.22,
};

for (const [mode, expected] of Object.entries(expectedAt600Miles)) {
  const distanceResult = calculateRisk(mode, 600, "miles");
  near(distanceResult.eventsPerMillion, expected);
  near(calculateRisk(mode, 600 / travelModes[mode].speedMph, "hours").eventsPerMillion, expected);
}

const charter = calculateRisk("charter", 2, "hours");
near(charter.carMiles, 176.5985223, 1e-7);
assert.equal(Math.round(charter.carMiles), 177);
const car = calculateRisk("car", 600, "miles");
near(car.motorcycleMiles, 33.8876687, 1e-7);
assert.equal(Math.round(car.motorcycleMiles), 34);
near(calculateRisk("motorcycle", car.motorcycleMiles, "miles").eventsPerMillion, car.eventsPerMillion);
near(calculateRisk("charter", 3, "hours").eventsPerMillion, 4.7681601, 1e-7);
near(calculateRisk("ga", 4, "hours").eventsPerMillion, 37.7713163, 1e-7);
near(calculateRisk("ga", 6, "hours").eventsPerMillion, 56.6569745, 1e-7);

for (const amount of [0, -1, NaN, Infinity, -Infinity, null, "2", Number.MAX_VALUE, Number.MIN_VALUE]) {
  assert.throws(() => calculateRisk("charter", amount, "hours"), RangeError);
}
for (const mode of ["unknown", "__proto__", "toString"]) {
  assert.throws(() => calculateRisk(mode, 2, "hours"), RangeError);
}
assert.throws(() => calculateRisk("charter", 2, "minutes"), RangeError);

console.log("Risk checks passed: five modes, hours/miles, 177-mile charter analogy, 34-mile motorcycle analogy, and invalid inputs.");
