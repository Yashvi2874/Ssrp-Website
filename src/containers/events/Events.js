import React from 'react';
import img1 from '../../assests/images/project_images/img5.jpg';
import './Events.css'
import './page.module.scss'
import styles from './page.module.scss'
import gsap from 'gsap';
import { useRef } from 'react';
import i1 from '../../assests/images/project_images/img1.jpg'
import i2 from '../../assests/images/project_images/img2.jpg'
import i3 from '../../assests/images/project_images/img3.jpg'
import i4 from '../../assests/images/project_images/img4.jpg'
import i5 from '../../assests/images/project_images/img5.jpg'
import i6 from '../../assests/images/project_images/img6.jpg'
import i8 from '../../assests/images/project_images/img8.jpg'
import i9 from '../../assests/images/project_images/img9.jpg' 

export{
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i8,
    i9,

}


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
  
      gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
  
      gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
  
      gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})
  
  
  
      if(Math.abs(xForce) < 0.01) xForce = 0;
  
      if(Math.abs(yForce) < 0.01) yForce = 0;
  
      
  
      if(xForce != 0 || yForce != 0){
  
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

            src={i1}

            //alt='image'

            width={300}

          />

           <img 

            src={i2}

            //alt='image'

            width={300}

          />

          <img 

            src={i9}

            //alt='image'

            width={225}

          />

      </div>

      <div ref={plane2} className={styles.plane}>

          <img 

            src={i4}

           // alt='image'

            width={250}

          />

           <img 

            src={i6}

            //alt='image'

            width={200}

          />

          <img 

            src={i8}

            //alt='image'

            width={225}

          />

      </div>

      <div ref={plane3} className={styles.plane}>

          <img 

            src={i3}

            //alt='image'

            width={150}

          />

           <img 

            src={i5}

            //alt='image'

            width={200}

          />

      </div>

      ...

    </main>
    </main>

  )
  

}
 
/*{
    return(
        <div className='Event' id='event'>
    <div className='text-center text-white m-4'></div>
    <div className='typeit-text' id='small-type'>Our Events</div>

    <div className="event-container">
        <div className="event-title">
            <div>Astrogazing</div>
        </div>
        <div className="event-imgs">
            <img src={img1} alt="logo" className="img-fluid" />
        </div>
        <div className='event-title'> 19th APRIL, y2024 </div>
        <div className="event-title">
            <div>Upcoming Events</div>
        </div>
        <div className="event-imgs">
            <img src={img1} alt="logo" className="img-fluid" />
        </div>
        <div className="event-title"> Home </div>


    </div>  
      </div>  
      
    );
}*/

export default Event;
