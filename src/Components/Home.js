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
    </div>
  )
}

export default Home;