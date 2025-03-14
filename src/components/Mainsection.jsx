import React from 'react'
import mainimg from "../assets/new main.png"



const Mainsection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">


     <div className="w-100 relative right-110 top-30">
     <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">
        desinger
      </h1>
      <p className="text-lg text-center text-neutral-500 max-w-4xl">UI-focused product designer specializing in design systems and user interface design.</p>
     </div>

     <div className="w-100 relative left-90 bottom-5">
     <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">
        developer
      </h1>
      <p className="text-lg text-center text-neutral-500 max-w-4xl">Frontend and Backend developer who write clean,elegant and efficient code.</p>
     </div>

     <div className="relative bottom-80">
        <img src={mainimg} alt="" />
     </div>
     <div className="border-t border-gray-300 w-full mt-10 relative bottom-90"></div>
    </div>
  )
}

export default Mainsection 
