
import React from 'react';
import TikTokList from './TikTokList';
import './TikTokList.css';

function TikTokSection() {
  const tiktokVideos = [
    { embedUrl: 'https://www.tiktok.com/embed/v2/7416615737625742625', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7415612437690354976', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7415211513687985440', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7410452814599572768', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7412721269256293665', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7414025172929269025', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7386689202978639137', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7392204229722508576', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' },
    { embedUrl: 'https://www.tiktok.com/embed/v2/7405877763229371681', profileUrl: 'https://www.tiktok.com/@feliznailz_?_t=8piOXL5StTl&_r=1&fbclid=IwY2xjawFSZbZleHRuA2FlbQIxMAABHfMWREadslbQpu5LpkX_gOlXNDeM3IXfLvNHsLP5WoEjNMxyJozpaJGMNA_aem_yZViQyCimYzOSPrqqLx83w' }
  ];

  return (
    <div className="tiktok-section">
      <h1 className="main-heading">@feliznailz_</h1>
      <TikTokList tiktokVideos={tiktokVideos} />
    </div>
  );
}

export default TikTokSection;
