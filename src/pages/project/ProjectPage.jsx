import React, { useState , useEffect}  from 'react'
import Projects from '../../containers/projects/index';
import Loading from '../../components/loading/Loading';
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';

function ProjectPage() {
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
    <Projects />
    <Footer />
    </>
  )
}

export default ProjectPage