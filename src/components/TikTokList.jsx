// src/components/TikTokList.jsx
import React, { useState } from 'react';
import TikTok from './TikTok';
import './TikTokList.css';

const TikTokList = ({ tiktokVideos }) => {
  const [visibleTiktoks, setVisibleTiktoks] = useState(3);

  const handleSeeMore = () => {
    setVisibleTiktoks((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="tiktok-list">
      <div className="tiktok-row">
        {tiktokVideos.slice(0, visibleTiktoks).map((video, index) => (
          <TikTok key={index} embedUrl={video.embedUrl} profileUrl={video.profileUrl} />
        ))}
      </div>
      {visibleTiktoks < tiktokVideos.length && (
        <button className="see-more-btn" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </div>
  );
};

export default TikTokList;
