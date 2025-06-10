import { useDrag } from '@use-gesture/react';
import { useState, useRef } from 'react';

export default function App() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const bind = useDrag(({ xy: [x] }) => {
    const width = containerRef.current?.clientWidth || 0;
    const newPosition = (x / width) * 100;
    setPosition(Math.min(Math.max(newPosition, 1), 99));
  });

  return (
    <div ref={containerRef} className="relative w-full h-screen">
      <div className="absolute inset-0 z-10">
        <h1>This is a left site</h1>
      </div>
      <div
        className="absolute inset-0 z-20 bg-white"
        style={{
          clipPath: `polygon(${position}% 0%, 100% 0%, 100% 100%, ${position}% 100%)`,
        }}
      >
        <h1>This is a right site</h1>
      </div>
      <div className="absolute inset-0" style={{ left: `${position}%` }}>
        <div className="absolute top-0 bottom-0 w-0.5 bg-black z-30 transform -translate-x-1/2"></div>
        <button
          className="cursor-pointer absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-black rounded-full z-40 hover:bg-gray-100 touch-none"
          {...bind()}
        >
          &lt;&gt;
        </button>
      </div>
    </div>
  );
}
