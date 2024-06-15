import React, { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';
import Event from '../../containers/events/Events';


function EventPage() {
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
        <Event />
        <Footer />
    </>
  )
}

export default EventPage