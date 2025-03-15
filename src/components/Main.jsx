import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import mainimg from "../assets/main.png";
import portfolioimg from "../assets/portfolio.jpeg";
import innovestaimg from "../assets/innovesta.jpeg"
import Footer from './Footer';
import { Card } from "flowbite-react";
import zenuiimg from "../assets/zenUI.png"
import bigburgerimg from "../assets/big burger.jpeg"
import smsimg from "../assets/sms-react.jpeg"
import innovesta2023img from "../assets/innovesta-2023.jpeg"
import ijseimg from "../assets/ijse.jpeg"


const project = [
 {
       
       title: "ZenUI project for software company",
       description: "a modern, responsive, and intuitive web solution that turns creative ideas into seamless user experiences",
       tags: ["React", "Javacript", "tailwindCSS"],
       image: zenuiimg, 
     },
  {
      
      title: "Big burger Restaurant",
      description: "This project is a simple yet engaging website built to showcase a burger restaurant menu.",
      tags: ["HTML", "Javacript", "CSS"],
      image: bigburgerimg, 
    },
  {
    title: "Student Management System",
    description: "This is project done for my react project in campus as a final project ",
    tags: ["React", "JavaScript", "tailwindCSS"],
    image: smsimg,
  },
];

const Main = () => {
  const projectSectionRef = useRef(null);

  const handleScroll = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center lg:mt-16">
      <div className="w-110 relative right-110 top-0">  
      <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">Designer</h1>
        <p className="text-lg  text-neutral-500 max-w-4xl">
          UI-focused product designer specializing in design systems and user interface design.
        </p>
      </div>

      <div className="w-100 relative left-90 bottom-35">
        <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">Developer</h1>
        <p className="text-lg  text-neutral-500 max-w-4xl">
          Frontend and Backend developer who writes clean, elegant, and efficient code.
        </p>
      </div>

      <div className="text-center mt-6 relative left-80 top-20 w-120">
        <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
          Hello, I'm <span className="text-6xl font-bold">Rashmika</span>, a software engineering student with a strong
          passion for UI/UX design. I create user-friendly and visually appealing interfaces, focusing on delivering seamless experiences.
        </p>
      </div>

      <div className="mt-8 relative bottom-120">
        <img src={mainimg} alt="Main" className="w-150 mx-auto" />
      </div>

      <div className="border-t border-gray-300 w-full mt-10 relative bottom-130"></div>

      <Link to="/about" className="mt-6 animate-bounce relative bottom-150 left-100">
        <svg className="size-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m-7.5-7.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>

      <div className="mt-4 flex items-center space-x-2 relative bottom-140">
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
              <a href="#" className="text-white-400 font-medium">Read More →</a>
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

   

     <div className="relative bottom-110">
     <Footer />
     </div>
    </div>
  );
};

export default Main;
