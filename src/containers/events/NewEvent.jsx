//import gsap from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";
//  import { useRef } from "react";
import "./NewEvent.css";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import './Particle';

//gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  // const component = useRef();
  // const slider = useRef();

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = gsap.utils.toArray(".panel");
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 1),
  //         end: () => "+=" + slider.current.offsetWidth,
  //         markers: false
  //       }
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // });

  return (
    <div className="Eventcontainer">
      <div className="main">
        <div className="article">
        <div className="panel red">
          
          <div className='name'>
            <div className='first-name'>Astro</div>
            <div className='last-name'>Chronicles</div>
          </div>
          <div className="down-arrow-box">
              <span />
              <span />
              <span />
          </div>
          <div className="dark-circles" id="circle-one"></div>
          <div className="dark-circles" id="circle-two"></div>
          <div className="dark-circles" id="circle-three"></div>
          <div className="dark-circles" id="circle-four"></div>
          
          <div className="bottom-text">
            <div className="arrow">
              <Link to="#"></Link>
            </div>
          </div>
          <div className="ball-container"> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
            <div className="ball"></div> 
          </div>
        </div>
        <div className="panel orange">
          <img src="/assets/images/events_images/moon.jpg" className='img1' alt='img1' />
          <div className="Eventtitle">
            <div>
              <span>T</span>
              <span>r</span>
              <span>i</span>
              <span>o</span>
              <span>-</span>
              <span>c</span>
              <span>o</span>
              <span>n</span>
              <span>c</span>
              <span>l</span>
              <span>a</span>
              <span>v</span>
              <span>e</span>
            </div>
          </div>
        </div>
        <div className="panel purple">
          <img src="/assets/images/events_images/moon.jpg" className='img1' alt='img1' />
          <div className="Eventtitle">
            <div>
              <span>A</span>
              <span>s</span>
              <span>t</span>
              <span>r</span>
              <span>o</span>
              <span>g</span>
              <span>a</span>
              <span>z</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
      
      
      
    </div>
  );
}

