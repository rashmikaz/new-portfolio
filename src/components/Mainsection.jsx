import React from 'react'
import { Link } from 'react-router-dom';
import mainimg from "../assets/new main.png"


const Mainsection = () => {


  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">

     <div className="w-100 relative right-110 top-0">
     <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">
        desinger
      </h1>
      <p className="text-lg text-center text-neutral-500 max-w-4xl">UI-focused product designer specializing in design systems and user interface design.</p>
     </div>

     <div className="w-100 relative left-90 bottom-35">
     <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">
        developer
      </h1>
      <p className="text-lg text-center text-neutral-500 max-w-4xl">Frontend and Backend developer who write clean, elegant, and efficient code.</p>
     </div>

     <div className="relative left-100 bottom-11">
     <p className="text-xl text-neutral-700 max-w-4xl w-100">
     Hello, I'm <span className="text-7xl font-bold">Rashmika</span>, a software engineering student with a strong passion for UI/UX design. I enjoy creating user-friendly and visually appealing interfaces, focusing on delivering seamless experiences.
    </p>
     </div>

     <div className="relative bottom-150">
        <img src={mainimg} alt="" className="w-140" />
     </div>
     <div className="border-t border-gray-300 w-full mt-10 relative bottom-160"></div>

     
     <Link to="/about" className="animate-bounce mt-10 relative bottom-180 left-90">
        <svg className="size-9 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m-7.5-7.5l7.5 7.5-7.5 7.5" />
        </svg>
      </Link>
     
    </div>
  )
}

export default Mainsection
