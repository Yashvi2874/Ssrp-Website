import React, { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';
import Home from '../../containers/home/Home';
import About from '../../containers/about/About';
import Contact from '../../containers/contact_us/Contact';


function HomePage() {
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
        <Home />
        <About />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage