import portfolioimg from "../assets/portfolio.jpeg"
import coffeshopimg from "../assets/coffe shop.png"
import zenuiimg from "../assets/zenUI.png"
import bigburgerimg from "../assets/big burger.jpeg"
import smsimg from "../assets/sms-react.jpeg"
import Footer from "./Footer";
const project = [
    {
      
      title: "Proftfolio,html,css and js",
      description: "this is my first portfolio,i did this for my coursework",
      tags: ["HTML", "Javacript", "CSS"],
      image: portfolioimg, 
    },
    {
      
      title: "Landing page for coffe shop",
      description: "his project is a responsive main page for a coffee shop, built using HTML, CSS, and JavaScript.",
      tags: ["HTML", "Javacript", "CSS"],
      image: coffeshopimg, 
    },
    {
      
      title: "ZenUI project for software company",
      description: "a modern, responsive, and intuitive web solution that turns creative ideas into seamless user experiences",
      tags: ["React", "Javacript", "tailwindCSS"],
      image: zenuiimg, 
    },
    {
      
      title: "Big burger Restaurant",
      description: "This project is a simple yet engaging website built to showcase a burger restaurant menu.",
      tags: ["HTML", "Javacript", "CSS"],
      image: bigburgerimg, 
    },
    {
      title: "Student Management System",
      description: "This is project done for my react project in campus as a final project ",
      tags: ["React", "JavaScript", "tailwindCSS"],
      image: smsimg,
    },
    {
      
      title: "Proftfolio,html,css and js",
      description: "this is my first portfolio,i did this for my coursework",
      tags: ["HTML", "Javacript", "CSS"],
      image: portfolioimg, 
    },
    {
      
      title: "Proftfolio,html,css and js",
      description: "this is my first portfolio,i did this for my coursework",
      tags: ["HTML", "Javacript", "CSS"],
      image: portfolioimg, 
    },
    {
      
      title: "Proftfolio,html,css and js",
      description: "this is my first portfolio,i did this for my coursework",
      tags: ["HTML", "Javacript", "CSS"],
      image: portfolioimg, 
    },
    {
      
      title: "Proftfolio,html,css and js",
      description: "this is my first portfolio,i did this for my coursework",
      tags: ["HTML", "Javacript", "CSS"],
      image: portfolioimg, 
    },


  ];
  
  export default function ProjectCards() {
    return (
      <div className="container mx-auto px-4 py-12 text-white tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">My Works</h2>
        <p className="text-center text-neutral-400 mb-8">A collection of projects I've worked on.</p>
        <div className="flex flex-wrap justify-center">
          {project.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                
                <p className="text-sm font-semibold text-white-400">{project.category}</p>
                <h3 className="text-xl font-bold my-2 text-white">{project.title}</h3>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-400">{tag}</span>
                  ))}
                </div>
                <a href="#" className="text-white-400 font-medium">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
  