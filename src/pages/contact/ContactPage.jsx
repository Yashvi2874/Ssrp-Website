import  { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Contact from '../../containers/contact_us/Contact';
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';


function ContactPage() {
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
        <Navbar />
        <Contact />
        <Footer />
    </>
  )
}

export default ContactPage