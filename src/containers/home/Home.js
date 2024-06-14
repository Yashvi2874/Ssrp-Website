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
    x:mousePosition.x-5,
    y: mousePosition.y+5
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
      <div className='title1'>
        <div className='title' onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}
            />
            SSRP
        </div>
      
      </div>
      <div className='typeit-text1' id='small-type'>
        <div className='typeit-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}
            />
          Somaiya Space Research Project</div>
      
      </div>
      <section onMouseEnter={textEnter} onMouseLeave={textLeave} className='Slogan1'>
        <div className='Slogan'>
      <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>
        Launching dreams into orbits
        </div>
      
      </section>
      </div>
      </div>
      {/* <div className='row justify-content-center ssrp-absolute' style={{ marginTop: '4.5rem' }}>
        <h3 className='d-inline-block'></h3>
      </div> */}
      
      <div className='mt-0'>
        
      <div className='row justify-content-end m-3 par'>
          <div className='col-lg-6 col-md-8 col-sm-10 row-sm-3'>
            <Suspense fallback={<div className='astro-block image img-fluid position-relative' style={{width : '100vw', height : '90vh'}}>Loading...</div>}>
            <Canvas
            className='image img-fluid position-relative astro-block' style={{width : '60%', height : '90vh'}}>
              <Astronaut />
            </Canvas>
            </Suspense>
            <Suspense fallback={<div className='image img-fluid position-absolute earth-block' style={{width : '100%', height : '120vh', top:'6vh', right:'-48vw'}}>Loading...</div>}>
              <Canvas
                  className='image img-fluid position-absolute earth-block' style={{width : '90%', height : '120vh', top:'6vh', right:'-48vw'}}>
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