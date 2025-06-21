// src/App.jsx
import React, { useState } from 'react';
import LoaderCard from './components/LoaderCard';

import LiquidPulse from './components/loaders/LiquidPulse/LiquidPulse';
import DnaHelix from './components/loaders/DnaHelix/DnaHelix';
import Waveform from './components/loaders/WaveForm/Waveform';
import PaintDrip from './components/loaders/PaintDrip/PaintDrip';
import OrbitDots from './components/loaders/OrbitDots/OrbitDots';
import EmojiBounce from './components/loaders/EmojiBounce/EmojiBounce';
import SquidGameSvg from './components/loaders/Squid/SquidSvg';

import './App.css';

function App() {
  const loaderMap = {
    'Liquid Pulse': {
      heading: 'LIQUID PULSE',
      themeColor: '#00d8ff',
      code: `
@keyframes liquidPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`,
      component: <LiquidPulse />
    },
    'DNA Helix': {
      heading: 'DNA HELIX SPINNER',
      themeColor: '#77ffcc',
      code: `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
      component: <DnaHelix />
    },
    'Waveform': {
      heading: 'WAVEFORM BOUNCE',
      themeColor: '#ffa94d',
      code: `
@keyframes waveBounce {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
}`,
      component: <Waveform />
    },
    'Paint Drip': {
      heading: 'PAINT DRIP ANIMATION',
      themeColor: '#ff6f91',
      code: `
@keyframes drip {
  0% { height: 0; }
  100% { height: 100px; }
}`,
      component: <PaintDrip />
    },
    'Orbit Dots': {
      heading: 'ORBIT DOT LOADER',
      themeColor: '#9f7bff',
      code: `
@keyframes orbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
      component: <OrbitDots />
    },
    'Emoji Bounce': {
      heading: 'EMOJI BOUNCE LOADER',
      themeColor: '#ffaa00',
      code: `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`,
      component: <EmojiBounce />
    },
    'Squid Game': {
      heading: 'SQUID GAME',
      themeColor: '#ff0077',
      code: `
@keyframes glowCycle {
  0%, 100% {
    stroke: white;
    filter: none;
  }

  40% {
    stroke: #ff0077;
    filter: drop-shadow(0 0 6px #ff0077)
            drop-shadow(0 0 14px #ff0077)
            drop-shadow(0 0 28px #ff0077);
  }
}`,
      component: <SquidGameSvg />
    }
  };

  const loaderOptions = Object.keys(loaderMap);
  const [selected, setSelected] = useState(loaderOptions[0]);
  const currentLoader = loaderMap[selected];

  return (
    <div className="App" style={{ '--titleColor': currentLoader.themeColor }}>
      <div className="dropdown-wrapper">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {loaderOptions.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <LoaderCard heading={currentLoader.heading} code={currentLoader.code}>
        {currentLoader.component}
      </LoaderCard>
    </div>
  );
}

export default App;
