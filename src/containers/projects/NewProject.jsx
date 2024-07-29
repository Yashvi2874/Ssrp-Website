import React from 'react';
import Projects from './ProjectsDetails';
import './NewProject.css';
import { useCursorContext } from '../../components/cursor/CursorContext';
import { motion } from 'framer-motion';

function NewProject() {
    const { variants, cursorVariant, textEnter, textLeave } = useCursorContext();
  return (
    <>
    <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>
      <div className="project-heading"><div onMouseEnter={textEnter} onMouseLeave={textLeave}>Orbital Endeavors</div></div>
      <div className="project-container">
        {Projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={`/assets/images/project_images/img10.jpg`} alt={project.title} className="project-image" />
            <div className="project-title">{project.title}</div>
            <div className="project-author">{project.author}</div>
            <button className="project-button">Learn More</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewProject;
