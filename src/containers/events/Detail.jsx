import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from '../event_images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Salar de Atacama",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "Valle de la luna",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "Miscanti Lake",
        src: "miscani_lake.jpeg"
    },
    {
        title: "Miniques Lagoons",
        src: "miniques_lagoon.jpg"
    },
]

export default function body() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={'./assets/images/events_images/Image_10.jpg'}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Collaboration among these three entities is vital and a game changer for the development of India, in line with Vikasit Bharat@2047. In addition to conferences, panel discussions, and presentations, there were stalls set up on the SVU Campus, in the Gargi Plaza highlighting various ventures and projects supporting the objectives of the conclave.</p>
                </div>
                <div className={styles.column}>
                    <p>One of these was that of or mega-project, Somaiya Space Research Project (SSRP) of KJSCE. We displayed our progress in this stall, where we also received guidance from the Director of Satish Dhawan Space Centre, Shri. Arumugam Rajarajan. The exposure and interactions, the team SSRP got through were invaluable. The event was concluded on 3 April 2024.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
