import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import mainimg from "../assets/new main.png";
import portfolioimg from "../assets/portfolio.jpeg";

const project = [
  {
    title: "Portfolio, HTML, CSS, and JS",
    description: "This is my first portfolio, I did this for my coursework.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: portfolioimg,
  },
  {
    title: "Portfolio, HTML, CSS, and JS",
    description: "This is my first portfolio, I did this for my coursework.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: portfolioimg,
  },
  {
    title: "Portfolio, HTML, CSS, and JS",
    description: "This is my first portfolio, I did this for my coursework.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: portfolioimg,
  },
];

const Main = () => {
  const projectSectionRef = useRef(null);

  const handleScroll = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
      <div className="w-100 relative right-110 top-0">
        <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">Designer</h1>
        <p className="text-lg text-center text-neutral-500 max-w-4xl">
          UI-focused product designer specializing in design systems and user interface design.
        </p>
      </div>
      <div className="w-100 relative left-90 bottom-35">
        <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">Developer</h1>
        <p className="text-lg text-center text-neutral-500 max-w-4xl">
          Frontend and Backend developer who writes clean, elegant, and efficient code.
        </p>
      </div>
      <div className="relative left-100 bottom-11">
        <p className="text-xl text-neutral-700 max-w-4xl w-100">
          Hello, I'm <span className="text-7xl font-bold">Rashmika</span>, a software engineering student with a strong
          passion for UI/UX design. I enjoy creating user-friendly and visually appealing interfaces, focusing on
          delivering seamless experiences.
        </p>
      </div>
      <div className="relative bottom-150">
        <img src={mainimg} alt="Main" className="w-140" />
      </div>
      <div className="border-t border-gray-300 w-full mt-10 relative bottom-160"></div>
      <Link to="/about" className="animate-bounce mt-10 relative bottom-180 left-90">
        <svg
          className="size-9 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m-7.5-7.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
      <div className="relative bottom-170 flex items-center space-x-2">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
        <p className="text-xl text-neutral-700 max-w-4xl cursor-pointer" onClick={handleScroll}>
          Some of my latest works and updates
        </p>
      </div>
      <div ref={projectSectionRef} className="flex flex-wrap justify-center relative bottom-150">
        {project.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm font-semibold text-white-400">{project.category}</p>
              <h3 className="text-xl font-bold my-2 text-white">{project.title}</h3>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-400">{tag}</span>
                ))}
              </div>
              <a href="#" className="text-white-400 font-medium">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
