import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import mainimg from "../assets/main.png";
import innovestaimg from "../assets/innovesta.jpeg"
import Footer from './Footer';
import { Card } from "flowbite-react";
import zenuiimg from "../assets/zenUI.png"
import bigburgerimg from "../assets/big burger.jpeg"
import smsimg from "../assets/sms-react.jpeg"
import innovesta2023img from "../assets/innovesta-2023.jpeg"
import ijseimg from "../assets/ijse.jpeg"
import { motion } from 'framer-motion';



const project = [
  {
    title: "ZenUI project for software company",
    description: "A modern, responsive, and intuitive web solution that turns creative ideas into seamless user experiences",
    tags: ["React", "JavaScript", "tailwindCSS"],
    image: zenuiimg,
    githubLink: "https://github.com/rashmikaz/ZenUI",
  },
  {
    title: "Big Burger Restaurant",
    description: "This project is a simple yet engaging website built to showcase a burger restaurant menu.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: bigburgerimg,
    githubLink: "https://github.com/rashmikaz/big-burger-restaurant", 
  },
  {
    title: "Student Management System",
    description: "This project was done for my react project in campus as a final project",
    tags: ["React", "JavaScript", "tailwindCSS"],
    image: smsimg,
    githubLink: "https://github.com/rashmikaz/student-management-react",
  },
];
const Main = () => {
  const projectSectionRef = useRef(null);

  const handleScroll = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center lg:mt-18">
     <motion.div
      className="w-110 relative right-100 top-15"
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 2  }}
    >
      <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">Designer</h1>
      <p className="text-lg text-neutral-600 max-w-4xl">
        UI-focused product designer with expertise in creating design systems and crafting intuitive, user-friendly interfaces that enhance overall user experiences.
      </p>
    </motion.div>

    <motion.div
      className="w-110 relative left-90 bottom-28"
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 2 }} 
    >
      <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">Developer</h1>
      <p className="text-lg text-neutral-500 max-w-4xl">
        Frontend and Backend developer who writes clean, elegant, and efficient code.
      </p>
    </motion.div>

    <motion.div
      className="text-center mt-6 relative left-80 top-10 w-120"
      initial={{ x: 300, opacity: 0 }} // Starts from right off-screen
      animate={{ x: 0, opacity: 1 }} // Moves to its normal position with full opacity
      transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 2 }} // Smooth animation
    >
      <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
        Hello, I'm <span className="text-6xl font-bold">Rashmika</span>, a software engineering student with a strong
        passion for UI/UX design. I create user-friendly and visually appealing interfaces, focusing on delivering seamless experiences.
      </p>
    </motion.div>

      <motion.div
      className="mt-8 relative bottom-130"
      initial={{ x: 300, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 2 }} 
    >
      <img src={mainimg} alt="Main" className="w-150 mx-auto" />
    </motion.div>

      
      <div
  className="relative bottom-140 right-120"
  style={{ display: 'flex', gap: '40px' }}
