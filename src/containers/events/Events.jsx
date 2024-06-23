
import './Events.css'
import './page.module.scss'
import { motion } from 'framer-motion';
import { useCursorContext } from '../../components/cursor/CursorContext';


import React from "react";
function Event(){
  
  const { cursorVariant, variants, textEnter, textLeave} = useCursorContext();
  


  return(
    
    <>
         <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>

    <div  className="eventheading">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Astrochronicles</h1>
    </div>

    <div className='eventscontainer-mobile'>
      <div className='eventheading'>
        <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>Trioconclave</h2>
      </div>
      

    
    <div className="Events-container">
      <div className="event_images">
        <img src='/assets/images/events_images/T1.jpg' id='i1' alt="eventone" ></img>
        </div>
        <div className="event_images">
        <img src="/assets/images/events_images/T2.jpg" id='i2'alt="eventtwo" ></img></div>
        <div className="event_images">
        <img src="/assets/images/events_images/group.jpeg" id='i3'alt="eventthree" ></img></div>
        <div className="event_images">
        <img src="/assets/images/events_images/red.jpg"id='i4' alt="eventone" ></img></div>
        <div className="event_images">
        <img src="/assets/images/events_images/moon.jpg"id='i5' alt="eventtwo" ></img>
        </div>
        <div className="event_images">
        <img src="/assets/images/events_images/Image_10.jpg" id='i6'alt="eventthree" ></img>
        </div>
        <div className="event_images">
        <img src="/assets/images/events_images/eve.jpg" id='i7'alt="eventone" ></img>
        </div>
        <div className="event_images">
        <img src="/assets/images/events_images/telescope.jpg" id='i8' alt="eventtwo" ></img></div>
        
      </div>
      </div>
      </>
    
  )
}

export default Event