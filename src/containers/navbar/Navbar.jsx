import React, { useEffect} from 'react';
import './NavBar.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCursorContext } from '../../components/cursor/CursorContext';


function App({ toggleAbsolute }) {
  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);

  const { textEnter, textLeave } = useCursorContext();
  return (
    <div className='main2' data-aos="fade-down">
      <div className="App" style={{ width: "100vw" }}>
      
   
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>


        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className='navbar-logo'src='/assets/images/about_images/logo.png' alt='Ssrp-logo'></img>
              <img className='navbar-logo'src='/assets/images/Trust_logo/somaiya white.png' alt='Somaiya_Vidyavihar'></img>
              <img className='navbar-logo'src='/assets/images/Trust_logo/somaiya trust.png' alt='Somaiya_Vidyavihar_University'></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  onClick={toggleAbsolute} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            ☰
            </button>
            <div className="collapse navbar-collapse bg-transparent" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-lg-6">
                <li className="nav-item mr-lg-6 px-3 target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <div className="navigation">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </div>
                </li>
                <li className="nav-item mr-lg-6 px-3 target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className="navigation">
                  <a className="nav-link active" aria-current="page" href="/project">Projects</a>
                </div>
                </li>
                <li className="nav-item mr-lg-6 px-3 target" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className="navigation">
                  <a className="nav-link active" aria-current="page" href="/community">Community</a>
                </div>
                </li>
                <li className="nav-item mr-lg-6 px-3 target"onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className="navigation">
                  <a className="nav-link active" aria-current="page" href="/events">Events</a>
                </div>
                </li>
                <li className="nav-item mr-lg-6 px-3 target"onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className="navigation">
                  <a className="nav-link active" aria-current="page" href="/crowdfunding">Crowd-Funding</a>
                </div>
                </li>
                <li className="nav-item mr-lg-6 px-3 target"onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <div className="navigation">
                  <a className="nav-link active" aria-current="page" href="/contact">Contact US</a>
                </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
      </div>
    </div>
  );
}

export default App;
