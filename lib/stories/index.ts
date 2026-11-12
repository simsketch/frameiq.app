import { challengerJoint } from "./challenger-joint";
import { webbMirrors } from "./webb-mirrors";
import { daliKeyBridge } from "./dali-key-bridge";
import { liquefaction } from "./liquefaction";
import { johnstownFlood } from "./johnstown-flood";
import { microwaveColdSpots } from "./microwave-cold-spots";
import { volcanicAshEngines } from "./volcanic-ash-engines";
import { jensenHuang } from "./jensen-huang";
import { ingenuityThinAir } from "./ingenuity-thin-air";
import { bostonMolasses } from "./boston-molasses";
import { escapadeFlyby } from "./escapade-flyby";
import { underseaInternet } from "./undersea-internet";
import { tsunamiShoaling } from "./tsunami-shoaling";
import { hyattWalkways } from "./hyatt-walkways";
import { apollo13Filter } from "./apollo-13-filter";
import { lakeNyos } from "./lake-nyos";
import { learjetN722bd } from "./learjet-n722bd";
import { quantumFridge } from "./quantum-fridge";
import { swiftReentry } from "./swift-reentry";
import { tacomaNarrows } from "./tacoma-narrows";
import { titanPressureHull } from "./titan-pressure-hull";
import { aiPowerGrid } from "./ai-power-grid";
import { deerfieldCheckers } from "./deerfield-checkers";
import { edmundFitzgerald } from "./edmund-fitzgerald";
import { gwinnettPlaneCrash } from "./gwinnett-plane-crash";
import { hamburgIowaCrash } from "./hamburg-iowa-crash";
import { laxCloseCall } from "./lax-close-call";
import { airlinePrivateFlyingSafety } from "./airline-private-flying-safety";
import { bayshoreRoadLanding } from "./bayshore-road-landing";
import { bocaRatonElectricalScare } from "./boca-raton-electrical-scare";
import { kentuckyL39Crash } from "./kentucky-l39-crash";
import type { Story } from "./types";

// Same-day pages follow the latest confirmed RSS video order.
export const stories: Story[] = [
  challengerJoint,
  webbMirrors,
  daliKeyBridge,
  liquefaction,
  johnstownFlood,
  microwaveColdSpots,
  volcanicAshEngines,
  jensenHuang,
  ingenuityThinAir,
  bostonMolasses,
  escapadeFlyby,
  underseaInternet,
  tsunamiShoaling,
  hyattWalkways,
  apollo13Filter,
  lakeNyos,
  learjetN722bd,
  quantumFridge,
  swiftReentry,
  tacomaNarrows,
  titanPressureHull,
  aiPowerGrid,
  deerfieldCheckers,
  edmundFitzgerald,
  gwinnettPlaneCrash,
  hamburgIowaCrash,
  laxCloseCall,
  airlinePrivateFlyingSafety,
  bayshoreRoadLanding,
  bocaRatonElectricalScare,
  kentuckyL39Crash,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export { formatStoryDate } from "../story-date";
