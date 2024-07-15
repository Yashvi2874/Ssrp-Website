import  { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Loading from '../../components/loading/Loading';
import Scene from '../../containers/events/NewEvent';

function NewEventPage() {
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
        </div>);
      }
  return (
    <>
        <Navbar />
        <div style={{ marginTop: "-15vh"}}>
        <Scene />
        </div>
    </>
  )
}

export default NewEventPage;