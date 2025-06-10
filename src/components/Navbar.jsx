import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
         
          <div className="flex items-center w-12 h-12">
            <img src="./logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>

          
          <ul className="hidden lg:flex ml-10 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="text-white hover:text-gray-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/blog" className="py-2 px-3 border text-white rounded-md hover:border-white">
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-3 rounded-md shadow-md transform hover:scale-105 transition duration-300"
            >
              Say Hello
            </Link>
          </div>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="block text-white hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-3">
              <Link
                to="/blog"
                className="block border text-white py-2 px-3 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-3 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Say Hello
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
