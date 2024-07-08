import  { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
//import Loading from '../../components/loading/Loading';
import Home from '../../containers/home/Home';
import Contact from '../../containers/contact_us/Contact';
import HomeLoading from '../../components/loading/HomeLoading';


function HomePage() {
    const[loading, setLoading]=useState(true);
    useEffect(() =>{
    
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      
    }, []);
    if(loading){
        return <HomeLoading />;
      }
  return (
    <>  
        <Navbar />
        <Home />
        <Contact />
        <Footer /> 
    </>
  )
}

export default HomePage