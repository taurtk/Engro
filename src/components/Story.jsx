import React, { useEffect, useState } from "react";
import { getItem } from "../services/hacker-news-api";
import StoryPreviewPlaceholder from "./StoryPreviewPlaceholder";
import LazyLoad from "react-lazyload";
import { timestampToTime } from "../utils/normalization";

const Story = ({
  match: {
    params: { id },
  },
}) => {
  const [story, setStory] = useState({});
  const [seconds, setSeconds] = useState(59);

  // >> TIMER

  useEffect(() => {
    let timer;
    
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSeconds, seconds]);

  // << TIMER

  useEffect(() => {
    const storyRequest = async () => {
      const response = await getItem(id);
      
      setStory(response);
    };
    storyRequest().then(() => {});
  }, [id]);

  const renderTitle = () => {
    if (story.title) {
      return (
        <h2>
          {story.title} (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link link-source"
            href={story.url}
          >
            SOURCE
          </a>
          )
        </h2>
      );
    }
    return (
      <div className="skeleton-item justify-center">
        <div
          className="skeleton-block skeleton-block-title"
          style={{ maxWidth: "500px" }}
        >
          {" "}
        </div>
      </div>
    );
  };

  const renderInfo = () => {
    if (story.by) {
      return (
        <section className="story-info justify-center">
          <div>
            <span>Score:</span> {story.score}
          </div>
          <div>
            <span>By:</span> {story.by}
          </div>
          <div>
            <span>Posted:</span> {timestampToTime(story.time)}
          </div>
        </section>
      );
    }
    return (
      <div className="skeleton-item justify-center">
        <div
          className="skeleton-block skeleton-block-info"
          style={{ maxWidth: "50px" }}
        >
          {" "}
        </div>
        <div
          className="skeleton-block skeleton-block-info"
          style={{ maxWidth: "100px" }}
        >
          {" "}
        </div>
        <div
          className="skeleton-block skeleton-block-info"
          style={{ maxWidth: "150px" }}
        >
          {" "}
        </div>
      </div>
    );
  };

  return (
    story && (
      <main>
        <article>
          {renderTitle()}
          {renderInfo()}
         
        </article>
      </main>
    )
  );
};

export default Story;
