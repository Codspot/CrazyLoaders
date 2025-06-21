// src/components/loaders/EmojiBounce.jsx
import React from 'react';
import './EmojiBounce.css';

const emojis = ['🔥', '💡', '🤖', '⚡️', '🚀', '🎨'];

const EmojiBounce = () => {
  return (
    <div className="emoji-loader">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="emoji"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default EmojiBounce;
