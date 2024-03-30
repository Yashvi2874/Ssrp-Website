import React from 'react';
import './About.css';
import logo from './logo.png';
import ControlledCarousel from './Collaborators_slider';


function About() {
  return (
    <div className='About'>
      <div className='container'>
        <div className="text1">
          <p className='item'>What is SSRP?</p>
          <p>The Somaiya Space Research Project (SSRP), a new student-led initiative at KJ Somaiya College of Engineering (established January 16, 2024), focuses on developing and launching a satellite, the KJSCE StudentSAT, while also conducting research projects to advance space exploration.. We combine research projects on space exploration with participation in competitions like Spaceport America International Rover Challenge and CANSAT. Through this, we strive to make a mark in space research.</p>
        </div>

        <div className="text2">
          <p className='item'>Future Goals</p>
          <p>We leverage both research and renowned competitions like IRC, CANSAT, and IROC-U. Sharing research findings expands knowledge and validates student contributions. Competitions hone problem-solving, but in-depth research propels space exploration. These projects push the boundaries of our cosmic understanding and drive cutting-edge technologies beyond space applications. By engaging in research, we not only solve present challenges but lay the groundwork for future innovation with lasting impact.</p>
        </div>

        <div className="text3">
          <p className='item'>Our Collaborators</p>
          <div className='Carousel'><ControlledCarousel /></div>
          <p className='collab'>KJSIT: KJ Somaiya Institute of Technology</p>
        </div>

        <div className="text4">
          <p className='item'>Why Sponsor Us?</p>
          <p>We leverage both research and renowned competitions like IRC, CANSAT, and IROC-U. Sharing research findings expands knowledge and validates student contributions. Competitions hone problem-solving, but in-depth research propels space exploration. These projects push the boundaries of our cosmic understanding and drive cutting-edge technologies beyond space applications. By engaging in research, we not only solve present challenges but lay the groundwork for future innovation with lasting impact.</p>
        </div>

        <div className="text5">
          <p className='item'>
            <img src={logo} alt='ssrp logo' />
          </p>
        </div>

        <div className="text6">
          <p className='item'>
          <img src={logo} alt='ssrp future goals images' />
          </p>
        </div>

        
      </div>
        
    </div>
  )
}


export default About;
