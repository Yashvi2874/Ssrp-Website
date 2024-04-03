import './App.css';
import React from 'react';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Team from './Components/Team';
import StarBackground from './Components/Background';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
    <div className="absolute">
      <div className="relative">
        <iframe src="/space.html" title="Space Page" style={{ width: '100%', height: '100vh', border: 'none', position:'absolute', top:'0' }} />
        <NavBar style={{ position:'absolute', top:'0' }}/>
      </div>
    </div>
  </div>
} />
        <Route path="/projects" element={
  <div className="App">
    <div className="absolute">
      <div className="relative">
        <iframe src="/space.html" title="Space Page" style={{ width: '100%', height: '100vh', border: 'none', position:'absolute', top:'0' }} />
        <NavBar style={{ position:'absolute', top:'0' }}/>
      </div>
    </div>
  </div>
} />

        <Route path="/projects" element={<iframe src="/space.html" title="Space Page" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        <Route path="/project" element={<iframe src="/space.html" title="Space Page" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        <Route path="/community" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <Team />
              </div>
            </div>
          </div>} />
      </Routes>
    </BrowserRouter>
          );
}

export default App;
