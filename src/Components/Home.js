import React from 'react';
import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import Astronaut from './Astronaut';


function Home() {
  return (
    <div className='Home' id='home'>
    <div className='text-center text-white m-4'>
      

      <div className='main1'>
      <div className='column justify-content-center ssrp-absolute'>
      <div className='typeit-text'>SSRP</div>
      <div className='typeit-text' id='small-type'>Somaiya Space Research Project</div>
      <p className='Slogan'>Launching dreams into orbits</p>
      </div>
      </div>
      {/* <div className='row justify-content-center ssrp-absolute' style={{ marginTop: '4.5rem' }}>
        <h3 className='d-inline-block'></h3>
      </div> */}
      
      <div className='mt-0'>
        
      <div className='row justify-content-end m-3 par'>
          <div className='col-lg-12 col-7'>
          <Canvas className='image img-fluid position-relative astro-block' style={{width : '100vw', height : '90vh'}}>
            <Astronaut />
          </Canvas>
              {/* <iframe src='https://my.spline.design/photorealearth-c1a8103f9a96c7c5a3f84a4e50469c16/' style={{ width: '48vw', height: '80vh' }}/> */}
            </div>
            {/* <div className='col-2'>
            
          
          </div> */}
        </div>
          <Canvas
              className='image img-fluid position-absolute earth-block' style={{width : '100%', height : '120vh', top:'-2vh', right:'-43vw'}}>
                <Experience />
          </Canvas>
      </div>
      {/* <div className='m-4'>
        <p className='Slogan'>Launching dreams into orbits</p>
      </div> */}
    </div>
    </div>
  );
}

export default Home;