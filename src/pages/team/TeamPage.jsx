import { useState, useEffect} from 'react'
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';
import Team from '../../containers/team/Team';
import Navbar from '../../containers/navbar/Navbar';
import { motion } from 'framer-motion';
import { useCursorContext } from '../../components/cursor/CursorContext';
//import '../../containers/team/Team.css';

function TeamPage() {
  const { cursorVariant, variants} = useCursorContext();
    const[loading, setLoading]=useState(true);
    useEffect(() =>{
    
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      
    }, []);
    if(loading){
        return <Loading />;
      }
  return (
    <>
        <Navbar />
        <Team />
        <motion.div className="cursor"
              variants={variants}
              animate={cursorVariant}
              transition={{ type: "tween", ease: "backOut", duration:0}}/>
        <Footer />
    </>
  )
}

export default TeamPage