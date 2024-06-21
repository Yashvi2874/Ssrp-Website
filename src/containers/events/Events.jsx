// import React from 'react';
import './Events.css'
 import './page.module.scss'
 import styles from './page.module.scss'
 import gsap from 'gsap';
 import { useRef } from 'react';
 import { motion } from 'framer-motion';
 import { useCursorContext } from '../../components/cursor/CursorContext';



// function Event() {

//     const plane1 = useRef(null);

//     const plane2 = useRef(null);

//     const plane3 = useRef(null);

//     let requestAnimationFrameId = null;

//     let xForce = 0;
  
//     let yForce = 0;
  
//    const easing = 0.08;
  
//    const speed = 0.01;
  
  
  
//     const manageMouseMove = (e) => {
  
//       const { movementX, movementY } = e
  
//       xForce += movementX * speed;
  
//       yForce += movementY * speed;
  
  
  
//       if(requestAnimationFrameId == null){
  
//         requestAnimationFrameId = requestAnimationFrame(animate);
  
//       }
  
//     }
  
  
  
//     const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

//     const { cursorVariant, variants} = useCursorContext();
  
  
  
//     const animate = () => {
  
//       xForce = lerp(xForce, 0, easing);
  
//       yForce = lerp(yForce, 0, easing);
  
//       gsap.set(plane1.current, {x: `+=${xForce*0.2}`, y: `+=${yForce*0.2}`})
  
//       gsap.set(plane2.current, {x: `+=${xForce * 0.3}`, y: `+=${yForce * 0.3}`})
  
//       gsap.set(plane3.current, {x: `+=${xForce * 0.1}`, y: `+=${yForce * 0.1}`})
  
  
  
//       if(Math.abs(xForce) < 0.01) xForce = 0;
  
//       if(Math.abs(yForce) < 0.01) yForce = 0;
  
      
  
//       if(xForce !== 0 || yForce !== 0){
  
//         requestAnimationFrame(animate);
  
//       }
  
//       else{
  
//         cancelAnimationFrame(requestAnimationFrameId)
  
//         requestAnimationFrameId = null;
  
//       }
  
//     }



//     return (

//       <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
//         <motion.div className="cursor"
//               variants={variants}
//               animate={cursorVariant}
//               transition={{ type: "tween", ease: "backOut", duration:0}}/>

//     <main className={styles.main}>
    

//       <div ref={plane1} className={styles.plane}>

//           <img 

//             src='/assets/images/events_images/telescope.jpg'

//             alt='eventone'

//             width={150}

//           />

//            <img 

//             src='/assets/images/events_images/moon.jpg'

//             alt='eventtwo'

//             width={300}

//           />

//           <img 

//             src='/assets/images/events_images/eve.jpg'

//             alt='eventthree'

//             width={225}

//           />

//       </div>

//       <div ref={plane2} className={styles.plane}>
//         <div className ='Name'>
//           <h1>Astro-Chronicles</h1>
//           </div>

//           <img 

//             src='/assets/images/events_images/start.jpg'

//            alt='eventfour'

//             width={250}

//           />

//            <img 

//             src='/assets/images/events_images/red.jpg'

//             alt='eventfive'

//             width={200}

//           />

//           <img 

//             src='/assets/images/events_images/cloud.jpg'

//             alt='eventsix'

//             width={225}

//           />

//       </div>

//       <div ref={plane3} className={styles.plane}>

//           <img 

//             src='/assets/images/events_images/Image_10.jpg'

//             alt='eventseven'

//             width={150}

//           />

//            <img 

//             src= '/assets/images/events_images/group.jpeg'

//             alt='eventeight'

//             width={200}

//           />

//       </div>

//     </main>
//     </main>

//   )
  
// }

// export default Event;

import React from "react";
function Event(){

  const plane1 = useRef(null);

    const plane2 = useRef(null);

     const plane3 = useRef(null);

    let requestAnimationFrameId = null;

    let xForce = 0;
  
    let yForce = 0;
  
    const easing = 0.08;
  
    const speed = 0.01;
  
     const manageMouseMove = (e) => {
  
       const { movementX, movementY } = e
  
       xForce += movementX * speed;
  
       yForce += movementY * speed;
  
       if(requestAnimationFrameId == null){
  
         requestAnimationFrameId = requestAnimationFrame(animate);
  
       }
  
     }
     const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

     const { cursorVariant, variants} = useCursorContext();
  
  
  
     const animate = () => {
  
       xForce = lerp(xForce, 0, easing);
  
       yForce = lerp(yForce, 0, easing);
  
       gsap.set(plane1.current, {x: `+=${xForce*0.2}`, y: `+=${yForce*0.2}`})
  
       gsap.set(plane2.current, {x: `+=${xForce * 0.3}`, y: `+=${yForce * 0.3}`})
  
       gsap.set(plane3.current, {x: `+=${xForce * 0.1}`, y: `+=${yForce * 0.1}`})
  
  
  
       if(Math.abs(xForce) < 0.01) xForce = 0;
  
       if(Math.abs(yForce) < 0.01) yForce = 0;
  
      
  
       if(xForce !== 0 || yForce !== 0){
  
         requestAnimationFrame(animate);
  
       }
  
       else{
  
         cancelAnimationFrame(requestAnimationFrameId)
  
         requestAnimationFrameId = null;
  
       }
       
  
     }


  return(
    
    <>

    <div className="eventheading">
      <h1>Astrochronicles</h1>
    </div>

    <div className='eventscontainer-mobile'>
      <div className='eventheading'>
        <h2>Trioconclave</h2>
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