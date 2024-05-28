import React, { useEffect } from 'react';
import './Loading.css';
import './Star.css';

function Loading() {
  const Star = () => {
    useEffect(() => {
      const handleMouseMove = (e) => {
        const arr = [1, 0.9, 0.8, 0.5, 0.2];

        arr.forEach((i) => {
          const x = (1 - i) * 75;
          const star = document.createElement('div');

          star.className = 'star';
          star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
          star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

          document.body.appendChild(star);

          window.setTimeout(() => {
            document.body.removeChild(star);
          }, Math.round(Math.random() * i * 600));
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    return null; // Component doesn't render anything, it just adds event listener on mount and removes it on unmount
  };

  return (
    <div className='Loading'>
      <Star /> {/* Render the Star component */}
      <div className="container1">
        <div className="text-container left">CE</div>
        <div className="text-container right">SP</div>
        <div className="ball-big">
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
          <div className="plane"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
