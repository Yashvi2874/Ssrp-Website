import React, { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Contact from '../../containers/contact_us/Contact';
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';


function ContactPage() {
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
        <Contact />
        <Footer />
    </>
  )
}

export default ContactPage