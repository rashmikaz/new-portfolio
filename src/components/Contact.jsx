import SocialButtons from "./SocialButtons";
import aboutimg from "../assets/main.png";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "../responsive/Contact.css";


const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
      <motion.div
        className="w-100 relative right-85"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1.2,
        }}
      >
        <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl tracking-wide">
          contact
        </h1>
        <p className="mb-10 text-xl text-neutral-500 pt-6 pb-6 relative bottom-5">
          Get in touch with me via social media or shoot me an email directly on{" "}
          <span className="text-1xl font-bold">phrashmika@gmail.com</span>
        </p>

        <div>
          <SocialButtons />
        </div>
      </motion.div>

      <motion.p
        className="text-xl text-neutral-700 max-w-3xl mx-auto relative left-105 bottom-50 w-80"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 1.2,
        }}
      >
        <span className="text-3xl font-bold">
          I use my passion and skills to create digital products and
          experiences.
        </span>
        , a software engineering student with a strong passion for UI/UX design.
        I create user-friendly and visually appealing interfaces, focusing on
        delivering
      </motion.p>

      <motion.img
        src={aboutimg}
        alt=""
        className="absolute bottom-50 left-160 w-140 mx-auto"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: 1.2,
        }}
      />
      <div className="border-t border-gray-300 w-full mt-10 absolute bottom-50"></div>

      <div className="mt-10 max-w-4xl mx-auto p-6 rounded-lg shadow-md absolute right-190 top-160">
        <h2 className="text-4xl font-semibold mb-15  text-white">
          Send me an email
        </h2>
        <form>
          <div className="grid-cols-1 md:grid-cols-2 gap-4 w-120">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-600  text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-600  text-white rounded-md"
              />
            </div>
          </div>
          <div className="mt-2 relative left-130 bottom-38">
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-600  text-white rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md relative left-220 bottom-30"
          >
            Send email
          </button>
        </form>
      </div>

      <div className="absolute top-290">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
