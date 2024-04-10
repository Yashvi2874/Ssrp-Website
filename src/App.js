//import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css';
import React, { useState, useEffect} from 'react';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Team from './Components/Team';
import StarBackground from './Components/Background';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './Components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5 seconds

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
    <div className="absolute">
      <div className="relative">
        <NavBar />
        
        <iframe src='/project.html' title="Projects page" style={{ width: '100%', height: '85vh', border: 'none', position:'relative', top:'0' }}></iframe>
        
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
