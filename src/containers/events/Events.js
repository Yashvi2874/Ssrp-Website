import React from 'react';
import './Events.css'
import './page.module.scss'
import styles from './page.module.scss'
import gsap from 'gsap';
import { useRef } from 'react';
import i1 from '../../assests/images/project_images/img1.png'
import i2 from '../../assests/images/project_images/img2.jpg'
import i3 from '../../assests/images/project_images/img3.png'
import i4 from '../../assests/images/project_images/img4.png'
import i5 from '../../assests/images/project_images/img5.avif'
import i6 from '../../assests/images/project_images/img6.jpg'
import i8 from '../../assests/images/project_images/img01.png'
import i9 from '../../assests/images/project_images/img4.png' 
import i10 from '../../assests/images/events_images/Image_10.jpg'

export{    i1,    i2,    i3,    i4,    i5,    i6,    i8,    i9,    i10}


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

    <main className={styles.main}>

      <div ref={plane1} className={styles.plane}>

          <img 

            src={i10}

            alt='eventone'

            width={150}

          />

           <img 

            src={i2}

            alt='eventtwo'

            width={300}

          />

          <img 

            src={i2}

            alt='eventthree'

            width={225}

          />

      </div>

      <div ref={plane2} className={styles.plane}>
        <div className ='Name'>
          <h1>Astro-Chronicles</h1>
          </div>

          <img 

            src={i2}

           alt='eventfour'

            width={250}

          />

           <img 

            src={i6}

            alt='eventfive'

            width={200}

          />

          <img 

            src={i8}

            alt='eventsix'

            width={225}

          />

      </div>

      <div ref={plane3} className={styles.plane}>

          <img 

            src={i3}

            alt='eventseven'

            width={150}

          />

           <img 

            src={i5}

            alt='eventeight'

            width={200}

          />

      </div>


    </main>
    </main>

  )
  

}


export default Event;
