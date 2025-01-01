import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function MouseFollower() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const props = useSpring({ 
    transform: `translate(${coords.x}px, ${coords.y}px)`,
    config: { mass: 1, tension: 150, friction: 20 }
  });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX - 15, y: e.clientY - 15 });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <animated.div 
        style={{ 
          ...props, 
          width: '30px', 
          height: '30px', 
          borderRadius: '50%', 
          backgroundColor: 'red', 
          position: 'absolute' 
        }} 
      />
    </div>
  );
}

export default MouseFollower;
