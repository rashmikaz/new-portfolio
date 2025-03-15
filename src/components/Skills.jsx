import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaFigma, FaPython, FaGithub, FaDocker, FaLinux, FaJava } from "react-icons/fa";
import "animate.css";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-gray-300 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-gray-300 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-gray-300 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-gray-300 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-gray-300 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-gray-300 text-4xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-300 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-gray-300 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-gray-300 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-gray-300 text-4xl" /> },
    { name: "Linux", icon: <FaLinux className="text-gray-300 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-gray-300 text-4xl" /> },
  ];

  return (
    <div className=" text-gray-300 p-8 rounded-lg shadow-lg relative bottom-120 right-80">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="group-hover:text-white transition duration-300 animate__animated animate__fadeInUp animate__delay-0.2s">
              {skill.icon}
            </div>
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
