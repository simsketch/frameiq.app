"use client";

import { useState } from "react";
import StoryCard, { type StoryCardData } from "./StoryCard";

export default function StoryIndex({ stories }: { stories: StoryCardData[] }) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(stories.map((story) => story.section))];
  const visible = stories.filter((story) => category === "All" || story.section === category);

  return (
    <div className="shell section">
      {stories.length > 8 && <div className="story-filters" role="group" aria-label="Filter stories by category">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>}
      <p className="story-count" role="status">{visible.length} {visible.length === 1 ? "story" : "stories"}{category !== "All" ? ` in ${category}` : " · Newest first"}</p>
      <div className="story-grid">{visible.map((story) => <StoryCard key={story.slug} story={story} />)}</div>
    </div>
  );
}
