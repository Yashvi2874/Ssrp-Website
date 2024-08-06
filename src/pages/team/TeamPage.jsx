import { useState, useEffect} from 'react'
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';
import Team from '../../containers/team/Team';
//import '../../containers/team/Team.css';

function TeamPage() {
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
        <Team />
        <Footer />
    </>
  )
}

export default TeamPage