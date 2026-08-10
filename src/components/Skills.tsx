import { motion } from 'framer-motion';
import { Code2, Layout, Server, Brain, Database, Cloud, Wrench } from 'lucide-react';
import { 
  FaJava, FaAws, FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaDocker, FaGithub,
  FaNetworkWired, FaBrain, FaSearch, FaPenFancy, FaLock, FaDatabase, FaLinux
} from 'react-icons/fa';
import { 
  SiPython, SiJavascript, SiTypescript, SiC, SiMysql, SiTensorflow, SiPytorch, 
  SiScikitlearn, SiOpencv, SiNumpy, SiPandas, SiExpress, SiFastapi, SiNextdotjs, 
  SiTailwindcss, SiBootstrap, SiVite, SiMongodb, SiPostgresql, SiSqlite, SiRedis, 
  SiGit, SiVercel, SiRender, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import SkillsBackground from './SkillsBackground';

import './Skills.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={24} />,
    skills: [
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "Java", icon: <FaJava color="#E76F00" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "C", icon: <SiC color="#A8B9CC" /> },
      { name: "SQL", icon: <FaDatabase color="#00758F" /> }
    ]
  },
  {
    title: "AI / Machine Learning",
    icon: <Brain size={24} />,
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
      { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
      { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
      { name: "NumPy", icon: <SiNumpy color="#013243" /> },
      { name: "Pandas", icon: <SiPandas color="#150458" /> },
      { name: "LLMs", icon: <FaBrain color="#bb86fc" /> },
      { name: "RAG", icon: <FaSearch color="#00e5ff" /> },
      { name: "Prompt Eng.", icon: <FaPenFancy color="#f8a5c2" /> }
    ]
  },
  {
    title: "Backend Engineering",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "REST APIs", icon: <FaNetworkWired color="#61DAFB" /> },
      { name: "Auth", icon: <FaLock color="#FFC107" /> }
    ]
  },
  {
    title: "Frontend Development",
    icon: <Layout size={24} />,
    skills: [
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      { name: "Vite", icon: <SiVite color="#646CFF" /> }
    ]
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "SQLite", icon: <SiSqlite color="#003B57" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={24} />,
    skills: [
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
      { name: "Render", icon: <SiRender color="#46E3B7" /> }
    ]
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={24} />,
    skills: [
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Linux", icon: <FaLinux color="#FCC624" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container relative">
      <SkillsBackground />
      <motion.h2 
        className="section-title text-gradient relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Expertise
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            className="skill-category glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="category-header">
              <div className="category-icon">
                {category.icon}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="category-skills">
              {category.skills.map((skill) => (
                <span key={skill.name} className="skill-badge">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
