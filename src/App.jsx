import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Preloader from "./components/preloader/Preloader"; // 👈 import the preloader component

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/project"
            element={
              <PageTransition>
                <Project />
              </PageTransition>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
