
import './App.css';
import React from 'react';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Project';
import StarBackground from './Components/Background';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<React.Fragment><div className="App">
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
    </div></React.Fragment>} />
    <Route path="projects" element={<Project />} />
    <Route path="project" element={<Project />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
