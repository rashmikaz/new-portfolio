import React from 'react'
import SocialButtons from './SocialButtons';
import aboutimg from "../assets/main.png"

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
        <div className="w-100 relative right-110">
            <h1  className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">contact</h1>
            <p className="mb-10 text-xl  text-neutral-500 pt-6 pb-6 relative bottom-5">Get in touch with me via social media or send me an email</p>

            <div>
            <SocialButtons />
            </div>

        </div>

        <div className="border-t border-gray-300 w-full mt-10 relative top-15"></div>
        <div className="relative bottom-100 left-80">
            <img src={aboutimg} alt="" />
        </div>
      
    </div>
  )
}

export default Contact
