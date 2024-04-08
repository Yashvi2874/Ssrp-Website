import React from 'react';
import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import Astronaut from './Astronaut';


function Home() {
  return (
    <div className='Home' id='home'>
    <div className='text-center text-white m-4'>
      <Canvas className='image img-fluid position-absolute earth-block' style={{width : '100vw', height : '80vh'}}>
      <Astronaut />
      </Canvas>
      <div className='column justify-content-center ssrp-absolute'>
      <div className='typeit-text'>SSRP</div>
      <div className='typeit-text' id='small-type'>Somaiya Space Research Project</div>
      <p className='Slogan'>Launching dreams into orbits</p>
      </div>
      {/* <div className='row justify-content-center ssrp-absolute' style={{ marginTop: '4.5rem' }}>
        <h3 className='d-inline-block'></h3>
      </div> */}
      
      <div className='mt-3'>
      <div className='row justify-content-end m-3'>
          
          <div className='col-5 earth-block'>
            <Canvas
              className='image img-fluid position-relative' style={{width : '50vw', height : '82vh'}}>
                <Experience />
                
              </Canvas>
              {/* <iframe src='https://my.spline.design/photorealearth-c1a8103f9a96c7c5a3f84a4e50469c16/' style={{ width: '48vw', height: '80vh' }}/> */}


          </div>
        </div>
      </div>
      {/* <div className='m-4'>
        <p className='Slogan'>Launching dreams into orbits</p>
      </div> */}
    </div>
    </div>
  );
}

export default Home;