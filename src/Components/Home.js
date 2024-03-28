import React from 'react'
import earth from './earth.png'
import logo from './logo.png'

function Home() {
  return (
    <div className='section'>
      <section>
        <h1 className='title'>SSRP</h1>
        <h3 className='title'>Somaiya Space Research Project</h3>
      </section>
        <img className='image' src={earth} alt='earth' />
        <img className='logo' src={logo} alt='logo of team ssrp' />
        <p className='Slogan'>From Dreams to Reality</p>
      <section id = 'about'>
        <h2>About Us</h2>
        <p>SSRP is a student-led initiative at K.J. Somaiya College of Engineering, Mumbai. We aim to foster a culture of space research and innovation among students. Our goal is to provide a platform for students to work on real-world space projects and gain hands-on experience in the field of space technology.</p>
      </section>
    </div>
  )
}

export default Home;