import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import mainimg from "../assets/main.png";
import Footer from './Footer';
import zenuiimg from "../assets/zenUI.png"
import bigburgerimg from "../assets/big burger.jpeg"
import smsimg from "../assets/sms-react.jpeg"
// import ijseimg from "../assets/ijse.jpeg"
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
    <div className="container mx-auto px-4 py-12 text-white tracking-wide">
     <motion.div
      className="w-110 absolute right-210 top-43"
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 2  }}
    >
    <h1 className="font-bold text-[2.25rem] sm:text-[3.5rem] lg:text-[5rem] tracking-wide">Designer</h1>

      <p className="text-lg text-neutral-600 max-w-4xl">
        UI-focused product designer with expertise in creating design systems and crafting intuitive, user-friendly interfaces that enhance overall user experiences.
      </p>
    </motion.div>

    <motion.div
      className="w-110 absolute left-210 bottom-120"
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 2 }} 
    >
      <h1 className="font-bold text-[2.25rem] sm:text-[3.5rem] lg:text-[5rem] tracking-wide"> Developer</h1>
      <p className="text-lg text-neutral-500 max-w-4xl">
        Frontend and Backend developer who writes clean, elegant, and efficient code.
      </p>
    </motion.div>

    <motion.div
      className="text-center mt-6 absolute left-200 top-130 w-120"
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
      className="mt-8 absolute bottom-25 right-120"
      initial={{ x: 300, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 2 }} 
    >
      <img src={mainimg} alt="Main" className="w-150 mx-auto" />
    </motion.div>

      
      <div
  className="absolute bottom-30 right-267"
  style={{ display: 'flex', gap: '30px' }}
>
  <a
    href="https://www.facebook.com/rashmika.hewawitharana"
    role="button"
    aria-label="Facebook"
    className="social-icon"
  >
    {/* Facebook */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="gray"
      viewBox="0 0 24 24"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  </a>

  <a
    href="https://www.instagram.com/_rashmikas/"
    role="button"
    aria-label="Instagram"
    className="social-icon"
  >
    {/* Instagram */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="gray"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  </a>

 <a
  href="https://www.linkedin.com/in/rashmika-hewawitharane-6b3157287/"
  role="button"
  aria-label="LinkedIn"
  className="social-icon"
>
  {/* LinkedIn Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="gray"
  >
    <path d="M19 0h-14C2.24 0 1 1.24 1 2.75v18.5C1 22.76 2.24 24 3.75 24h16.5C21.76 24 23 22.76 23 21.25V2.75C23 1.24 21.76 0 20.25 0H19zM8.34 20H5.67V9h2.67v11zM7 7.5C6.04 7.5 5.25 6.71 5.25 5.75S6.04 4 7 4s1.75.79 1.75 1.75S7.96 7.5 7 7.5zM20 20h-2.67v-5.5c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V20h-2.67V9h2.56v1.5h.04c.36-.68 1.24-1.39 2.55-1.39 2.73 0 3.24 1.8 3.24 4.13V20z" />
  </svg>
</a>


  <a
  href="https://github.com/rashmikaz"
  role="button"
  aria-label="GitHub"
  className="social-icon"
>
  {/* GitHub Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="gray"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.277.098-2.66 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.848.004 1.705.115 2.5.337 1.91-1.296 2.748-1.026 2.748-1.026.546 1.383.202 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.694-4.566 4.944.359.31.678.922.678 1.86 0 1.343-.012 2.426-.012 2.756 0 .268.18.58.688.482A10.013 10.013 0 0 0 22 12.012C22 6.484 17.523 2 12 2Z"
      clipRule="evenodd"
    />
  </svg>
</a>


  <a
  href="https://x.com/hewawitharane"
  role="button"
  aria-label="X"
  className="social-icon"
>
  {/* X Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="gray"
  >
    <path d="M21.543 2H17.4l-5.471 6.797L6.343 2H2l7.828 10.113L2 22h4.2l5.928-7.36L17.658 22H22l-8.246-10.652L21.543 2z" />
  </svg>
</a>

</div>


      <div className="border-t border-gray-300 w-305 mt-10 absolute bottom-25 right-35"></div>

      <Link to="/about" className="mt-6 animate-bounce absolute bottom-27 left-288">
        <svg className="size-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m-7.5-7.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>

      <div className="mt-4 flex items-center space-x-2 absolute bottom-10 right-143">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
        <p className="text-xl text-neutral-700 cursor-pointer" onClick={handleScroll}>
          Some of my latest works and updates
        </p>
      </div>

      {/* cards */}

     <div
  ref={projectSectionRef}
  className="flex flex-wrap justify-center mt-6 absolute top-[830px] right-30"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-13">
  {project.map((project, index) => (
    <div
      key={index}
      className="bg-neutral-900 rounded-xl p-5 border border-neutral-800 hover:shadow-lg hover:shadow-neutral-800 transition-all duration-300 w-88"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-neutral-400 mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 font-medium hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  ))}
</div>

</div>

      {/* <Card
      className="w-95 absolute top-350 right-223"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={innovesta2023img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-blue-400 ">
        Team vexon
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      </Card> */}

      {/* <Card className="w-174 absolute top-350 left-150">
  <div className="flex items-start">
    
    <img
      src={innovestaimg}
      alt="Meaningful alt text for an image that is not purely decorative"
      className="w-60 h-68 object-cover rounded"
    />

   
    <div className="ml-4">
      <h5 className="text-2xl font-bold tracking-tight text-blue-400">
        Innovesta program Ijse 2023
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
         Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
           Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </div>
  </div>
</Card> */}

       {/* <Card
      className="max-w-sm absolute top-340 left-239"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={ijseimg}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        My Software engineering journey with IJSE
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      </Card> */}

   

     <div className="absolute top-350">
     <Footer />
     </div>
     
     
    </div>
  );
};

export default Main;
