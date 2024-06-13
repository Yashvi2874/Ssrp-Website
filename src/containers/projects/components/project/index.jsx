import React from 'react'
import styles from './style.module.scss';
import '../../../oldprojects/Projects.css';
import { useNavigate } from 'react-router-dom';

export default function Index({index, title, author, manageModal}) {

    const navigate = useNavigate();
    const handleProjectClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} 
        onClick={() => handleProjectClick(index+1)}
        onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <div className='project-title'>{title}</div>
            <div className='project-author'>{author}</div>
        </div>
    )
}
