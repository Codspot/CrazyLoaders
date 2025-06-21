import React from 'react';
import './LoaderCard.css';

const LoaderCard = ({ heading, code, children }) => {
  return (
    <div className="loader-card">
      <div className="top-section">
        <div className="heading">{heading}</div>
        <div className="code-section">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-body">
            <pre><code>{code}</code></pre>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        {children}
      </div>
    </div>
  );
};

export default LoaderCard;
