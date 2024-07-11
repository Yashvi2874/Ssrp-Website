import  { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';
import BoxContainer from '../../containers/events/BoxContainer';

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
        <BoxContainer />
        <Footer />
    </>
  )
}

export default EventPage