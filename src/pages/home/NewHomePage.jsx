import React, { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
//import Loading from '../../components/loading/Loading';
import Home from '../../containers/home/Home';
import Contact from '../../containers/contact_us/Contact';
import HomeLoading from '../../components/loading/HomeLoading';
import NewHome from '../../containers/home/NewHome';


function NewHomePage() {
    const[loading, setLoading]=useState(true);
    useEffect(() =>{
    
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      
    }, []);
    if(loading){
        return <HomeLoading />;
      }
  return (
    <>  
        <Navbar />
        <NewHome />
        <Footer /> 
    </>
  )
}

export default NewHomePage