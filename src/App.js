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
                <Team />
                <Contact />
                <Footer />
              </div>
            </div>
          </div>
        } />
        <Route path="/projects" element={<iframe src="/space.html" title="Space Page" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        <Route path="/project" element={<iframe src="/space.html" title="Space Page" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
