// src/components/TikTokSection.jsx
import React from 'react';
import TikTokList from './TikTokList';
import './TikTokList.css';

function TikTokSection() {
  const tiktokVideos = [
    { embedUrl: 'https://www.tiktok.com/embed/v2/7414025172929269025', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7412721269256293665', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7410452814599572768', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7405877763229371681', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7414025172929269025', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7414025172929269025', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' }
  ];

  return (
    <div className="tiktok-section">
      <h1 className="main-heading">@feliznailz_</h1>
      <TikTokList tiktokVideos={tiktokVideos} />
    </div>
  );
}

export default TikTokSection;
