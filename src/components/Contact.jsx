import React from 'react'
import SocialButtons from './SocialButtons';

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
        <div className="w-100 relative right-110">
            <h1  className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">contact</h1>
            <p className="text-xl  text-neutral-500 pt-6 pb-6">Get in touch with me via social media or send me an email</p>

            <div>
            <SocialButtons />
            </div>

        </div>
      
    </div>
  )
}

export default Contact
