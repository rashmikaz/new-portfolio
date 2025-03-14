import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainsection from './components/Mainsection';
import Aboutsection from './components/Aboutsection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <Routes>
          <Route path="/" element={<Mainsection />} />
          <Route path="/about" element={<Aboutsection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
