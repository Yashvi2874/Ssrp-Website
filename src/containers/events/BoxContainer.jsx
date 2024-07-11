
import React from 'react';
import './BoxContainer.css'; // Import the CSS file

const BoxContainer = () => {
  return (
    <div id="container24">
      <div id="container2">
        
        
        <div className="event-box one">
        
        <div><img src="/assets/images/events_images/playButton.svg" className='button' /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event One</div></div>
        <div className="event-box two">
        <div><img className='button' src="/assets/playButton.svg" /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event Two</div></div>
        <div className="event-box three">
        <div><img className='button' src="/assets/playButton.svg" /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event Three</div></div>
        <div className="event-box four">
        <div><img className='button' src="/assets/playButton.svg" /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event Four</div></div>
      </div>
    </div>
  );
};

export default BoxContainer;
