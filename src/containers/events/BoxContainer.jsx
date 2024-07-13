/*
import React from 'react';
import './BoxContainer.css'; // Import the CSS file
import './DetailsPage';

const BoxContainer = () => {
  return (
    <div id="container24">
      <div id="container2">
        
        
        <div className="box one">
        
        <div><img className='button' src='/playButton.svg'></img><img src="/logo192.png" className='img1' alt='img1'></img>Event One</div></div>
        <div className="box two">
        <div><img className='button' src='/playButton.svg'></img><img src="/logo192.png" className='img1' alt='img1'></img>Event Two</div></div>
        <div className="box three">
        <div><img className='button' src='/playButton.svg'></img><img src="/logo192.png" className='img1' alt='img1'></img>Event Three</div></div>
        <div className="box four">
        <div><img className='button' src='/playButton.svg'></img><img src="/logo192.png" className='img1' alt='img1'></img>Event Four</div></div>
      </div>
    </div>
  );
};

export default BoxContainer;
*/

import React, { useRef, useEffect } from 'react';
import './BoxContainer.css'; // Import the CSS file

const BoxContainer = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0; // Scroll back to the start
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="container24" ref={scrollContainerRef} className="scroll-container">
      <div id="container2">
        <div className="box one">
          <div><img className='button' src='/playButton.svg' alt='button'/><img src="/logo192.png" className='img1' alt='img1'/>Event One</div>
        </div>
        <div className="box two">
          <div><img className='button' src='/playButton.svg' alt='button'/><img src="/logo192.png" className='img1' alt='img1'/>Event Two</div>
        </div>
        <div className="box three">
          <div><img className='button' src='/playButton.svg' alt='button'/><img src="/logo192.png" className='img1' alt='img1'/>Event Three</div>
        </div>
        <div className="box four">
          <div><img className='button' src='/playButton.svg' alt='button'/><img src="/logo192.png" className='img1' alt='img1'/>Event Four</div>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
