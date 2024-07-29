import  { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import { motion } from 'framer-motion';
import { useCursorContext } from '../../components/cursor/CursorContext';
import Scene from '../../containers/events/NewEvent';


function EventPage() {
  const { variants, cursorVariant} = useCursorContext();
    const[loading, setLoading]=useState(true);
    useEffect(() =>{
    
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      
    }, []);
    if(loading){
      return (
        <div style={{marginTop:"15vh"}}>
        <Loading />
        </div>
        );
      }

      


  return (
    
    <>
            <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}
              style={{ zIndex:"1"}}/>
        <Navbar />
        <Scene />
    </>
  )
}

export default EventPage