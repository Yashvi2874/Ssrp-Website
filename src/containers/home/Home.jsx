import React, {Suspense} from 'react';
import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Earth } from '../../components/earth/Earth';
import Astronaut  from '../../components/astronaut/Astronaut';
import { useCursorContext } from '../../components/cursor/CursorContext';


function Home() {

  const { textEnter, textLeave } = useCursorContext();

  return (
    <div className='Home' id='home'>
      
      
    <div className='text-center text-white m-4'>
      <div className='main1'>
      <div className='column justify-content-center ssrp-absolute'>
      <div className='title1'>
      
        <div className='title' onMouseEnter={textEnter} onMouseLeave={textLeave}>
            SSRP
        </div>
      
      </div>
      <div className='typeit-text1' id='small-type'>
        <div className='typeit-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Somaiya Space Research Project</div>
      
      </div>
      <section className='Slogan1'>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='Slogan'>
      
        Launching dreams into orbits
        </div>
      
      </section>
      </div>
      </div>
      
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
                    <Earth />
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