import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaFigma, FaPython, FaGithub, FaDocker, FaLinux, FaJava } from "react-icons/fa";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-600 text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-600 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" /> },
    { name: "Linux", icon: <FaLinux className="text-gray-200 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
    // Removed FaReactNative and just kept FaReact for React Native
  ];

  return (
    <div className="text-white p-8 rounded-lg relative bottom-80 right-110">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="group-hover:text-yellow-400 transition duration-300">
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
