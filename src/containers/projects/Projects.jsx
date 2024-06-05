import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './Projects.css';
import Project_1_img from '../../assests/images/project_images/img1.jpg';
import Project_2_img from '../../assests/images/project_images/img2.jpg';
import Project_3_img from '../../assests/images/project_images/img3.jpg';
import Project_4_img from '../../assests/images/project_images/img4.jpg';
import Project_5_img from '../../assests/images/project_images/img5.jpg';
import Project_6_img from '../../assests/images/project_images/img6.jpg';
import Project_7_img from '../../assests/images/project_images/img7.jpeg';
import Project_8_img from '../../assests/images/project_images/img8.jpg';
import Project_9_img from '../../assests/images/project_images/img9.jpg';


const projects = [
  {
    title: 'Student SAT',
    author: 'SSRP',
    image: Project_1_img,
    url: 'https://www.google.com'
  },
  {
    title: 'GROUND STATION',
    author: 'SSRP',
    image: Project_2_img,
    url: 'https://www.google.com'
  },
  {
    title: 'CANSAT',
    author: 'SSRP',
    image: Project_3_img,
    url: 'https://www.google.com'
  },
  {
    title: 'SPACEPORT AMERICA',
    author: 'SSRP',
    image: Project_4_img,
    url: 'https://www.google.com'
  },
  {
    title: 'INTERNATIONAL ROVER CHALLENGE',
    author: 'SSRP',
    image: Project_5_img,
    url: 'https://www.google.com'
  },
  {
    title: 'BALLOON SAT',
    author: 'SSRP',
    image: Project_6_img,
    url: 'https://www.google.com'
  },
  {
    title: 'ALL SKY CAMERA',
    author: 'SSRP',
    image: Project_7_img,
    url: 'https://www.google.com'
  },
  {
    title: 'TELESCOPE',
    author: 'SSRP',
    image: Project_8_img,
    url: 'https://www.google.com'
  },
  {
    title: 'FESTIVAL',
    author: 'SSRP',
    image: Project_9_img,
    url: 'https://www.google.com'
  },
  // Add more projects as needed
];

const Project = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className='project-container'>
      <h1 className='project-heading'>Projects</h1>
      <section className='projects'>
        {projects.map((project, index) => (
          <Popup
            key={index}
            trigger={
              <div
                className='project-content'
                onMouseMove={handleMouseMove}
              >
                <div className='project-title'>{project.title}</div>
                <div className='project-author'>{project.author}</div>
              </div>
            }
            position="center center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={0}
            mouseLeaveDelay={0}
            arrow={false}
            contentStyle={{
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '24vw',
              maxWidth: '24vw',
              textAlign: 'center',
              position: 'fixed',
              top: `${cursorPosition.y}px`,
              left: `${cursorPosition.x}px`,
              transform: 'translate(-50%, -50%, -50%, -50%)',
              pointerEvents: 'none',
              transition: 'top 0.1s ease, left 0.1s ease'
            }}
          >
            <div className='popup-content'>
              <h2>{project.title}</h2>
              <img src={project.image} alt={project.title} className='project-image' />
              <a href={project.url} className='project-link'>
                <div>View Project</div>
              </a>
            </div>
          </Popup>
        ))}
      </section>
    </div>
  );
};

export default Project;
