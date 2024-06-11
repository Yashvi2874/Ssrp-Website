//import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css';
import React, { useState, useEffect} from 'react';
import Home from './containers/home/Home';
import NavBar from './containers/navbar/Navbar';
import About from './containers/about/About';
import Project from './containers/projects/Projects';
import ProjectDescription from './containers/projects/Project_description';
import Contact from './containers/contact_us/Contact';
import Footer from './containers/footer/Footer';
import Team from './containers/team/Team';
import StarBackground from './components/background/Background';
import NotFound from './components/Not found page/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/loading/Loading';
import AOS from 'aos';

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

          <Route path="/events" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar/>
                <div style={{color: 'white', display:'block', height:'83vh', fontSize:'4rem', width:'100vw',  textAlign:'center', alignContent:'center'}}> Events Page Launching Soon</div>
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
                <Project />
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
                <Project />
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
        <Route path="/testpage" element={
          <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NavBar />
                <iframe src='/projectnew.html' title="testpage" style={{width:'100%', height:'120vh'}} />
                <Footer />
              </div>
            </div>
          </div>
        } />
        <Route path="*" element={
          <div className="App">
          <div className="stars">
            <StarBackground />
          </div>
          <div className="absolute">
            <div className="relative">
              <NavBar />
              <NotFound />
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
