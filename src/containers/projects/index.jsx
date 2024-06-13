import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import {  motion } from 'framer-motion';
import gsap from 'gsap';
import { Img } from 'react-image';
import '../oldprojects/Projects.css';
import { useNavigate } from 'react-router-dom';





const projects = [
  {
    id: 1,
    title: 'STUDENT SAT',
    author: 'SSRP',
    src: "img1.png",
    url: '/project/{id}',
    description: 'Our inaugural StudentSat, guided by ISRO and leading space startups, aims to elevate educational opportunities and expand the horizons of space research. Join us as we inspire future engineers and students to turn their dreams into reality ',
    objective: 'Data collection, communications and conducting experiments.',
    outcomes: 'Our showcase of technological expertise in propulsion and communications will garner nationwide recognition, fostering valuable connections and collaboration opportunities with startups and organizations. This event will positively impact student communities and encourage more colleges to venture into outer space.',
    color: "#FFD700"
  },
  {
    id:2,
    title: 'GROUND STATION',
    author: 'SSRP',
    src: "img2.jpg",
    url: '/project/{id}',
    description: 'The ground station is a device which will be built and used for the purpose of satellite communication, data acquisition, and space research endeavors and to connect with the ham community(Amateur Radio community).',
    objective: 'To receive and transmit data to satellites and for tracking our satellite. It will be used to remotely interact with the ham community (Amateur Radio community).',
    color: "#FF4500",
    outcomes: 'This enables stable communication with satellites, facilitates satellite tracking for students, and allows us to become an active member of the ham community(Amateur Radio community).'
  },
  {
    id:3,
    title: 'CANSAT',
    author: 'SSRP',
    src: "img3.png",
    url: '/project/{id}',
    description: 'The CanSat competition allows students to design, build, and launch miniature satellites resembling canisters. It provides practical experience in space science, progressing through design, construction, testing, and launch stages. CanSats are deployed via rockets to gather data during descent, with teams evaluated on design, functionality, data accuracy, and presentation.',
    objective: 'Components: Container, Probe Altitude Range: 670m - 725m  Deployment: Peak altitude Orientation: Uncontrolled Survivability: Launch and deployment forces Objective: Collect and transmit data from peak altitude.',
    color: "#FFD700",
    outcomes: 'Students learn to develop optimized systems under extreme space constraints, including mechanical space-grade systems that endure forces and vibrations.'
  },
  {
    id:4,
    title: 'SPACEPORT AMERICA',
    color: "#FF4500",
    author: 'SSRP',
    src: "img4.png",
    url: '/project/{id}',
    description: "Intercollegiate rocket engineering competition by Spaceport America. Students design propulsion systems and avionics. Also aids in rocket recovery mechanism development for SSRP's CanSat testing.",
    objective: 'IREC teams design, build, and launch sounding rockets with payloads of minimum 8.8 lbs to reach apogees of 10,000 ft or 30,000 ft AGL. Aiming to advance research in monopropellant/hybrid rocket propulsion engines.',
    outcomes: 'Enables development of propulsion engines, including hybrids, and gathers sounding data from rocket payloads. Rockets can serve as testing platforms for CanSat tournament.'
  },
  {
    id:5,
    title: 'INTERNATIONAL ROVER CHALLENGE',
    author: 'SSRP',
    color: "#FFD700",
    src: "img5.avif",
    url: '/project/{id}',
    description: 'To conceptualize, design, develop and operate an extraterrestrial rover and perform specific missions in simulated conditions.',
    objective: 'Design and build a rover with autonomous navigation, featuring detachable modules including an arm and a laboratory module for detecting signs of ancient life. Equipped with sensors like spectrometers and gas sensors, it can manipulate objects up to 1kg weight, enabling research in extraterrestrial terrain.',
    outcomes: 'This will forward our research on extraterrestrial autonomous rovers on harsh terrain.It will deepen our understanding of STEM fields.'
  },
  {
    id:6,
    title: 'BALLOON SAT',
    author: 'SSRP',
    color: "#FF4500",
    src: "img6.jpg",
    url: '/project/{id}',
    description: 'Experiment involves a meteorological balloon ascending to 50 km above sea level. Equipped with a UV sensor, it measures UV levels across regions to assess ozone levels.',
    objective: 'To gather ozone level data, attach a camera for topographic views, and establish ground station communication.',
    outcomes: "Explores satellite propulsion methods while collecting data in Earth's atmosphere."
  },
  // Add more projects as needed
];


const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }
  const navigate = useNavigate();
  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
  <div className="project-container">
    <h1 className='project-heading'>Projects</h1>
  <main onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} author={project.author} manageModal={manageModal} key={index}/>
        })
      }
    </div>
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Img 
                    src={`/project_images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  </main>
  <section className='projects'>
        {projects.map((project) => (
          <div
            key={project.id}
            trigger={
              <div
                className='project-content'
                onClick={() => handleProjectClick(project.id)}
                data-aos="fade-up"
              >
                <img src={project.image} alt={project.title}/>
                <div className='project-title'>{project.title}</div>
                <div className='project-author'>{project.author}</div>
              </div>
              
            }
            >
          </div>
        ))}
      </section>
  </div>
  )
}
