import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaFigma, FaMicrosoft } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandMysql } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiOracle, SiPhp } from "react-icons/si";

export default function Skills() {
  const skills = {
    "Front-end": [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
    ],
    "Back-end": [
      { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
      { name: "PHP", icon: <SiPhp className="text-3xl text-violet-500" /> },
      { name: "Python", icon: <FaPython className="text-3xl text-blue-400" /> },
      { name: "Java", icon: <FaJava className="text-3xl text-red-600" /> },
    ],
    "Banco de Dados": [
      { name: "MySQL", icon: <TbBrandMysql className="text-3xl text-blue-500" /> },
      { name: "Oracle", icon: <SiOracle className="text-3xl text-red-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-600" /> },
    ],
    "Ferramentas": [
      { name: "Git", icon: <FaGitAlt className="text-3xl text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-3xl text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-3xl text-blue-500" /> },
      { name: "Figma", icon: <FaFigma className="text-3xl text-pink-500" /> },
      { name: "Office", icon: <FaMicrosoft className="text-3xl text-red-500" /> },
    ],
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">

      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-[17px] text-center font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-xl flex-col"
                >
                  <span className="text-4xl">{skill.icon}</span>
                  <span className="text-xs font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
