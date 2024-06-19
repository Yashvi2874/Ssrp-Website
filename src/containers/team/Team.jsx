import React, { useEffect } from 'react';
import './Team.css';
import Navbar from '../navbar/Navbar'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamSections from './TeamData';
import { useCursorContext } from '../../components/cursor/CursorContext';

function Team() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { textEnter, textLeave } = useCursorContext();

  const renderMembers = (members, executives) => {
    return (
      <div className='team-content'>
        {executives && executives.length > 0 && (
          <div className='Team-head'>
            {executives.map((executive) => (
              <div className="flip-box" data-aos={executive.animation} key={executive.name}>
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img className='head-photo' src={executive.img} alt={executive.name} />
                    <div className="hover-overlay">
                      <div className="hover-icons">
                        <i className="fas fa-info-circle">LinkedIn</i>
                        <i className="fas fa-user-circle">Instagram</i>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className='name'>{executive.name}</h2>
                <h5 className='designation'>{executive.designation}</h5>
              </div>
            ))}
          </div>
        )}
        {members && members.length > 0 && (
          <div className="Team-members">
            {members.map((member) => (
              <div className="flip-box" data-aos={member.animation} key={member.name}>
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img className='head-photo' src={member.img} alt={member.name} />
                    <div className="hover-overlay">
                      <div className="hover-icons">
                        <i className="fas fa-info-circle">LinkedIn</i>
                        <i className="fas fa-user-circle">Instagram</i>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className='name'>{member.name}</h2>
                <h5 className='designation'>{member.designation}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='Team_Page'>
      <div className='Team'>
        <section className='Team_section'>
          <div className='team-container'>
            <img src='/assets/images/Community/Team.jpg' className='team-image' alt='XYZ' />
            <div className='team-overlay'>
              <div className='navbar'><Navbar /></div>
              
              <h1 className='team-heading' data-aos="zoom-in"> <div className="flex" onMouseEnter={textEnter} onMouseLeave={textLeave}>Our Team</div></h1>
              <div className='team-description' data-aos="zoom-in">
                With the strength of 30+ students we focus on developing and launching a satellite, the KJSCE StudentSAT, while also combining research projects on space exploration with participation in competitions like Spaceport America, International Rover Challenge and CANSAT.
              </div>
              <div className='team-description' data-aos="zoom-in">Meet the Team</div>
              <div className='arrow-down' data-aos="fade-down"> ↓ </div>
            </div>
          </div>
          {teamSections.map((section, index) => (
            <div key={index} className="team-member-container">
              <div className='Team-department' data-aos="zoom-in" onMouseEnter={textEnter} onMouseLeave={textLeave}>{section.title}</div>
              <div className='Team-Members'>
                {renderMembers(section.members, section.executive)}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Team;
