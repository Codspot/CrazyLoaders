// src/components/loaders/OrbitDots.jsx
import React from 'react';
import './OrbitDots.css';

const OrbitDots = () => {
  return (
    <div className="orbit-loader">
      <div className="center-dot"></div>
      <div className="orbit orbit1">
        <div className="planet"></div>
      </div>
      <div className="orbit orbit2">
        <div className="planet small"></div>
      </div>
    </div>
  );
};

export default OrbitDots;
