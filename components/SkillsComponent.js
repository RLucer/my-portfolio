// components/SkillsComponent.js
import { FaJs, FaReact, FaNode, FaCss3Alt, FaPhp, FaJava, FaHtml5 } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiMysql, SiMongodb } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';

const frontendSkills = [
  { name: 'HTML5', level: 'Intermedio', icon: <FaHtml5 /> },
  { name: 'CSS3', level: 'Intermedio', icon: <FaCss3Alt /> },
  { name: 'JavaScript', level: 'Avanzado', icon: <FaJs /> },
  { name: 'React.js', level: 'Intermedio', icon: <FaReact /> },
  { name: 'Next.js', level: 'Intermedio', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', level: 'Básico', icon: <FaCss3Alt /> },
  // Agrega más habilidades frontend aquí
];

const backendSkills = [
  { name: 'Node.js', level: 'Avanzado', icon: <FaNode /> },
  { name: 'Express.js', level: 'Intermedio', icon: <SiExpress /> },
  { name: 'PHP', level: 'Avanzado', icon: <FaPhp /> },
  { name: 'Java SE', level: 'Intermedio', icon: <FaJava /> },
  { name: 'MySQL', level: 'Avanzado', icon: <SiMysql /> },
  { name: 'MongoDB', level: 'Intermedio', icon: <SiMongodb /> },
  { name: 'GitHub', level: 'Avanzado', icon: <FiGithub /> },
  // Agrega más habilidades backend aquí
];

const getLevelWidth = (level) => {
  switch (level) {
    case 'Avanzado':
      return 'w-10/12';
    case 'Intermedio':
      return 'w-6/12';
    case 'Básico':
      return 'w-4/12';
    default:
      return 'w-1/12';
  }
};

const getLevelColor = (level) => {
  switch (level) {
    case 'Avanzado':
      return 'bg-green-500 dark:bg-green-400';
    case 'Intermedio':
      return 'bg-yellow-500 dark:bg-yellow-400';
    case 'Básico':
      return 'bg-red-500 dark:bg-red-400';
    default:
      return 'bg-gray-500 dark:bg-gray-400';
  }
};

export default function SkillsComponent() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Insignias</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div data-iframe-width="200" data-iframe-height="270" data-share-badge-id="d500f85a-e985-45f4-98b3-56738179dd4c" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

        <div data-iframe-width="200" data-iframe-height="270" data-share-badge-id="c1750357-f010-43a7-84ae-deb11af02b81" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

        <div data-iframe-width="200" data-iframe-height="270" data-share-badge-id="d500f85a-e985-45f4-98b3-56738179dd4c" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>


      </div>

      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Frontend</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {frontendSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:scale-110"
          >
            <div className="text-4xl mb-4 text-gray-900 dark:text-gray-100">
              {skill.icon || <FaJs />}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{skill.name}</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
              <div
                className={`${getLevelColor(skill.level)} h-4 rounded-full ${getLevelWidth(skill.level)}`}
              ></div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{skill.level}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Backend</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {backendSkills.map((skill, index) => (

          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:scale-110"
          >
            <div className="text-4xl mb-4 text-gray-900 dark:text-gray-100">
              {skill.icon || <FaJs />}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{skill.name}</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
              <div
                className={`${getLevelColor(skill.level)} h-4 rounded-full ${getLevelWidth(skill.level)}`}
              ></div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
