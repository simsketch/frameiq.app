"use client";

import { useState } from "react";

export default function LiteYouTube({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="lite-youtube">
      <div className="video-embed">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            width="560"
            height="315"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="lite-youtube-button"
            aria-label={`Load and play ${title} on YouTube`}
            onClick={() => setLoaded(true)}
          >
            {/* The adjacent title supplies the thumbnail's accessible description. */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              width="480"
              height="360"
              loading="lazy"
              className="video-thumbnail"
            />
            <span className="play-button" aria-hidden="true">▶</span>
            <span className="video-play-icon">Load video</span>
          </button>
        )}
      </div>
      <figcaption className="video-caption">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
      </figcaption>
    </figure>
  );
}
