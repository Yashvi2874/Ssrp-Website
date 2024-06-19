import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';   
import Projects from './ProjectsDetails';
import './ProjectDescription.css';
import { useCursorContext } from '../../components/cursor/CursorContext';


const ProjectDescription = () => {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(false);
  const [contentVisible, setContentVisible] = useState(false); // State to control content visibility
  const { cursorVariant, variants, textEnter, textLeave } = useCursorContext();

  useEffect(() => {
    const foundProject = Projects.find(p => p.id === parseInt(projectId));

    if (foundProject) {
      setProject(foundProject);
    }

    // Introduce a delay of 2 seconds before setting the loading state to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [projectId]);

  if (loading) {
    return (
      <motion.div className='project-loading' style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10vw' }}
        initial={{ opacity: 0, y: 100}} // Initial animation state
        animate={{ opacity: 1, y: 0}} // Animation when component appears
        exit={{ opacity: 1, y: -800 }} // Animation when component exits
      >
        <div className='project-title'>{project.title}</div>
      </motion.div>
      
    );
  }

  if (!project) {
    return <div style={{height:'80vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center', color:'white', fontSize:'4rem'}}> 404 Page Not Found</div>;
  }

  return (
    <div className='details-container'>
      <motion.div className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration:0}}
      />
      <motion.div className='details-bg'
        initial={{ opacity: 0, y: 0 }} // Initial animation state
        animate={{ opacity: 1, y: -1000, transition:{duration:'0.6'} }} // Animation when component appears
        exit={{ opacity: 0, y: 0 }}
        onAnimationComplete={() => setContentVisible(true)} // Set content visible after bg animation completes
      ></motion.div>
      {contentVisible && (
        <motion.div className='details-content'
          initial={{ opacity: 0, y: 100 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component appears
          exit={{ opacity: 0, y: 100 }} // Animation when component exits
        >
          <img src={`/assets/images/project_images/${project.src}`} alt={project.title} />
          <div className='details'>
            <div className='details-title' onMouseEnter={textEnter} onMouseLeave={textLeave}>{project.title}</div>
            <div className='details-section-heading' onMouseEnter={textEnter} onMouseLeave={textLeave}>Description</div>
            <div className='details-description text'>{project.description}</div>
            <div className='details-section-heading' onMouseEnter={textEnter} onMouseLeave={textLeave}>Objective</div>
            <div className='details-objectives text' >{project.objective}</div>
            <div className='details-section-heading' onMouseEnter={textEnter} onMouseLeave={textLeave}>Outcomes</div>
            <div className='details-outcomes text'>{project.outcomes}</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectDescription;


