/* EventDetails.js
const Events = [
  {
    id: 1,
    src: ['T1.jpg', 'T2.jpg', 'red.jpg'],
    title: 'TRIO - CONCLAVE :',
    description: 'The trio conclave was organized in KJSCE, with the main objective of it being a brainstorming get-together, intended to foster a more vibrant and result-oriented collaboration between the Academia, and R&D Institutions. Collaboration among these three entities is vital and a game changer for the development of India, in line with Vikasit Bharat@2047. In addition to conferences, panel discussions, and presentations, there were stalls set up on the SVU Campus, in the Gargi Plaza highlighting various ventures and projects supporting the objectives of the conclave. One of these was that of or mega-project, Somaiya Space Research Project (SSRP) of KJSCE. We displayed our progress in this stall, where we also received guidance from the Director of Satish Dhawan Space Centre, Shri. Arumugam Rajarajan. The exposure and interactions, the team SSRP got through were invaluable. The event was concluded on 3 April 2024.',
    objective: 'Objective of event one.',
    outcomes: 'Outcomes of event one.',
  },


  {
    id: 2,
    src: 'T2.jpg',
    title: 'Event Two',
    description: 'Description for event two.',
    objective: 'Objective of event two.',
    outcomes: 'Outcomes of event two.',
  },
  {
    id: 3,
    src: 'group.jpeg',
    title: 'Event Three',
    description: 'Description for event three.',
    objective: 'Objective of event three.',
    outcomes: 'Outcomes of event three.',
  },
  // Add more events as needed
];

export default Events;
*/

import React, { useLayoutEffect, useRef } from 'react';
import styles from './intro/style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParams } from 'react-router-dom';
import Image from 'next/image';
import SmoothScroll from '../../components/SmoothScroll';

export default function EventDetails() {
    const { id } = useParams();
    const background = useRef(null);
    const introImage = useRef(null);
    const homeHeader = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        });

        timeline
            .from(background.current, { clipPath: `inset(15%)` })
            .to(introImage.current, { height: "200px" }, 0);
    }, []);

    return (
        <SmoothScroll>
            <div ref={homeHeader} className={styles.homeHeader}>
                <div className={styles.backgroundImage} ref={background}>
                    <Image
                        src={`/assets/images/events_images/${id}.jpg`}
                        fill={true}
                        alt="background image"
                        priority={true}
                    />
                </div>
                <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={`/assets/images/events_images/${id}.jpg`}
                            alt="intro image"
                            fill={true}
                            priority={true}
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7">TRIO-CONCLAVE</h1>
                </div>
            </div>
        </SmoothScroll>
    );
}
