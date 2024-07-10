import {useEffect} from "react";
import styles from './style.module.css'

export default function Home() {



    useEffect( () => {
  
      (
  
        async () => {
  
            const LocomotiveScroll = (await import('locomotive-scroll')).default
  
            const locomotiveScroll = new LocomotiveScroll();
  
        }
  
      )()
  
    }, [])
  
  
  
    return (
  
        <main className={styles.main}>
  
          <Intro />
  
          <Description />
  
          <Projects />
  
        </main>
  
    )
  
  }