import  { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import Loading from '../../components/loading/Loading';
import Crowdfunding from '../../containers/crowdfunding/Crowdfunding';


function CrowdFundingPage() {
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
        <Crowdfunding />
        <Footer />
    </>
  )
}

export default CrowdFundingPage