import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import './Projects.css';
import Projects from './Projects_details.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);

  return (
    <div className='project-container'>
      <h1 className='project-heading'>Projects</h1>
      <section className='projects'>
        {Projects.map((project) => (
          <Popup
            key={project.id}
            trigger={
              <div
                className='project-content'
                onMouseMove={handleMouseMove}
                onClick={() => handleProjectClick(project.id)}
                data-aos="fade-up"
              >
                <img src={project.image} alt={project.title}/>
                <div className='project-title'>{project.title}</div>
                <div className='project-author'>{project.author}</div>
                <div className='project-help-user'>Click to Know More!!!</div>
              </div>
            }
            position="center center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={100}
            mouseLeaveDelay={100}
            arrow={false}
            contentStyle={{
              display: 'flex',
              flexDirection: 'column',
              maxHeight: 'auto',
              maxWidth: '28vw',
              textAlign: 'center',
              position: 'fixed',
              top: `${cursorPosition.y}px`,
              left: `${cursorPosition.x}px`,
              transform: 'translate(-50%, -50%, -50%)',
              transition: 'top 0.2s ease-out, left 0.2s ease-out',
              pointerEvents: 'none',
              animation: 'fadein 1s',
              
            }}
          >
            <div className='popup-content' data-aos="fade-in">
              <div className='project-title' style={{color:'black', margin:'0'}}>{project.title}</div>
              <img src={project.image} alt={project.title} className='project-image' />
              <div className='project-link'
              onClick={()=> handleProjectClick(project.id)}>View Project</div>
            </div>
          </Popup>
        ))}
      </section>
    </div>
  );
};

export default Project;
