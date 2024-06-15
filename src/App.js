//import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css';
import React, { useState, useEffect} from 'react';
import Home from './containers/home/Home';
import NavBar from './containers/navbar/Navbar';
import About from './containers/about/About';
import Projects from './containers/projects/index';
import ProjectDescription from './containers/projects/Project_description';
import Contact from './containers/contact_us/Contact';
import Footer from './containers/footer/Footer';
import Team from './containers/team/Team';
import StarBackground from './components/background/Background';
import NotFound from './components/Not found page/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/loading/Loading';
import AOS from 'aos';

import Event from './containers/events/Events';

function App() {
  //const [isAbsolute, setIsAbsolute] = useState(false);
  const [loading, setLoading] = useState(true);

  //const toggleAbsolute = () => {
    //setIsAbsolute(!isAbsolute);
  //};

  useEffect(()=>{
    AOS.init({duration:"2000"});
  },[]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  
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
      
        
      <Route path="/community" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <Team />
                <Footer />
              </div>
            </div>
          </div>} />

          <Route path="/events" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar/>
                <Event />
                <Footer />
              </div>
            </div>
          </div>} />

          <Route path="/project" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar/>
                <Projects />
                <Footer />
              </div>
            </div>
          </div>} />

          <Route path="/projects" element={

        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar/>
                <Projects />
                <Footer />
              </div>
            </div>
          </div>} />

          <Route path="/project/:projectId" element={
            <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar/>
                <ProjectDescription />
                <Footer />
              </div>
            </div>
          </div>
          } />

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


        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
          );
}

export default App;
