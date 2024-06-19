import React from 'react';
import './Events.css'
import './page.module.scss'
import styles from './page.module.scss'
import gsap from 'gsap';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCursorContext } from '../../components/cursor/CursorContext';



function Event() {

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



    return (

      <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>
        <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>

    <main className={styles.main}>
    

      <div ref={plane1} className={styles.plane}>

          <img 

            src='/assets/images/project_images/img1.png'

            alt='eventone'

            width={150}

          />

           <img 

            src='/assets/images/project_images/img2.png'

            alt='eventtwo'

            width={300}

          />

          <img 

            src='/assets/images/project_images/img3.png'

            alt='eventthree'

            width={225}

          />

      </div>

      <div ref={plane2} className={styles.plane}>
        <div className ='Name'>
          <h1>Astro-Chronicles</h1>
          </div>

          <img 

            src='/assets/images/project_images/img4.png'

           alt='eventfour'

            width={250}

          />

           <img 

            src='/assets/images/project_images/img5.png'

            alt='eventfive'

            width={200}

          />

          <img 

            src='/assets/images/project_images/img6.png'

            alt='eventsix'

            width={225}

          />

      </div>

      <div ref={plane3} className={styles.plane}>

          <img 

            src='/assets/images/project_images/img7.png'

            alt='eventseven'

            width={150}

          />

           <img 

            src= '/assets/images/project_images/img8.png'

            alt='eventeight'

            width={200}

          />

      </div>


    </main>
    </main>

  )
  

}


export default Event;
