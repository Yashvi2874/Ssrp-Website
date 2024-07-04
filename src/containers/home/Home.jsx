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
                  <Canvas className='image img-fluid position-absolute earth-block' style={{width : '90%', height : '120vh', top:'6vh', right:'-50vw'}}>
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
          <div className="text1" data-aos="flip-down">
            <p className='item1' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our Cosmic Identity</p>
            <img className='about-img' src='/assets/images/about_images/logo.png' alt='ssrp logo'/>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>The Somaiya Space Research Project (SSRP), a new student-led initiative launched on January 16, 2024, at KJ Somaiya College of Engineering, focuses on developing and launching the KJSCE StudentSAT and advancing space exploration. Our initiatives combine research with participation in competitions like Spaceport America, the International Rover Challenge, and CANSAT, aiming to make a significant impact in space research.</p>
          </div>

          <div className='text2' data-aos="flip-down">
            <div className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}  >Galactic Vision</div>
            <img className='about-img' src='/assets/images/about_images/futuregoalsnew.png' alt='ssrp future goals images'/>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>We combine research with renowned competitions like IRC, CANSAT, and IROC-U to expand knowledge and validate student contributions. Competitions enhance problem-solving skills, while in-depth research propels space exploration and drives cutting-edge technologies. By tackling present challenges, we lay the groundwork for future innovations with lasting impact.</p>
          </div>

          <div className="text3" data-aos="flip-down">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Interstellar Allies</p>
            <div className='Carousel' data-aos="fade-left"><ControlledCarousel /></div>
            <p className='collab' >KJSIT: K.J. Somaiya Institute of Technology</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our partnership with KJSIT for the HAMSAT project is now solidified, marking a significant step forward in our collaboration. Together, we're set to innovate in satellite technology, pooling our expertise and resources for groundbreaking solutions. This alliance reflects our shared commitment to pushing technological boundaries.</p>
          </div>

          <div className="text4" data-aos="flip-down">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Power Our Journey</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>The Somaiya Space Research Project, established this year, pioneers advancements in space exploration through innovative research, focusing on developing the StudentSAT. Our passionate team aims to make significant contributions to the global space community. We invite sponsors to partner with us, supporting our mission to push the boundaries of space exploration. Sponsors will contribute to cutting-edge innovation and gain international recognition. Together, we embark on a remarkable journey to shape the future of space exploration.</p>
          </div>

          {/* <div className='text8' data-aos="fade-left">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Galactic Vision</p>
          </div>
          <div className='text9' data-aos="fade-right">
            <p className='item'>Interstellar Allies</p>
          </div>

          <div className='text10'>
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our Cosmic Identity</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
