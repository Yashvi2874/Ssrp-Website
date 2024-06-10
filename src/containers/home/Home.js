import React, {Suspense} from 'react';
import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../../components/earth/Experience';
//const Astronaut = React.lazy(()=> import("./Astronaut"));
import Astronaut  from '../../components/astronaut/Astronaut';

function Home() {
  return (
    <div className='Home' id='home'>
    <div className='text-center text-white m-4'>
      
      <div className='main1'>
      <div className='column justify-content-center ssrp-absolute'>
      <div className='title'>SSRP</div>
      <div className='typeit-text' id='small-type'>Somaiya Space Research Project</div>
      <section className='Slogan'>Launching dreams into orbits</section>
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