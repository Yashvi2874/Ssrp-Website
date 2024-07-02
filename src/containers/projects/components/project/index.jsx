import React from 'react'
import '../../../projects/Projects.css';

export default function Index({index, title, author, image, manageModal}) {

    const handleProjectClick = (id) => {
        window.location.href = `/project/${id}`;
    };

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
        onClick={() => handleProjectClick(index+1)}
        onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className="project">
            <div className='project-content' data-aos="slide-up">
            <img alt={title}  src={`/assets/images/project_images/${image}`} />
            <div className='project-title'>{title}</div>
            <div className='project-author'>{author}</div>
            </div>
        </div>
        
    )
}
