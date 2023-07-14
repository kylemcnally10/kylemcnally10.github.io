import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Picky from './components/Picky';
import AuctionHouse from './components/AuctionHouse';
import PokeMERN from './components/PokeMERN';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Picky" element={<Picky />} />
          <Route path="/PokeMERN" element={<PokeMERN />} />
          <Route path="/AuctionHouse" element={<AuctionHouse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;