
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import StarBackground from './Components/Background';

function App() {
  return (
    <div className="App">
      <div className="stars">
        <StarBackground />
      </div>
      <div className="absolute">
        <NavBar />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
