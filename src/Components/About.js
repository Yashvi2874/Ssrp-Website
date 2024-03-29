import React from 'react';
import './About.css';


function About() {
  return (
    <div className='About'>
      <div className='container'>
        <div className="text1"><p className='item'>What is SSRP?</p>
        <p>The Somaiya Space Research Project (SSRP), a new student-led initiative at KJ Somaiya College of Engineering (established January 16, 2024), focuses on developing and launching a satellite, the KJSCE StudentSAT, while also conducting research projects to advance space exploration.. We combine research projects on space exploration with participation in competitions like Spaceport America International Rover Challenge and CANSAT. Through this, we strive to make a mark in space research.</p></div>
        <div className="text2">
          <p className='item'>Future Goals</p>
          <p>We leverage both research and renowned competitions like IRC, CANSAT, and IROC-U. Sharing research findings expands knowledge and validates student contributions. Competitions hone problem-solving, but in-depth research propels space exploration. These projects push the boundaries of our cosmic understanding and drive cutting-edge technologies beyond space applications. By engaging in research, we not only solve present challenges but lay the groundwork for future innovation with lasting impact.</p>
        </div>
        <div class="item earth">Image</div>
      </div>
  </div>
  )
}


export default About;
