import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Projects from './Projects_details'; // Ensure you export the projects array to use it here
import './Project_description.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ProjectDescription = () => {
  const { projectId } = useParams();
  const project = Projects.find(p => p.id === parseInt(projectId));

  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);

  if (!project) {
    return <div>Project not found</div>;
  }
  

  

  return (
    <div className='details-container'>
      <div className='details-content'>
        <img src={project.image} alt={project.title} data-aos="fade-up" />
        <div className='details' data-aos="fade-left">
          <div className='details-title'>{project.title}</div>
          <div className='details-section-heading'>Description</div>
          <div className='details-description text'>{project.description}</div>
          <div className='details-section-heading'>Objective</div>
          <div className='details-objectives text'>{project.objective}</div>
          <div className='details-section-heading'>Outcomes</div>
          <div className='details-outcomes text'>{project.outcomes}</div>
        </div>
        <a href={'/project'} className='details-link'>Go Back to Projects Page</a>        
      </div>
      
      
    </div>
  );
};

export default ProjectDescription;
