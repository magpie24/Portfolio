
import React from 'react';
import './TikTokList.css';

const TikTok = ({ embedUrl, profileUrl }) => {
  return (
    <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="tiktok-container">
      <iframe
        src={embedUrl}
        className="tiktok-embed"
       
        title="TikTok video"
      ></iframe>
    </a>
  );
};

export default TikTok;
