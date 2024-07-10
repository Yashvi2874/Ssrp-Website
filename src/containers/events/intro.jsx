
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import styles from './intro/style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';   
import Events from './EventDetails';
import { useCursorContext } from '../../components/cursor/CursorContext';
import SmoothScroll from './SmoothScroll';

export default function Index() {

    const background = useRef(null);
    const introImage = useRef(null);
    const homeHeader = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <SmoothScroll>
        <div ref={homeHeader} className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'../assets/images/events_images/T1.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={'../assets/images/events_images/T2.jpg'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7">TRIO-CONCLAVE</h1>
             </div>
        </div>
        </SmoothScroll>
    )
}
