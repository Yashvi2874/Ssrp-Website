import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import gsap from 'gsap';
import Events from './EventDetails';
import styles from './intro.style.module.css';
import { useCursorContext } from '../../components/cursor/CursorContext';

const phrases = ["The trio conclave was organized in KJSCE", "with the main objective of it being a", "brainstorming get-together, intended to foster", "a more vibrant and result-oriented collaboration", "between the Academia, and R&D Institutions."]

function body() {

  return (
    <div className={styles.description} >
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}

export default body();