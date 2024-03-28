import React from 'react'
import earth from './earth.png'
import logo from './logo.png'
import './Home.css'
function Home() {
  return (
    <div className='text-center text-white m-4'>
      <div className='row justify-content-center ssrp-absolute'>
        <h1 className='d-inline-block'>SSRP</h1>
      </div>
      <div className='row justify-content-center ssrp-absolute' style={{marginTop:'4.5rem'}}>
        <h3 className='d-inline-block'>Somaiya Space Research Project</h3>
      </div>
      <div className='row justify-content-end m-3'> 
        <div className='col-6 mt-3'>
          <img className='image img-fluid' src={earth} alt='earth'/>
          <img className='logo img-fluid positioin-absolute' style={{marginTop:'-50%', marginLeft:'-50%'}} src={logo} alt='logo of team ssrp' />
        </div>
      </div>
      <div className='m-4'>
      <p className='Slogan'>From Dreams to Reality</p>
        </div>
       
    </div>
  )
}

export default Home;