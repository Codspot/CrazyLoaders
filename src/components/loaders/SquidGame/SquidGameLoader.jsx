// src/components/loaders/SquidGameLoader.jsx
import React from 'react';
import './SquidGameLoader.css';

const symbols = ['◯', '△', '□'];

const SquidGameLoader = () => {
  return (
    <div className="squid-loader">
      {symbols.map((symbol, index) => (
        <div
          key={index}
          className="squid-symbol"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default SquidGameLoader;
