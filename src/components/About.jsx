import React from 'react';
import aboutimg from "../assets/main.png"
import Skill from './Skills';
import { features } from "../constants";
import SkillsChart from './SkillsChart';
import Footer from './Footer';

const Aboutsection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
     <div className="w-130 relative right-90">
      <h1  className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">about</h1>
     
      <p className="text-xl  text-neutral-500 pt-6 pb-6">I'm a  designer & developer  in Sri Lanka, with a passion for creating intuitive and user-friendly digital experiences</p>
     
      <p className="text-xl text-neutral-100 leading-8">I’m Rashmika, a passionate and dedicated software engineering student with a deep interest in UI/UX design. My journey in the world of technology started with a curiosity for problem-solving and a fascination with how digital tools can improve user experiences.
      I have honed my skills through hands-on learning and projects that focus on creating intuitive, user-friendly interfaces.My work emphasizes clean code, thoughtful design, and a focus on how users interact with technology, ensuring every project is not only functional but delightful to use.
      Alongside my academic pursuits
      </p>
     </div>

     <div className="relative bottom-130 left-70">
      <img src={aboutimg} alt="" />
     </div>

     <div>
      <Skill />
     </div>

     <div>
     <p className="text-xl text-neutral-100 leading-8 w-130 relative left-60 bottom-190">I’m Rashmika, a passionate and dedicated software engineering student with a deep interest in UI/UX design. My journey in the world of technology started with a curiosity for problem-solving and a fascination with how digital tools can improve user experiences.
      I have honed my skills through hands-on learning and projects that focus on creating intuitive, user-friendly interfaces.My work emphasizes clean code, thoughtful design, and a focus on how users interact with technology, ensuring every project is not only functional but delightful to use.
      Alongside my academic pursuits
      </p>
     </div>


     <div className="relative bottom-130">
     <div className="text-center">
        <span className="bg-neutral-900 text-gray-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"
        >
          Service
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        Transforming Ideas into Reality
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
