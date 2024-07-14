/*
import React from 'react';
import './BoxContainer.css';
import { motion } from 'framer-motion';
import { useCursorContext } from '../../components/cursor/CursorContext';
import Footer from '../footer/Footer';

const BoxContainer = () => {
  const { variants, cursorVariant, textEnter, textLeave } = useCursorContext();
  return (
    <>
    <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>
    <div id="container24">
      
      <div id="container2">
        
        
        <div className="event-box one">
        
        <div><img src="/assets/images/events_images/playButton.svg" className='button' /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event One</div></div>
        <div className="event-box two">
        <div><img className='button' src="/assets/playButton.svg" /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event Two</div></div>
        <div className="event-box three">
        <div><img className='button' src="/assets/playButton.svg" /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event Three</div></div>
        <div className="event-box four">
        <div className='Footer' style={{ display:"flex", flexDirection:"row", zIndex:"100", width: "100vw", justifyContent:"space-between",alignItems:"center", top: "77%", left:"-0%", background:"transparent"}}>
         
         <a href="https://ssrp-website-beta.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="social-media-img" onMouseEnter={textEnter} onMouseLeave={textLeave} src='/assets/images/socialmedia_images/facebook.svg' alt="Facebook" /></a>
         <a href="https://github.com/SOMAIYA-SPACE-RESEARCH-PROJECT" target="_blank" rel="noopener noreferrer"><img className="social-media-img" onMouseEnter={textEnter} onMouseLeave={textLeave} src='/assets/images/socialmedia_images/github.svg' alt="GitHub" /></a>
         <a href="https://www.instagram.com/team_ssrp/" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/instagram.svg' onMouseEnter={textEnter} onMouseLeave={textLeave} alt="Instagram" /></a>

         <a href="/home"><img className="ssrp-logo-img" src='/assets/images/socialmedia_images/logo.png' onMouseEnter={textEnter} onMouseLeave={textLeave} alt="SSRP logo" /></a>

         <a href="https://www.linkedin.com/company/somaiya-space-research-project-ssrp/" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/linkedin.svg'  onMouseEnter={textEnter} onMouseLeave={textLeave} alt="LinkedIn" /></a>
         <a href="https://twitter.com/team_ssrp" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/twitter.svg' onMouseEnter={textEnter} onMouseLeave={textLeave} alt="Twitter" /></a>
         <a href="https://youtube.com/@somaiyaspaceresearchproject?si=2Ye33Ito9PmoDvGZ" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/youtube.svg' onMouseEnter={textEnter} onMouseLeave={textLeave} alt="YouTube" /></a>
               
 </div>
        <div><img className='button' src="/assets/playButton.svg" /><img src="/assets/images/events_images/cloud.jpg" className='img1' alt='img1'></img>Event Four</div></div>
      </div>
    </div>
    
    </>
  );
};

export default BoxContainer;
*/

// src/components/BoxContainer/BoxContainer.js

import React from 'react';
import './BoxContainer.css';
import { Link } from 'react-router-dom';

const events = [
  { id: 1, name: 'Event One', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 2, name: 'Event Two', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 3, name: 'Event Three', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 4, name: 'Event Four', imgSrc: '/assets/images/events_images/cloud.jpg' }
];

const BoxContainer = () => {
  return (
    <div id="container24">
      <div id="container2">
        {events.map(event => (
          <div key={event.id} className={`event-box ${event.id}`}>
            <div>
              <Link to={`/event/${event.id}`}>
                <img
                  src="/assets/images/events_images/playButton.svg"
                  className='button'
                  alt='button'
                />
              </Link>
              <img src={event.imgSrc} className='img1' alt='img1' />
              {event.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxContainer;
