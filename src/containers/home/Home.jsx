import React, {Suspense, useEffect} from 'react';
import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Earth } from '../../components/earth/Earth';
import Astronaut  from '../../components/astronaut/Astronaut';
import { useCursorContext } from '../../components/cursor/CursorContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ControlledCarousel from './Collaborators_slider';
import './About.css';

function Home() {
  const { textEnter, textLeave } = useCursorContext();

  useEffect(()=>{
    AOS.init({duration:"2000"});
  },[]);

  return (
    <>
      

      <div className='Home' id='home'>
        
        <div className='text-center text-white m-4'>
          
          <div className='main1'>
            <div className='column justify-content-center ssrp-absolute'>
              <div className='title1'>
                <div className='title' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  SSRP
                </div>
              </div>
              <div className='typeit-text1' id='small-type'>
                <div className='typeit-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  Somaiya Space Research Project
                </div>
              </div>
              <section className='Slogan1'>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='Slogan'>
                  Launching dreams into orbits
                </div>
              </section>
            </div>
          </div>

          <div className='mt-0'>
            <div className='row justify-content-end m-3 par'>
              <div className='col-lg-6 col-md-8 col-sm-10 row-sm-3'>
                <Suspense fallback={<div className='astro-block image img-fluid position-relative' style={{width : '100vw', height : '90vh'}}>Loading...</div>}>
                  <Canvas className='image img-fluid position-relative astro-block' style={{width : '70%', height : '90vh'}}>
                    <Astronaut />
                  </Canvas>
                </Suspense>
                <Suspense fallback={<div className='image img-fluid position-absolute earth-block' style={{width : '100%', height : '120vh', top:'6vh', right:'-54vw'}}>Loading...</div>}>
                  <Canvas className='image img-fluid position-absolute earth-block' style={{width : '90%', height : '120vh', top:'6vh', right:'-54vw'}}>
                    <Earth />
                  </Canvas>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='About'>
        <div className='container-about'>
          <div className="text1" data-aos="fade-right">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>What is SSRP?</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>The Somaiya Space Research Project (SSRP), a new student-led initiative at KJ Somaiya College of Engineering (established January 16, 2024), focuses on developing and launching a satellite, the KJSCE StudentSAT, while also conducting research projects to advance space exploration. We combine research projects on space exploration with participation in competitions like Spaceport America, International Rover Challenge and CANSAT. Through this, we strive to make a mark in space research.</p>
          </div>

          <div className='text2' data-aos="fade-left">
            <div className='item flex' onMouseEnter={textEnter} onMouseLeave={textLeave}  >Future Goals</div>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>We leverage both research and renowned competitions like IRC, CANSAT, and IROC-U. Sharing research findings expands knowledge and validates student contributions. Competitions hone problem-solving, but in-depth research propels space exploration. These projects push the boundaries of our cosmic understanding and drive cutting-edge technologies beyond space applications. By engaging in research, we not only solve present challenges but lay the groundwork for future innovation with lasting impact.</p>
          </div>

          <div className="text3" data-aos="fade-right">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our Collaborators</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our partnership with KJSIT for the HAMSAT project is now solidified, marking a significant step forward in our collaboration. Together, we're set to innovate in satellite technology, pooling our expertise and resources for groundbreaking solutions. This alliance reflects our shared commitment to pushing technological boundaries.</p>
          </div>

          <div className="text4">
            <p className='item' data-aos="fade-down-right" onMouseEnter={textEnter} onMouseLeave={textLeave}>Why Sponsor Us?</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-down-left">The Somaiya Space Research Project, established this year, is dedicated to pioneering advancements in space exploration through innovative research initiatives, with a primary focus on developing the StudentSAT( satellites developed by students). The team, comprised of passionate and determined individuals, is poised to make significant contributions to the global space community. Potential sponsors are invited to join the project as partners, playing a vital role in supporting its journey to push the boundaries of space exploration. By aligning with the project, sponsors have the opportunity to contribute to cutting-edge innovation and represent their company on an international stage. Together, they embark on a remarkable journey to shape the future of space exploration.</p>
          </div>

          <div className="text5">
            <p className='item'>
              <img className='about-img' src='/assets/images/about_images/logo.png' alt='ssrp logo' data-aos="fade-left" />
            </p>
          </div>

          <div className="text6">
            <p className='item'>
              <img className='about-img' src='/assets/images/about_images/futuregoalsnew.png' alt='ssrp future goals images' data-aos="fade-right" />
            </p>
          </div>

          <div className="text7">
            <div className='Carousel' data-aos="fade-left"><ControlledCarousel /></div>
            <p className='collab' data-aos="fade-left">KJSIT: K.J. Somaiya Institute of Technology</p>
          </div>
          <div className='text8' data-aos="fade-left">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Future Goals</p>
          </div>
          <div className='text9' data-aos="fade-right">
            <p className='item'>Our Collaborators</p>
          </div>

          <div className='text10'>
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>What is SSRP?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
