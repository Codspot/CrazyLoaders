// src/components/loaders/DnaHelix.jsx
import React from 'react';
import './DnaHelix.css';

const DnaHelix = () => {
  return (
    <div className="dna-loader">
      <div className="strand strand-left"></div>
      <div className="strand strand-right"></div>
    </div>
  );
};

export default DnaHelix;
