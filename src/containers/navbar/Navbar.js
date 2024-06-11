import React, { useEffect } from 'react';
import './NavBar.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../../assests/images/about_images/logo.png';
import Somaiya_Vidyavihar from '../../assests/images/Trust_logo/somaiya white.png';
import Somaiya_Vidyavihar_University from '../../assests/images/Trust_logo/somaiya trust.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App({ toggleAbsolute }) {
  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);
  return (
    <div className='main2' data-aos="fade-down">
      <div className="App" style={{ width: "100vw" }}>
   
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>


        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className='navbar-logo'src={logo} alt='Ssrp-logo'></img>
              <img className='navbar-logo'src={Somaiya_Vidyavihar} alt='Somaiya_Vidyavihar'></img>
              <img className='navbar-logo'src={Somaiya_Vidyavihar_University} alt='Somaiya_Vidyavihar_University'></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  onClick={toggleAbsolute} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-transparent" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-lg-6">
                <li className="nav-item mr-lg-6 px-3 target">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item mr-lg-6 px-3 target">
                  <a className="nav-link active" aria-current="page" href="/project">Projects</a>
                </li>
                <li className="nav-item mr-lg-6 px-3 target">
                  <a className="nav-link active" aria-current="page" href="/community">Community</a>
                </li>
                <li className="nav-item mr-lg-6 px-3 target">
                  <a className="nav-link active" aria-current="page" href="/events">Events</a>
                </li>
                <li className="nav-item mr-lg-6 px-3 target">
                  <a className="nav-link active" aria-current="page" href="/contact">Contact US</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* <style>
          {`
            .main2 {
              animation: fade-up 3s;
            }

            @keyframes fade-up {
              0% {
                opacity: 0;
                transform: translate(30px) scale(0.9);
              }
              100% {
                opacity: 1;
                transform: translateY(0px) scale(1);
              }
            }
          `}
        </style> */}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
      </div>
    </div>
  );
}

export default App;
