import React from 'react';
import earth from './earth.png';
import './Home.css';
import TypeIt from 'typeit-react';


function Home() {
  return (
    <div className='Home'>
    <div className='text-center text-white m-4'>
      <div className='row justify-content-center ssrp-absolute'>
      <TypeIt className='typeit-text' options={{ strings: "SSRP", speed: 50, waitUntilVisible: true, cursor: false }} />
<TypeIt className='typeit-text' id='small-type' options={{ strings: "Somaiya Space Research Project", speed: 30, waitUntilVisible: true, cursor: false }} />
      <p className='Slogan'>Launching dreams into orbits</p>
      </div>
      {/* <div className='row justify-content-center ssrp-absolute' style={{ marginTop: '4.5rem' }}>
        <h3 className='d-inline-block'></h3>
      </div> */}
      <div className='mt-3'>
      <div className='row justify-content-sm-center justify-content-lg-end m-3'>

          <div className='col-5 d-none d-sm-block'>
            <img
              className='image img-fluid position-relative glow'
              style={{ width: '80%' }}
              src={earth}
              alt='earth'
            />
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