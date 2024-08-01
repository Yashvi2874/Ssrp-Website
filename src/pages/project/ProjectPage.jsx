import  { useState , useEffect}  from 'react'
//import Projects from '../../containers/projects/index';
import Loading from '../../components/loading/Loading';
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import NewProject from '../../containers/projects/NewProject';

function ProjectPage() {
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
    <NewProject />
    <Footer />
    </>
  )
}

export default ProjectPage