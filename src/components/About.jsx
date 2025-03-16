import React from 'react';
import Skill from './Skills';
import { features } from "../constants";
import SkillsChart from './SkillsChart';
import Footer from './Footer';
import aboutimg1 from "../assets/aboutmain.png"
import { motion } from 'framer-motion';



const Aboutsection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
    <motion.div
  className="w-130 relative right-90"
  initial={{ x: -100, opacity: 0 }} 
  animate={{ x: 0, opacity: 1 }} 
  transition={{
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 1.5,
  }}
>
  <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">about</h1>
  
  <p className="text-xl text-neutral-500 pt-6 pb-6">
    I'm a designer & developer in Sri Lanka, with a passion for creating intuitive and user-friendly digital experiences.
  </p>
  
  <p className="text-xl text-neutral-300 leading-8">
    I’m Rashmika, a passionate and dedicated software engineering student with a deep interest in UI/UX design. My journey in the world of technology started with a curiosity for problem-solving and a fascination with how digital tools can improve user experiences.
    I have honed my skills through hands-on learning and projects that focus on creating intuitive, user-friendly interfaces. My work emphasizes clean code, thoughtful design, and a focus on how users interact with technology, ensuring every project is not only functional but delightful to use.
  </p>
</motion.div>

<motion.p
  className="text-xl text-neutral-700 max-w-3xl mx-auto w-60 relative left-120 bottom-125"
  initial={{ x: 100, opacity: 0 }} 
  animate={{ x: 0, opacity: 1 }} 
  transition={{
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 1.5,
  }}
>
  "By day, I'm a  <span className="text-6xl font-bold">frontend developer</span>, and by night, I tackle backend tasks, debugging nonstop. My code works—until someone reviews it. Dark mode is basically my personality trait, keeping me coding around the clock. Coffee fuels my creativity, and errors keep me humble. I thrive on problem-solving, diving deep into code, and learning from every bug."
</motion.p>

      <motion.div
  className="relative bottom-260 left-50"
  initial={{ x: -100, opacity: 0 }} 
  animate={{ x: 0, opacity: 1 }} 
  transition={{
    type: 'spring',
    stiffness: 100,
    damping: 10,
    duration: 1.5,
  }}
>
  <img src={aboutimg1} alt="About Image" className="w-75 mx-auto" />
</motion.div>

     <div className="border-t border-gray-300 w-full mt-10 relative bottom-255"></div>

     <div className="relative bottom-120">
      <Skill />
     </div>

     <div>
     <p className="text-xl text-neutral-300 leading-8 w-130 relative left-80 bottom-335">
     As a software engineer and product designer, I leverage my expertise in both design and development to create functional, visually appealing web applications. I have hands-on experience with a wide range of technologies including HTML, CSS, JavaScript, React, and Node.js, and I'm constantly expanding my skill set to stay ahead of the latest trends in the industry.
      </p>
     </div>


     <div className="relative bottom-270">
     <div className="text-center">
        <span className="bg-neutral-900 text-gray-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"
        >
          Service
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        My Expertise for Your Success
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-white-400 justify-center items-center rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md"
>
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>

     
      <SkillsChart />

      
      <Footer />
  
    </div>
  );
};

export default Aboutsection;
