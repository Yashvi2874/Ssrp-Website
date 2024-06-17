import React, { useState, useEffect} from 'react'
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';
import Team from '../../containers/team/Team';


function TeamPage() {
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
        <Team />
        <Footer />
    </>
  )
}

export default TeamPage