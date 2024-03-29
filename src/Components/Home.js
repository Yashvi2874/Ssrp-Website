import React, { useEffect } from 'react';
import earth from './earth.png';
import logo from './logo.png';
import './Home.css';
import TypeIt from 'typeit-react';

function Home() {
  return (
    <div className='text-center text-white m-4'>
      <div className='row justify-content-center ssrp-absolute'>
        <TypeIt className='typeit-text' options={{ strings: "SSRP", speed: 50, waitUntilVisible: true }} />
        <TypeIt className='typeit-text' options={{ strings: "Somaiya Space Research Project", speed: 50, waitUntilVisible: true }} />
      </div>
      <div className='row justify-content-center ssrp-absolute' style={{ marginTop: '4.5rem' }}>
        <h3 className='d-inline-block'></h3>
      </div>
      <div className='mt-3'>
        <div className='row justify-content-end m-3'>
          <div className='col-4' style={{ marginTop: '20%' }}>
            <img
              className='logo img-fluid position-relative'
              style={{ width: '100%', marginLeft: '50%', zIndex: '1' }}
              src={logo}
              alt='logo of team ssrp'
            />
          </div>
          <div className='col-5'>
            <img
              className='image img-fluid position-relative glow'
              style={{ width: '100%' }}
              src={earth}
              alt='earth'
            />
          </div>
        </div>
      </div>
      <div className='m-4'>
        <p className='Slogan'>From Dreams to Reality</p>
      </div>
    </div>
  );
}

export default Home;