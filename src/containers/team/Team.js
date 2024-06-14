import React, { useEffect } from 'react';
import './Team.css';
import Navbar from '../navbar/Navbar.js'; 
import group_img from '../../assests/images/Community/Team.jpg';
import Founder_image from '../../assests/images/Community/Head/Rishikesh_Bhintade.jpg';
import Associate_Head_image from '../../assests/images/Community/Head/Riaan_jain.jpg';
import Operations_Head_image from '../../assests/images/Community/Head/Tanisha_Mukherjee.jpg';
import Associate_Operations_image from '../../assests/images/Community/Head/Aniket_Iyer.jpg';
import Computer_Systems_Member_1 from '../../assests/images/Community/Members/Comps/Yashvi_Gupta.jpg';
import Computer_Systems_Member_2 from '../../assests/images/Community/Members/Comps/Om_Thanage.jpeg';
import Computer_Systems_Member_3 from '../../assests/images/Community/Members/Comps/Piyush_Chaudhary.jpg';
import Computer_Systems_Member_5 from '../../assests/images/Community/Members/Comps/Swarni_Chouhan.jpg';
import Computer_Systems_Member_6 from '../../assests/images/Community/Members/Comps/Siya_Nair.png';
import Computer_Systems_Member_7 from '../../assests/images/Community/Members/Comps/Mit_Mhatre.jpg';
import Computer_Systems_Member_9 from '../../assests/images/Community/Members/Comps/Tanil_Sheth.jpg';
import Computer_Systems_Member_10 from '../../assests/images/Community/Members/Comps/Aditi_Agrawal.jpg';
import Electronics_Member_1 from '../../assests/images/Community/Members/Electronics/Lakshya_Aswani.jpg';
import Electronics_Member_2 from '../../assests/images/Community/Members/Electronics/Aaditya_Chavan.png';
import Electronics_Member_3 from '../../assests/images/Community/Members/Electronics/Arnav_Vinod.png';
// import Electronics_Member_4 from './Community/Members/Electronics/Siddarth_Patel.jpg';
// import Electronics_Member_5 from './Community/Members/Electronics/Abhinav_Suresh.jpg';
import Electronics_Member_7 from '../../assests/images/Community/Members/Electronics/Aarohi_Mishra.jpg';
import Electronics_Member_8 from '../../assests/images/Community/Members/Electronics/Arupta_Kamble.jpeg';
import Electronics_Member_9 from '../../assests/images/Community/Members/Electronics/Siya_Naulakha.jpg';
import Mechanical_Member_1 from '../../assests/images/Community/Members/Mechanical/Ishan_Kakad.jpg';
import Mechanical_Member_2 from '../../assests/images/Community/Members/Mechanical/Yash_Bagwe.jpg';
import Mechanical_Member_3 from '../../assests/images/Community/Members/Mechanical/Aditya_Patel.jpg';
import Mechanical_Member_4 from '../../assests/images/Community/Members/Mechanical/Aastha_Shah.jpeg';
import Mechanical_Member_5 from '../../assests/images/Community/Members/Mechanical/Debarpan_Dasgupta.png';
import Mechanical_Member_6 from '../../assests/images/Community/Members/Mechanical/Rabiya_Darvesh.jpg';
import Mechanical_Member_7 from '../../assests/images/Community/Members/Comps/Yash_Mahajan.jpg';
import Business_Member_1 from '../../assests/images/Community/Members/Business/Vidita_Hassani.jpg';
import Business_Member_2 from '../../assests/images/Community/Members/Business/Aayushi_Wani.jpg';
import Business_Member_3 from '../../assests/images/Community/Members/Business/Akshita_Shetty.jpg';
import Business_Member_4 from '../../assests/images/Community/Members/Business/Vruddhi_Mule.jpg';
// import Business_Member_5 from '../../assests/images/Community/Members/Business/Sameer_Morya.jpg';
import Business_Member_6 from '../../assests/images/Community/Members/Business/Charu_Malp.jpg';
import Business_Member_7 from '../../assests/images/Community/Members/Business/Likhita_Reddy.jpg';
// import Business_Member_9 from '../../assests/images/Community/Members/Business/Aditi_Gupta.jpg';
import Business_Member_10 from '../../assests/images/Community/Members/Business/Tarini_Bambolkar.jpeg';
// import Marketing_Member_1 from '../../assests/images/Community/Members/Business/Minit_Shah.jpg';
// import Marketing_Member_2 from '../../assests/images/Community/Members/Business/Shrusti_Vora.jpg';
// import Marketing_Member_3 from '../../assests/images/Community/Members/Business/Joyeeta_Basu.jpg';
import Marketing_Member_4 from '../../assests/images/Community/Members/Business/Varun_Shah.jpg';
import Marketing_Member_5 from '../../assests/images/Community/Members/Business/Anusha_Sarkar.jpg';
// import Marketing_Member_6 from '../../assests/images/Community/Members/Business/Rishi_Shanbhag.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {

  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);

  return (
    
    
    <div className='Team_Page'>
      
    <div className='Team'>
        <section className='Team_section'>
        
        <div className='team-container'> 
            <img src={group_img}  className='team-image' alt='XYZ'/>
            <div className='team-overlay'>
            <div className='navbar'><Navbar/></div>
            <h1 className='team-heading'  data-aos="zoom-in">Our Team</h1>
            <description className='team-description'  data-aos="zoom-in">With the strength of 30+ students we focus on developing and launching a satellite, the KJSCE StudentSAT, while also combining research projects on space exploration with participation in competitions like Spaceport America, International Rover Challenge and CANSAT.</description>
            <description className='team-description'  data-aos="zoom-in">Meet the Team</description>
            <div className='arrow-down'  data-aos="fade-down"> ↓ </div>
        </div>
        </div>
        <h1 className='Team-department' data-aos="zoom-in">Projects Leads</h1>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Associate_Head_image} alt="Riaan Jain" />
            </div>
          </div>
          <h2 className='name'>Riaan Jain</h2>
          <h5 className='designation'>Associate Director</h5>
        </div>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Founder_image} alt="Rishikesh Bhintade" />
            </div>
          </div>
          <h2 className='name'>Rishikesh Bhintade</h2>
          <h5 className='designation'>Founder & Project Director</h5>
        </div>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Operations_Head_image} alt="Tanisha Mukherjee" />
            </div>
          </div>
          <h2 className='name'>Tanisha Mukherjee</h2>
          <h5 className='designation'>Operations Director</h5>
        </div> 
        <div className="flip-box"  data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Associate_Operations_image} alt="Rishikesh Bhintade" />
            </div>
          </div>
          <h2 className='name'>Aniket Iyer</h2>
          <h5 className='designation'>Associate Operations Director</h5>
        </div>
        </div>

        <h1 className='Team-department' data-aos="zoom-in">Computer Systems</h1>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_1} alt="Yashasvi Gupta" />
            </div>
          </div>
          <h2 className='name'>Yashasvi Gupta</h2>
          <h5 className='designation'>Web-Dev Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_2} alt="Om Thanage" />
            </div>
          </div>
          <h2 className='name'>Om Thanage</h2>
          <h5 className='designation'>Web-Dev & ODHS</h5>
        </div>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_3} alt="Piyush Chaudhary" />
            </div>
          </div>
          <h2 className='name'>Piyush Chaudhary</h2>
          <h5 className='designation'>Web-Dev & ODHS</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_5} alt="Swarni Chouhan" />
            </div>
          </div>
          <h2 className='name'>Swarni Chouhan</h2>
          <h5 className='designation'>Web-Dev & ODHS</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_6} alt="Siya Nair" />
            </div>
          </div>
          <h2 className='name'>Siya Nair</h2>
          <h5 className='designation'>Web-Dev & ODHS</h5>
        </div>
        </div>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_7} alt="Mit Mhatre" />
            </div>
          </div>
          <h2 className='name'>Mit Mhatre</h2>
          <h5 className='designation'>ROS & IP Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_10} alt="Aditi Agrawal" />
            </div>
          </div>
          <h2 className='name'>Aditi Agrawal</h2>
          <h5 className='designation'>ROS & IP</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Computer_Systems_Member_9} alt="Tanil Sheth" />
            </div>
          </div>
          <h2 className='name'>Tanil Sheth</h2>
          <h5 className='designation'>ROS & IP</h5>
        </div>
        </div>

        <h1 className='Team-department' data-aos="zoom-in">Mechanical Systems</h1>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Mechanical_Member_1} alt="Ishan Kakad" />
            </div>
          </div>
          <h2 className='name'>Ishan Kakad</h2>
          <h5 className='designation'>Mechanical Executive</h5>
        </div>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Mechanical_Member_3} alt="Aditya Patel" />
            </div>
          </div>
          <h2 className='name'>Aditya Patel</h2>
          <h5 className='designation'>Mechanical Executive</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Mechanical_Member_2} alt="Yash Bagwe" />
            </div>
          </div>
          <h2 className='name'>Yash Bagwe</h2>
          <h5 className='designation'>Mechanical Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Mechanical_Member_7} alt="Yash Mahajan" />
            </div>
          </div>
          <h2 className='name'>Yash Mahajan</h2>
          <h5 className='designation'>Structures</h5>
        </div>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Mechanical_Member_4} alt="Aastha Shah" />
            </div>
          </div>
          <h2 className='name'>Aastha Shah</h2>
          <h5 className='designation'>Propulsions</h5>
        </div>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Mechanical_Member_5} alt="Debarpan Dasgupta" />
            </div>
          </div>
          <h2 className='name'>Debarpan Dasgupta</h2>
          <h5 className='designation'>Propulsions</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Mechanical_Member_6} alt="Rabiya Darvesh" />
            </div>
          </div>
          <h2 className='name'>Rabiya Darvesh</h2>
          <h5 className='designation'>Recovery</h5>
        </div>
        </div>

        <h1 className='Team-department' data-aos="zoom-in">Electronics Systems</h1>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Electronics_Member_1} alt="Lakshya Aswani" />
            </div>
          </div>
          <h2 className='name'>Lakshya Aswani</h2>
          <h5 className='designation'>Electronics Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Electronics_Member_2} alt="Aaditya Chavan" />
            </div>
          </div>
          <h2 className='name'>Aaditya Chavan</h2>
          <h5 className='designation'>Avionics</h5>
        </div>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Electronics_Member_3} alt="Arnav Vinod" />
            </div>
          </div>
          <h2 className='name'>Arnav Vinod</h2>
          <h5 className='designation'>Avionics</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Siddarth Patel" />
            </div>
          </div>
          <h2 className='name'>Siddarth Patel</h2>
          <h5 className='designation'>Avionics</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Abhinav Suresh" />
            </div>
          </div>
          <h2 className='name'>Abhinav Suresh</h2>
          <h5 className='designation'>Avionics</h5>
        </div>
        </div>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Electronics_Member_9} alt="Siya Naulakha" />
            </div>
          </div>
          <h2 className='name'>Siya Naulakha</h2>
          <h5 className='designation'>Embedded Programming Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Electronics_Member_7} alt="Aarohi Mishra" />
            </div>
          </div>
          <h2 className='name'>Aarohi Mishra</h2>
          <h5 className='designation'>Communication</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Electronics_Member_8} alt="Arupta Kamble" />
            </div>
          </div>
          <h2 className='name'>Arupta Kamble</h2>
          <h5 className='designation'>Communication</h5>
        </div>
        </div>

        <h1 className='Team-department' data-aos="zoom-in">Creative Team</h1>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Business_Member_2} alt="Aayushi Wani" />
            </div>
          </div>
          <h2 className='name'>Aayushi Wani</h2>
          <h5 className='designation'>Creative Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Business_Member_3} alt="Akshita Shetty" />
            </div>
          </div>
          <h2 className='name'>Akshita Shetty</h2>
          <h5 className='designation'>Creative</h5>
        </div>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Business_Member_4} alt="Vruddhi Mule" />
            </div>
          </div>
          <h2 className='name'>Vruddhi Mule</h2>
          <h5 className='designation'>Creative</h5>
        </div>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Business_Member_7} alt="Likhita Reddy" />
            </div>
          </div>
          <h2 className='name'>Likhita Reddy</h2>
          <h5 className='designation'>Creative</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Sameer Morya" />
            </div>
          </div>
          <h2 className='name'>Sameer Morya</h2>
          <h5 className='designation'>Creative</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Business_Member_6} alt="Charu Malp" />
            </div>
          </div>
          <h2 className='name'>Charu Malp</h2>
          <h5 className='designation'>Creative</h5>
        </div>
        </div>
         
        <h1 className='Team-department' data-aos="zoom-in">Business and Marketing</h1>
        <div className='Team-head'>
        <div className="flip-box" data-aos="slide-up">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Business_Member_1} alt="Vidita Hassani" />
            </div>
          </div>
          <h2 className='name'>Vidita Hassani</h2>
          <h5 className='designation'>Business Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Aditi Gupta" />
            </div>
          </div>
          <h2 className='name'>Aditi Gupta</h2>
          <h5 className='designation'>Logistics</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Business_Member_10} alt="Tarini Bambolkar" />
            </div>
          </div>
          <h2 className='name'>Tarini Bambolkar</h2>
          <h5 className='designation'>Logistics</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Minit Shah" />
            </div>
          </div>
          <h2 className='name'>Minit Shah</h2>
          <h5 className='designation'>Marketing Executive</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Shrushti Vora" />
            </div>
          </div>
          <h2 className='name'>Shrusti Vora</h2>
          <h5 className='designation'>Jt. Marketing Executive</h5>
        </div>
        </div>
        <div className='Team-Members'>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Joyeeta Basu" />
            </div>
          </div>
          <h2 className='name'>Joyeeta Basu</h2>
          <h5 className='designation'>Marketing and Publicity</h5>
        </div>
        <div className="flip-box" data-aos="slide-right">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Marketing_Member_4} alt="Varun Shah" />
            </div>
          </div>
          <h2 className='name'>Varun Shah</h2>
          <h5 className='designation'>Marketing and Publicity</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={Marketing_Member_5} alt="Anusha Sarkar" />
            </div>
          </div>
          <h2 className='name'>Anusha Sarkar</h2>
          <h5 className='designation'>Marketing and Publicity</h5>
        </div>
        <div className="flip-box" data-aos="slide-left">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img  className='head-photo' src={'https://dummyimage.com/300'} alt="Rishi Shanbhag" />
            </div>
          </div>
          <h2 className='name'>Rishi Shanbhag</h2>
          <h5 className='designation'>Marketing and Publicity</h5>
        </div>
        </div>
        
        </section>
    </div>
    </div>
  );
};
// Add more team members as needed
export default Team;
