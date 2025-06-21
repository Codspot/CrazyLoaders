// src/components/loaders/SquidGameSvg.jsx
import React from 'react';
import './SquidSvg.css';

const SquidGameSvg = () => {
  return (
    <div className="squid-svg-loader">
      <svg className="shape circle" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <svg className="shape triangle" viewBox="0 0 100 100">
        <polygon points="50,15 90,85 10,85" />
      </svg>
      <svg className="shape square" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" />
      </svg>
    </div>
  );
};

export default SquidGameSvg;
