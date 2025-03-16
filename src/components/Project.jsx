import portfolioimg from "../assets/portfolio.jpeg";
import coffeshopimg from "../assets/coffe shop.png";
import zenuiimg from "../assets/zenUI.png";
import bigburgerimg from "../assets/big burger.jpeg";
import smsimg from "../assets/sms-react.jpeg";
import fximg from "../assets/sms-fx.jpeg"
import libraryimg from "../assets/library.jpeg"
import Footer from "./Footer";

const project = [
  {
    title: "Proftfolio, html, css and js",
    description: "This is my first portfolio, I did this for my coursework",
    tags: ["HTML", "JavaScript", "CSS"],
    image: portfolioimg,
    githubLink: "https://github.com/rashmikaz/my_profile",  
  },
  {
    title: "Landing page for coffee shop",
    description: "This project is a responsive main page for a coffee shop, built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: coffeshopimg,
    githubLink: "https://github.com/rashmikaz/coffee--shop-home-view",  
  },
  {
    title: "ZenUI project for software company",
    description: "A modern, responsive, and intuitive web solution that turns creative ideas into seamless user experiences",
    tags: ["React", "JavaScript", "tailwindCSS"],
    image: zenuiimg,
    githubLink: "https://github.com/rashmikaz/ZenUI",
  },
  {
    title: "Big burger Restaurant",
    description: "This project is a simple yet engaging website built to showcase a burger restaurant menu.",
    tags: ["HTML", "JavaScript", "CSS"],
    image: bigburgerimg,
    githubLink: "https://github.com/rashmikaz/big-burger-restaurant", 
  },
  {
    title: "Student Management System",
    description: "This is a project done for my React project in campus as a final project",
    tags: ["React", "JavaScript", "tailwindCSS"],
    image: smsimg,
    githubLink: "https://github.com/rashmikaz/student-management-react", 
  },
  {
    title: "Student Management System FX",
    description: "My first project and java fx and mysql",
    tags: ["javafx", "MYSQL"],
    image: fximg,
    githubLink: "https://github.com/rashmikaz/my_student_management_system", 
  },
  {
    title: "Library Management System FX",
    description: "This Library Management System is a Java-based application designed to streamline library operations. The project features a user-friendly UI developed with JavaFX and leverages Hibernate ORM for efficient database interaction.",
    tags: ["javafx", "MYSQL","Hibernate"],
    image: libraryimg,
    githubLink: "https://github.com/rashmikaz/new_library_management_system", 
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
              <a href={project.githubLink} target="_blank" className="text-white-400 font-medium">
                View on GitHub → 
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
