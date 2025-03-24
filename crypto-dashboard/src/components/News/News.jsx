import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="empty-state">
      <h2>Financial News</h2>
      <p>Stay updated with the latest financial news and market insights.</p>
      <div className="news-placeholder">
        <div className="news-item">
          <h3>Market Update: Tech Stocks Rally</h3>
          <p>Technology stocks surged today as investors responded positively to earnings reports...</p>
        </div>
        <div className="news-item">
          <h3>Cryptocurrency Regulations Expected Next Month</h3>
          <p>Lawmakers are set to announce new cryptocurrency regulations that could impact market...</p>
        </div>
      </div>
    </div>
  );
};

export default News;