import  { useEffect } from 'react';
import './Home.css';
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
      
      
      <div className='new-home-container' style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }}>
        <video autoPlay loop muted style={{
            width: '100%',
        }}>
            <source src="/assets/earth.mp4" type="video/mp4" />
        </video>
        <div className="home-content" style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            width: '100%',
        
        }}> 

        <div className="container">
            <div className="upper">SSRP</div>
            <div className="lower">SSRP</div>
            <div className="inside">Somaiya Space Research Project</div>
        </div>
                       
            <div  className = "Slogan" style={{
                textAlign: 'center',           
            }}>Launching dreams into orbits</div>
            </div>
        </div>
    

      <div className='About' style={{
        marginTop: '10vh',
      }}>
        <div className='container-about'>
          <div className="text1" data-aos="fade-in">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our Cosmic Identity</p>
            <img className='about-img' src='/assets/images/about_images/logo.png' alt='ssrp logo'/>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>The Somaiya Space Research Project (SSRP), a new student-led initiative launched on January 16, 2024, at KJ Somaiya College of Engineering, focuses on developing and launching the KJSCE StudentSAT and advancing space exploration. Our initiatives combine research with participation in competitions like Spaceport America, the International Rover Challenge, and CANSAT, aiming to make a significant impact in space research.</p>
          </div>

          <div className='text2' data-aos="fade-up">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}  >Galactic Vision</p>
            <img className='about-img' src='/assets/images/about_images/futuregoalsnew.png' alt='ssrp future goals images'/>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>We combine research with renowned competitions like IRC, CANSAT, and IROC-U to expand knowledge and validate student contributions. Competitions enhance problem-solving skills, while in-depth research propels space exploration and drives cutting-edge technologies. By tackling present challenges, we lay the groundwork for future innovations with lasting impact.</p>
          </div>

          <div className="text3" data-aos="fade-up">
            <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Interstellar Allies</p>
            <div className='about-img' style={{
              width: 'fit-content',
            }} data-aos="fade-left"><ControlledCarousel /></div>
            <p className='collab' >KJSIT: K.J. Somaiya Institute of Technology</p>
            <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>Our partnership with KJSIT for the HAMSAT project is now solidified, marking a significant step forward in our collaboration. Together, we&apos;re set to innovate in satellite technology, pooling our expertise and resources for groundbreaking solutions. This alliance reflects our shared commitment to pushing technological boundaries.</p>
          </div>
          </div>
          <div className="container-about-power">
            <div className="text4" data-aos="fade-up">
              <p className='item' onMouseEnter={textEnter} onMouseLeave={textLeave}>Power Our Journey</p>
              <p className='about-text' onMouseEnter={textEnter} onMouseLeave={textLeave}>The Somaiya Space Research Project, established this year, pioneers advancements in space exploration through innovative research, focusing on developing the StudentSAT. Our passionate team aims to make significant contributions to the global space community. We invite sponsors to partner with us, supporting our mission to push the boundaries of space exploration. Sponsors will contribute to cutting-edge innovation and gain international recognition. Together, we embark on a remarkable journey to shape the future of space exploration.</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
