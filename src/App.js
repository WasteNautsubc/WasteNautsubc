import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Team from './components/pages/Team';
import About from './components/pages/About';
import PastProjects from './components/pages/PastProjects';
import Sponsors from './components/pages/Sponsors';
import MyceliumMycopack from './components/pages/MyceliumMycopack';
import TextileWaste from './components/pages/TextileWaste';
import TailingsToConcrete from './components/pages/TailingsToConcrete';
import HybridEnergy from './components/pages/HybridEnergy.js';
import RecycledPaddleBoard from './components/pages/RecycledPaddleBoard.js';

function App() {
  return (
    <Router>
        <Navbar />
          <Routes >
            <Route path='/'exact element={<Home />} />
            <Route path='/projects'exact element={<Team />} />
            <Route path='/about-us'exact element={<About />} />
            <Route path='/Sponsors_Advisors'exact element={<Sponsors />} />
            <Route path='/past-projects'exact element={<PastProjects />} />
            <Route path='/mycelium-mycopack'exact element={<MyceliumMycopack />} />
            <Route path='/textile-waste-recycling'exact element={<TextileWaste />} />
            <Route path='/tailings-to-concrete'exact element={<TailingsToConcrete />} />
            <Route path='/hybrid-energy-harvesting-systems'exact element={<HybridEnergy />} />
            <Route path='/recycled-plastic-paddle-board'exact element={<RecycledPaddleBoard />} />
            
          </Routes>
    </Router>
  );
}

export default App;
