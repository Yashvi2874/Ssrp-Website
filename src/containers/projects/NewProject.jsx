import React from 'react';
import Projects from './ProjectsDetails';
import './NewProject.css';
import { useCursorContext } from '../../components/cursor/CursorContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function NewProject() {
    const { variants, cursorVariant, textEnter, textLeave } = useCursorContext();
    const navigate = useNavigate();
    const handleprojectClick = (id) => {
        navigate(`/project/${id}`);
    }
  return (
    <>
    <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>
      <div className="project-heading">
        <div onMouseEnter={textEnter} onMouseLeave={textLeave}>Orbital Endeavors</div>      </div>
      <div className="project-container">
        {Projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={`/assets/images/project_images/img10.jpg`} alt={project.title} className="project-image" />
            <div className="project-title" onMouseEnter={textEnter} onMouseLeave={textLeave}>{project.title}</div>
            <div className="project-author" onMouseEnter={textEnter} onMouseLeave={textLeave}>{project.author}</div>
            <button className="project-button" onClick={()=> handleprojectClick(project.id)} onMouseEnter={textEnter} onMouseLeave={textLeave}>Learn More</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewProject;
