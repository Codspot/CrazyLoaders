// src/components/loaders/Waveform.jsx
import React from 'react';
import './Waveform.css';

const Waveform = () => {
  return (
    <div className="waveform-loader">
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      <div className="bar bar4"></div>
      <div className="bar bar5"></div>
    </div>
  );
};

export default Waveform;
