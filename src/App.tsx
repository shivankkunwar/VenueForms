import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import CardScreen from './components/GuestNumber';

import VenueScreen from './components/VenueScreen';
import LoaderScreen from './components/LoaderScreen';
import Welcome from './components/Welcome';
import GetFreeProposal from './components/GetFreeProposal';
import Recommended from './components/Recommended';

const App: React.FC = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/get-free-proposal" element={<GetFreeProposal/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/guest" element={<CardScreen />} />
          <Route path="/recommended" element={<Recommended/>}/>
          <Route path="/venue" element={<VenueScreen />} />
          <Route path="/loader" element={<LoaderScreen />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;

