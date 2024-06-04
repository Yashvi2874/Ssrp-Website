import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Project 1 description',
    details: 'More details about Project 1...',
  },
  {
    title: 'Project 2',
    description: 'Project 2 description',
    details: 'More details about Project 2...',
  },
  {
    title: 'Project 3',
    description: 'Project 3 description',
    details: 'More details about Project 3...',
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
                <div className='project-description'>{project.description}</div>
              </div>
            }
            position="center center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={100}
            mouseLeaveDelay={100}
            arrow={false}
            contentStyle={{
              width: '200px',
              textAlign: 'center',
              position: 'absolute',
              transform: `translate(${cursorPosition.x - 100}px, ${cursorPosition.y - 50}px) translate(-50%, -50%)`
            }}
          >
            <div className='popup-content'>
              <h2>{project.title}</h2>
              <p>{project.details}</p>
            </div>
          </Popup>
        ))}
      </section>
    </div>
  );
};

export default Project;
