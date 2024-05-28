import React, { useEffect } from 'react'
import './Footer.css'
import facebook from '../../assests/images/socialmedia_images/github.svg'
import github from '../../assests/images/socialmedia_images/github.svg'
import instagram from '../../assests/images/socialmedia_images/instagram.svg'
import linkedin from '../../assests/images/socialmedia_images/linkedin.svg'
import twitter from '../../assests/images/socialmedia_images/twitter.svg'
import youtube from '../../assests/images/socialmedia_images/youtube.svg'
import ssrp from '../../assests/images/socialmedia_images/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);
  return (
    
    <div className='Footer'>
         
            <a href="#" target="_blank"><img className="social-media-img" src={facebook} alt="Facebook" /></a>
            <a href="https://github.com/SOMAIYA-SPACE-RESEARCH-PROJECT" target="_blank"><img className="social-media-img" src={github} alt="GitHub" /></a>
            <a href="https://www.instagram.com/team_ssrp/" target="_blank"><img className="social-media-img" src={instagram} alt="Instagram" /></a>
 
            <a href="#"><img className="ssrp-logo-img" src={ssrp} alt="SSRP logo" /></a>
 
            <a href="https://www.linkedin.com/company/somaiya-space-research-project-ssrp/" target="_blank"><img className="social-media-img" src={linkedin} alt="LinkedIn" /></a>
            <a href="https://twitter.com/team_ssrp" target="_blank"><img className="social-media-img" src={twitter} alt="Twitter" /></a>
            <a href="#" target="_blank"><img className="social-media-img" src={youtube} alt="YouTube" /></a>
                  
    </div>
  )
}

export default Footer;