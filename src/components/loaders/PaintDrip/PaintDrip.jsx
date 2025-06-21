// src/components/loaders/PaintDrip.jsx
import React from 'react';
import './PaintDrip.css';

const PaintDrip = () => {
  return (
    <div className="drip-loader">
      <div className="circle">
        <div className="drip" />
      </div>
    </div>
  );
};

export default PaintDrip;
