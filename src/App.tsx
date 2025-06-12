import { useDrag } from '@use-gesture/react';
import { useState, useRef } from 'react';
import RightSite from './components/right-site/RightSite';
import SiteSlider from './components/site-slider/SiteSlider';

export default function App() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const bind = useDrag(({ xy: [x] }) => {
    const width = containerRef.current?.clientWidth || 0;
    const newPosition = (x / width) * 100;
    setPosition(Math.min(Math.max(newPosition, 2), 98));
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        className="left-site"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        <h1>This is a left site</h1>
      </div>
      <RightSite sliderPosition={position} />
      <SiteSlider bind={bind} sliderPosition={position} />
    </div>
  );
}
