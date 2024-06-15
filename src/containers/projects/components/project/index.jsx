import React from 'react'
import '../../../projects/Projects.css';
import { useNavigate } from 'react-router-dom';

export default function Index({index, title, author, image, manageModal}) {

    const navigate = useNavigate();
    const handleProjectClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
        onClick={() => handleProjectClick(index+1)}
        onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className="project">
            <div className='project-content'>
            <img alt={title}  src={`/project_images/${image}`} />
            <div className='project-title'>{title}</div>
            <div className='project-author'>{author}</div>
            </div>
        </div>
        
    )
}
