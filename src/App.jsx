import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname} // Key ensures animation happens on route change
      initial={{ opacity: 0, x: 200 }} // Start offscreen to the right with opacity 0
      animate={{ opacity: 1, x: 0 }} // Slide in from the right to the center
      exit={{ opacity: 0, x: -200 }} // Slide out to the left with opacity 0
      transition={{
        type: 'spring', 
        stiffness: 300, 
        damping: 30, 
        duration: 0.8, // Duration for smooth slide and fade
      }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <Routes>
          <Route
            path="/"
            element={
              // <PageTransition>
                <Main />
              // </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/project"
            element={
              <PageTransition>
                <Project />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              
                <Contact />
             
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
