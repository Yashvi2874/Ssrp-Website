import React from 'react'
import earth from './earth.png'
import logo from './logo.png'

function Home() {
  return (
    <div className='text-center text-white m-3'>
      <div className='row justify-content-center'>
        <h1 className='d-inline-block'>SSRP</h1>
      </div>
      <div className='row justify-content-center'>
        <h3 className='d-inline-block'>Somaiya Space Research Project</h3>
      </div>
      <div className='row justify-content-end m-3'> 
        <div className='col-6'>
          <img className='image img-fluid' src={earth} alt='earth'/>
          <img className='logo img-fluid positioin-absolute' style={{transform: 'translate(-50% , -50%)'}} src={logo} alt='logo of team ssrp' />
        </div>
      </div>
      <div style={{ marginTop: '-20vh'}}>
      <p className='Slogan'>From Dreams to Reality</p>
      <section id = 'about'>
        <h2>About Us</h2>
        <p>SSRP is a student-led initiative at K.J. Somaiya College of Engineering, Mumbai. We aim to foster a culture of space research and innovation among students. Our goal is to provide a platform for students to work on real-world space projects and gain hands-on experience in the field of space technology.</p>
      </section>
        </div>
       
    </div>
  )
}

export default Home;