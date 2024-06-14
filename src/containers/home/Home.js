import React, {Suspense, useEffect, useState} from 'react';
import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../../components/earth/Experience';
//const Astronaut = React.lazy(()=> import("./Astronaut"));
import Astronaut  from '../../components/astronaut/Astronaut';
import { motion } from 'framer-motion';

function Home() {

//cursor part
const[mousePosition , setMousePosition]=useState({
  x:0,
  y:0
})
const[cursorVariant,setCursorVariant]=useState("default");

useEffect(() =>{
  const mouseMove =e => {
     setMousePosition({
      x:e.clientX,
      y:e.clientY
     })
  }

  window.addEventListener("mousemove",mouseMove);

  return () =>{ 
    window.removeEventListener("mousemove",mouseMove);
  }
}, []);

const variants={
  default:{
    x:mousePosition.x-20,
    y: mousePosition.y-20
  },
  text: {
    height :100,
    width :100,
    x:mousePosition.x-50,
    y: mousePosition.y-50,
    backgroundColor: "white",
    mixBlendMode:"difference"
  }
}

const textEnter =() => setCursorVariant("text");
const textLeave =() => setCursorVariant("default")
  //end

  return (
    <div className='Home' id='home'>
    <div className='text-center text-white m-4'>
      
      <div className='main1'>
      <div className='column justify-content-center ssrp-absolute'>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>SSRP
      <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}
      />
      </div>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='typeit-text' id='small-type'>Somaiya Space Research Project
      <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}
      />
      </div>
      <section onMouseEnter={textEnter} onMouseLeave={textLeave} className='Slogan'>Launching dreams into orbits
      <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}
      />
      </section>
      </div>
      </div>
      {/* <div className='row justify-content-center ssrp-absolute' style={{ marginTop: '4.5rem' }}>
        <h3 className='d-inline-block'></h3>
      </div> */}
      
      <div className='mt-0'>
        
      <div className='row justify-content-end m-3 par'>
          <div className='col-lg-10 col-md-8 col-sm-10 row-sm-3'>
            <Suspense fallback={<div className='astro-block image img-fluid position-relative' style={{width : '100vw', height : '90vh'}}>Loading...</div>}>
            <Canvas className='image img-fluid position-relative astro-block' style={{width : '100vw', height : '90vh'}}>
              <Astronaut />
            </Canvas>
            </Suspense>
            <Suspense fallback={<div className='image img-fluid position-absolute earth-block' style={{width : '100%', height : '120vh', top:'6vh', right:'-43vw'}}>Loading...</div>}>
              <Canvas
                  className='image img-fluid position-absolute earth-block' style={{width : '100%', height : '120vh', top:'6vh', right:'-43vw'}}>
                    <Experience />
              </Canvas>
            </Suspense>
          </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;