import { learjetN722bd } from "./learjet-n722bd";

export const stories = [learjetN722bd];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function formatStoryDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
