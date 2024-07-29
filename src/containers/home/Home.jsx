import { useEffect } from 'react';
import './Home.css';
import { useCursorContext } from '../../components/cursor/CursorContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ControlledCarousel from './Collaborators_slider';
import './About.css';

function Home() {
  const { textEnter, textLeave } = useCursorContext();

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);


  return (
    <>
        <div className="home__left">
          <video autoPlay muted loop className='back-video'>
            <source src="/assets/earth5.mp4" type="video/mp4" />
          </video>
          
          <div className="home-content">
          <div className="home-container-title" style={{
            position:'relative',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
          }}>
            <div className="text-title" id='homeone'>SSRP</div>
            <div className="text-title" id='hometwo'>SSRP</div>
            <div className="text-title" id='three'>SSRP</div>
          </div>

            <div className='home-subtitle' onMouseEnter={textEnter} onMouseLeave={textLeave}>Somaiya Space Research Project</div>
            <div className='home-slogan' data-aos="zoom-in" onMouseEnter={textEnter} onMouseLeave={textLeave}>Launching Dreams into Orbits</div>
          </div>
        </div>

      <div className='About'>
        <div className='container-about'>
          <div className="text1" data-aos="flip-right">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our Cosmic Identity</p>
            <img className='about-img' data-aos="zoom-in" src='/assets/images/about_images/logo.png' alt='ssrp logo' width='250' height='250'/>
              <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>The Somaiya Space Research Project (SSRP), a new student-led initiative launched on January 16, 2024, at KJ Somaiya College of Engineering, focuses on developing and launching the KJSCE StudentSAT and advancing space exploration. Our initiatives combine research with participation in competitions like Spaceport America, International Rover Challenge, CANSAT, aiming to make a significant impact.</p>


          </div>

          <div className='text2' data-aos="zoom-in">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Galactic Vision</p>
            <img className='about-img' data-aos="zoom-in" src='/assets/images/about_images/futuregoalsnew.png' alt='ssrp future goals images' width='280' height='260' />
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>We combine research with renowned competitions like IRC, CANSAT, and IROC-U to expand knowledge and validate student contributions. Competitions enhance problem-solving skills, while in-depth research propels space exploration and drives cutting-edge technologies. By tackling present challenges, we lay the groundwork for future innovations with lasting impact.</p>
          </div>

          <div className="text3" data-aos="flip-left">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Interstellar Allies</p>
            <div className='about-img' style={{ width: 'fit-content' }} data-aos="zoom-in" ><ControlledCarousel /></div>
            <p className='collab' onMouseEnter={textEnter} onMouseLeave={textLeave}>KJSIT: K.J. Somaiya Institute of Technology</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our partnership with KJSIT for the HAMSAT project is now solidified, marking a significant step forward in our collaboration. Together, we're set to innovate in satellite technology, pooling our expertise and resources for groundbreaking solutions. This alliance reflects our shared commitment to pushing technological boundaries.</p>
          </div>
        </div>
        <div className="container-about-power">
          <div className="text4" data-aos="flip-down">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Power Our Journey</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>The Somaiya Space Research Project, established this year, pioneers advancements in space exploration through innovative research, focusing on developing the StudentSAT. Our passionate team aims to make significant contributions to the global space community. We invite sponsors to partner with us, supporting our mission to push the boundaries of space exploration. Sponsors will contribute to cutting-edge innovation and gain international recognition. Together, we embark on a remarkable journey to shape the future of space exploration.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

