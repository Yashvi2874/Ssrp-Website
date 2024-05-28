//import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css';
import React, { useState, useEffect} from 'react';
import Home from './containers/home/Home';
import NavBar from './containers/navbar/Navbar';
import About from './containers/about/About';
import Contact from './containers/contact_us/Contact';
import Footer from './containers/footer/Footer';
import Team from './containers/team/Team';
import StarBackground from './components/background/Background';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/loading/Loading';
import AOS from 'aos';
function App() {
  const [isAbsolute, setIsAbsolute] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleAbsolute = () => {
    setIsAbsolute(!isAbsolute);
  };

  useEffect(()=>{
    AOS.init({duration:"2000"});
  },[]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
            
              <div className="relative">
              <NavBar />
                <Home />
                <About />
                <Contact />
                <Footer />
              </div>
            </div>
          </div>
        } />
      
        <Route path="/project" element={
  <div className="App">
    <div className="stars">
      <StarBackground />
    </div>
    {/* {!isAbsolute ? <div className="absolute" style={{zIndex:'1'}}><NavBar toggleAbsolute={toggleAbsolute}/></div> : <></>} */}
   
    <div className="absolute" style={{zIndex:'0', minHeight:'100vh'}}>
      <div className="relative" style={{height:'100vh',overflow:'hidden'}}>
   {/* {!isAbsolute ? <div className="absolute" style={{zIndex:'1'}}> : <></>} */}
    <div className={!isAbsolute ? "absolute" : ""} style={{zIndex:'1'}}>
   <NavBar toggleAbsolute={toggleAbsolute}/>
    </div>
      {/* {isAbsolute ? <div style={{zIndex:'1'}}><NavBar toggleAbsolute={toggleAbsolute}/></div> : <></>} */}
        <iframe src='/project.html' title="Projects page" style={{ width: '100%', height: '90vh', border: 'none', position:'relative', top:'0' }}></iframe>
        
        <Footer />
      </div>
        
    </div>
  </div>
} />
        <Route path="/projects" element={
  <div className="App">
    <div className="stars">
      <StarBackground />
    </div>
    <div className="absolute">
      <div className="relative">
        <NavBar />
        
        <iframe src='/project.html' title="Projects page" style={{ width: '100%', height: '85vh', border: 'none', position:'relative', top:'0' }}></iframe>
        
        <Footer />
      </div>
        
    </div>
  </div>
} />

        <Route path="/projects" element={<iframe src="/space.html" title="Space Page" style={{ width: '120vw', height: '100vh', border: 'none' }} />} />
        <Route path="/project" element={<iframe src="/space.html" title="Space Page" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        <Route path="/community" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar/>
                <Team />
                <Footer />
              </div>
            </div>
          </div>} />

        <Route path="/contact" element={
          <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar />
                <Contact />
                <Footer />
              </div>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
          );
}

export default App;
