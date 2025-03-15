import React from 'react';
import aboutimg from "../assets/main.png"
import Skill from './Skills';

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

    </div>
  );
};

export default Aboutsection;
