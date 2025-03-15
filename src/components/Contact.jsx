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

        <div className="mt-10 max-w-4xl mx-auto p-6 rounded-lg shadow-md relative bottom-90 right-100">
        <h2 className="text-4xl font-semibold mb-15  text-white">Send me an email</h2>
        <form>
          <div className="grid-cols-1 md:grid-cols-2 gap-4 w-120">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-600  text-white rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" className="mt-1 block w-full p-2 border border-gray-600  text-white rounded-md" />
            </div>
          </div>
          <div className="mt-2 relative left-130 bottom-38">
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea className="mt-1 block w-full p-2 border border-gray-600  text-white rounded-md" rows="4"></textarea>
          </div>
          <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md relative left-220 bottom-30">Send email</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
