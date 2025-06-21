// src/components/loaders/SquidZoom.jsx
import React from 'react';
import './SquidZoom.css';

const symbols = ['◯', '△', '▢']; // Unicode box instead of square border

const SquidZoom = () => {
  return (
    <div className="squid-zoom-loader">
      {symbols.map((symbol, index) => (
        <div
          key={index}
          className="symbol"
          style={{ animationDelay: `${index * 0.4}s` }}
        >
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default SquidZoom;
