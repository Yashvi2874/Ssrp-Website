import React, { useEffect } from 'react';
import './Loading.css';

const Loading = () => {
    const Star = () => {
                useEffect(() => {
                  const handleMouseMove = (e) => {
                    const arr = [1, 0.9, 0.8, 0.5, 0.2];
            
                    arr.forEach((i) => {
                      const x = (1 - i) * 75;
                      const star = document.createElement('div');
            
                      star.className = 'star';
                      star.style.top = `${e.pageY + Math.round(Math.random() * x - x / 2)}px`;
                      star.style.left = `${e.pageX + Math.round(Math.random() * x - x / 2)}px`;
            
            
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
  const renderShootingStars = () => {
    const starContainers = [];
    for (let i = 0; i < 3; i++) {
      const stars = [];
      for (let j = 0; j < 10; j++) {
        stars.push(<div className="shootingStar" key={j} style={{
          left: `calc(${Math.random() * 50}%)`,
          top: `calc(${Math.random() * 98 + 1}%)`,
          animationDuration: `${Math.random() * 2000 + 750}ms`,
          opacity: `${Math.random() * 0.75 + 0.15}`,
          rotate: `${45}deg`
        }} />);
      }
      starContainers.push(
        <div className="shootingStarContainer" key={i} style={{ marginTop: "-15vh"}} >
          {stars}
        </div>
      );
    }
    return starContainers;
  };

  return (
    <div className='absolute' style={{ overflowY:'hidden'}}>
      {renderShootingStars()}
      <div className="stars"></div>
      <div className='Loading' style={{ position: "absolute", top:"0", left:"0", marginTop:"-15vh"}}>
      <Star /> {/* Render the Star component */}
      <div className="container1">
        <div className="text-container left">CE</div>
        <div className="text-container right">SP</div>
        <div className="ball-big">
          <div className="plane" />
          <div className="plane" />
          <div className="plane" />
          <div className="plane" />
          <div className="plane" />
          <div className="plane" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Loading;


