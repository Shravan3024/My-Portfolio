import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiCplusplus, SiTensorflow } from 'react-icons/si';
import './SkillsBackground.css';

const codeSnippets = [
  "const [state, setState] = useState()",
  "def analyze_data(df):",
  "SELECT * FROM users",
  "docker-compose up -d",
  "try { await fetchData(); }",
  "while (true) { focus(); }"
];

const icons = [
  <FaReact />, <FaNodeJs />, <FaPython />, <FaJava />, <FaDocker />,
  <SiTypescript />, <SiJavascript />, <SiCplusplus />, <SiTensorflow />
];

// Create a larger array for more density
const floatingElements = Array.from({ length: 30 }).map(() => {
  return icons[Math.floor(Math.random() * icons.length)];
});

const SkillsBackground = () => {
  return (
    <div className="skills-background">
      <div className="zero-gravity-container">
        {/* Render flowing icons */}
        {floatingElements.map((Icon, i) => {
          const goRight = i % 2 === 0;
          const topPos = (i / floatingElements.length) * 95 + Math.random() * 3;
          const duration = 18 + Math.random() * 20;
          const delay = Math.random() * -25;
          return (
            <motion.div
              key={`icon-${i}`}
              className="floating-icon"
              style={{
                top: `${topPos}%`,
                left: 0,
                fontSize: `${Math.random() * 3 + 3}rem`,
                color: Math.random() > 0.5 ? 'var(--accent-blue)' : 'var(--accent-purple)',
                textShadow: '0 0 15px currentColor, 0 0 30px currentColor'
              }}
              animate={{ 
                x: goRight ? ['-10vw', '110vw'] : ['110vw', '-10vw'],
                opacity: [0.15, 0.4, 0.15],
                rotate: goRight ? [0, 360] : [360, 0]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
              }}
            >
              {Icon}
            </motion.div>
          );
        })}

        {/* Render flowing code snippets */}
        {codeSnippets.map((code, i) => {
          const goRight = i % 2 === 0;
          const topPos = 10 + (i / codeSnippets.length) * 80;
          const duration = 25 + Math.random() * 15;
          const delay = Math.random() * -20;
          return (
            <motion.div
              key={`code-${i}`}
              className="floating-code"
              style={{
                top: `${topPos}%`,
                left: 0,
                fontSize: '1.1rem',
                padding: '8px 16px'
              }}
              animate={{ 
                x: goRight ? ['-15vw', '110vw'] : ['110vw', '-15vw'],
                opacity: [0.08, 0.3, 0.08],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
              }}
            >
              {code}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsBackground;