>
  <a
    href="#!"
    role="button"
    aria-label="Facebook"
    className="social-icon"
  >
    {/* Facebook */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="gray"
      viewBox="0 0 24 24"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  </a>

  <a
    href="#!"
    role="button"
    aria-label="Instagram"
    className="social-icon"
  >
    {/* Instagram */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="gray"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  </a>

  <a
    href="#!"
    role="button"
    aria-label="LinkedIn"
    className="social-icon"
  >
    {/* LinkedIn */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="gray"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5c0 .35-.29.64-.64.64h-2c-.35 0-.64-.29-.64-.64v-2c0-.35.29-.64.64-.64h2c.35 0 .64.29.64.64v2zm-1.28-2c-.14 0-.28.14-.28.28v2c0 .14.14.28.28.28h.72c.14 0 .28-.14.28-.28v-2c0-.14-.14-.28-.28-.28h-.72zm5.48 4.88c-.06 0-.12.01-.18.02-.16-.38-.51-.66-.91-.73-.13-.02-.27-.02-.41-.02-.55 0-1.03.16-1.41.43-.17.13-.31.28-.44.44-.49.63-.79 1.42-.79 2.27 0 2.14 1.73 3.88 3.88 3.88 1.72 0 3.16-.9 3.88-2.21-.79 1.23-2.31 2.06-4.14 2.06-3.23 0-5.88-2.64-5.88-5.88s2.64-5.88 5.88-5.88c1.26 0 2.44.37 3.44 1.01.49-.43.88-.95 1.14-1.56-.9-.3-1.86-.47-2.86-.47-3.99 0-7.2 3.21-7.2 7.2s3.21 7.2 7.2 7.2c3.29 0 6.12-2.23 7.05-5.14-.55-.14-1.07-.41-1.56-.76z" />
    </svg>
  </a>

  <a
    href="#!"
    role="button"
    aria-label="GitHub"
    className="social-icon"
  >
    {/* GitHub */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="gray"
      viewBox="0 0 24 24"
    >
      <path d="M12 2c-5.5 0-10 4.5-10 10 0 4.4 2.8 8.1 6.6 9.4.5.1.7-.2.7-.4v-1.5c-2.7.6-3.3-1.3-3.3-1.3-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5 1.2.1 1.8 1.3 1.8 1.3 1.5 0 2.3-1 2.8-2.2 2.8-2.3 0-3.7-1.5-3.7-3.1 0-1.4 1-2.7 2.6-2.7 1.4 0 2.4 1 2.4 2.3 0 1.7-1.5 2.9-3.5 2.9-.7 0-1.3-.1-1.9-.3-.1-.3-.1-.7-.1-1.1 0-1 .5-1.5 1.2-1.5 1.4 0 2.6 1.3 2.6 2.6 0 2.2-1.6 3.9-4 3.9-3.3 0-5.9-2.6-5.9-5.9 0-2.8 1.9-5.3 4.6-6.1-.1-.7.1-1.3.7-1.5 2.1-.6 3.8 1.4 3.8 1.4s1.2 1 2.5 1.2c1.1-.4 2.1-.9 3.1-1.5-.1-.6-.4-.8-.6-.8-1.7 0-3.5-2.3-3.5-4.8 0-2.5 2.8-4.8 4.9-4.8 1.8 0 3.6.9 4.7 2.3-.2-.6-.8-1.3-1.4-1.3-1.7 0-3.2 1.8-3.2 3.4 0 1.7 1.5 3.1 3.3 3.1 1.9 0 3.4-1.6 3.4-3.6 0-1.9-1.6-3.3-3.4-3.3zm0-2c-7.7 0-14 6.3-14 14 0 7.7 6.3 14 14 14 7.7 0 14-6.3 14-14 0-7.7-6.3-14-14-14z" />
    </svg>
  </a>

  <a
    href="#!"
    role="button"
    aria-label="Twitter"
    className="social-icon"
  >
    {/* Twitter */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="gray"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  </a>
</div>


      <div className="border-t border-gray-300 w-full mt-10 relative bottom-147"></div>

      <Link to="/about" className="mt-6 animate-bounce relative bottom-165 left-100">
        <svg className="size-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m-7.5-7.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>

      <div className="mt-4 flex items-center space-x-2 relative bottom-160">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
        <p className="text-xl text-neutral-700 cursor-pointer" onClick={handleScroll}>
          Some of my latest works and updates
        </p>
      </div>

      {/* cards */}

      <div ref={projectSectionRef} className="flex flex-wrap justify-center mt-6 relative bottom-120">
  {project.map((project, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
      <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-bold my-2 text-white">{project.title}</h3>
        <p className="text-neutral-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-400">{tag}</span>
          ))}
        </div>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white-400 font-medium"
        >
          View on GitHub → 
        </a>
      </div>
    </div>
  ))}
</div>
      <Card
      className="max-w-sm relative bottom-115 right-100"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={innovesta2023img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        Innovesta program Ijse 2023
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      </Card>

      <Card
      className="max-w-sm relative bottom-243 "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={innovestaimg}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      </Card>

       <Card
      className="max-w-sm relative bottom-410 left-100"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={ijseimg}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        My Software engineering journey with IJSE
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      </Card>

   

     <div className="">
     <Footer />
     </div>
     
     
    </div>
  );
};

export default Main;
