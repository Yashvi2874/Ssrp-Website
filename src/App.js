import ShiningStars from './Components/ShiningStars';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="sky">
        <ShiningStars />
      </div>
      <Home />
    </div>
  );
}

export default App;
