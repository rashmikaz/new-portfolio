import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-3.7 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 relative left-25 w-16 h-16">
            {/* <span className="text-xl tracking-tight">RK</span> */}
            <img src="./logo.png" alt="" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="text-white hover:text-gray-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center relative right-25">
            <Link to="/blog" className="py-2 px-3 border rounded-md">
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-3 rounded-md shadow-md transform hover:scale-105 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 ease-in-out"
            >
              Say Hello
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
