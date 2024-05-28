import React, { useEffect } from 'react';
import './About.css';
import logo from '../../assests/images/about_images/logo.png';
import future_goals from '../../assests/images/about_images/futuregoalsnew.png';
import ControlledCarousel from './Collaborators_slider';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);

  return (
    <div className='About'>
      <div className='container-about'>
        <div className="text1" data-aos="fade-right">
          <p className='item'>What is SSRP?</p>
          <p className='about-text'>The Somaiya Space Research Project (SSRP), a new student-led initiative at KJ Somaiya College of Engineering (established January 16, 2024), focuses on developing and launching a satellite, the KJSCE StudentSAT, while also conducting research projects to advance space exploration.. We combine research projects on space exploration with participation in competitions like Spaceport America International Rover Challenge and CANSAT. Through this, we strive to make a mark in space research.</p>
        </div>

        <div className='text2' data-aos="fade-left">
          <p className='item'>Future Goals</p>
          <p className='about-text'>We leverage both research and renowned competitions like IRC, CANSAT, and IROC-U. Sharing research findings expands knowledge and validates student contributions. Competitions hone problem-solving, but in-depth research propels space exploration. These projects push the boundaries of our cosmic understanding and drive cutting-edge technologies beyond space applications. By engaging in research, we not only solve present challenges but lay the groundwork for future innovation with lasting impact.</p>
        </div>

        <div className="text3" data-aos="fade-right">
          <p className='item'>Our Collaborators</p>
          <p className='about-text'>Our partnership with KJSIT for the HAMSAT project is now solidified, marking a significant step forward in our collaboration. Together, we're set to innovate in satellite technology, pooling our expertise and resources for groundbreaking solutions. This alliance reflects our shared commitment to pushing technological boundaries.</p>
        </div>

        <div className="text4" >
          <p className='item' data-aos="fade-down-right">Why Sponsor Us?</p>
          <p className='about-text' data-aos="fade-down-left">The Somaiya Space Research Project, established this year, is dedicated to pioneering advancements in space exploration through innovative research initiatives, with a primary focus on developing the StudentSAT( satellites developed by students). The team, comprised of passionate and determined individuals, is poised to make significant contributions to the global space community. Potential sponsors are invited to join the project as partners, playing a vital role in supporting its journey to push the boundaries of space exploration. By aligning with the project, sponsors have the opportunity to contribute to cutting-edge innovation and represent their company on an international stage. Together, they embark on a remarkable journey to shape the future of space exploration.</p>
        </div>

        <div className="text5">
          <p className='item'>
            <img className='about-img' src={logo} alt='ssrp logo' data-aos="fade-left" />
          </p>
        </div>

        <div className="text6">
          <p className='item'>
          <img className='about-img' src={future_goals} alt='ssrp future goals images' data-aos="fade-right" />
          </p>
        </div>

        <div className="text7">
        
          <div className='Carousel' data-aos="fade-left"><ControlledCarousel /></div>
          <p className='collab' data-aos="fade-left">KJSIT: K.J. Somaiya Institute of Technology</p>
        </div>
        <div className='text8' data-aos="fade-left">
          <p className='item'>Future Goals</p>
        </div>
        <div className='text9' data-aos="fade-right">
          <p className='item'>Our Collaborators</p>
        </div>

        <div className='text10'>
          <p className='item'>What is SSRP?</p>
        </div>

        
      </div>
        
    </div>
  )
}


export default About;
