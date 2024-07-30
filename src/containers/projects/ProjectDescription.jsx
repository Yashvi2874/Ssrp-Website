import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Projects from './ProjectsDetails';
import './ProjectDescription.css';
import { useCursorContext } from '../../components/cursor/CursorContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDescription = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(false);
  const { cursorVariant, variants, textEnter, textLeave } = useCursorContext();

  useEffect(() => {
    const foundProject = Projects.find(p => p.id === parseInt(projectId));

    if (foundProject) {
      setProject(foundProject);
    }

    AOS.init({ duration: "2000" });
  }, [projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='details-container'>
      <motion.div className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <div className="details-content">
        <img src={`/assets/images/project_images/${project.src}`} data-aos="zoom-in-right" alt={project.title} style={{ zIndex: "-1" }} />
        <div className="hero-details">
          <div className='home-slogan' style={{ display: "flex", position: "relative", justifyContent: "center", alignItems: "center" }} data-aos="zoom-in">
            <div onMouseEnter={textEnter} onMouseLeave={textLeave} >
              {project.title}
            </div>
          </div>
          <div className="box">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="details-description-box">
        <div className="description-text" data-aos="flip-right" style={{ zIndex: "-1" }}>
          <div className='details-section-heading' onMouseEnter={textEnter} onMouseLeave={textLeave}>Description</div>
          <div className='details-description text'>{project.description}</div>
        </div>
        <div className="description-text" data-aos="zoom-in" style={{ zIndex: "-1" }}>
          <div className='details-section-heading' onMouseEnter={textEnter} onMouseLeave={textLeave}>Objective</div>
          <div className='details-objectives text'>{project.objective}</div>
        </div>
        <div className="description-text" data-aos="flip-left" style={{ zIndex: "-1" }}>
          <div className='details-section-heading item1' onMouseEnter={textEnter} onMouseLeave={textLeave}>Outcomes</div>
          <div className='details-outcomes text'>{project.outcomes}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
