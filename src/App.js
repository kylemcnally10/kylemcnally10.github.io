import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Picky from './components/Picky';
import AuctionHouse from './components/AuctionHouse';
import PokeMERN from './components/PokeMERN';
import About from './components/About';

function App() {
  return (
    <Router basename="/portfolio-site">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-site/about" element={<About />} />
          <Route path="/portfolio-site/projects" element={<Projects />} />
          <Route path="/portfolio-site/projects/picky" element={<Picky />} />
          <Route path="/portfolio-site/projects/pokemern" element={<PokeMERN />} />
          <Route path="/portfolio-site/projects/auction-house" element={<AuctionHouse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
