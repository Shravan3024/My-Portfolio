import { motion } from 'framer-motion';
import { Bot, Laptop, Cpu, Server, Database, Network } from 'lucide-react';
import './ProjectsBackground.css';

const baseTechElements = [
  <Bot size={120} />, <Laptop size={120} />, <Cpu size={120} />, 
  <Server size={120} />, <Database size={120} />, <Network size={120} />
];

// Duplicate elements to create a denser, more attractive background
const techElements = [...baseTechElements, ...baseTechElements, ...baseTechElements];

const dataNodes = Array.from({ length: 25 });

const ProjectsBackground = () => {
  return (
    <div className="projects-background">
      <div className="tech-elements-container">
        {/* Floating tech icons */}
        {techElements.map((Element, i) => (
          <motion.div
            key={`tech-${i}`}
            className="floating-tech"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: `hsl(${Math.random() * 60 + 180}, 80%, 60%)`, // Cyan to blue range
              textShadow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor' // Neon glow
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.4, 0.8]
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {Element}
          </motion.div>
        ))}

        {/* Data nodes (glowing dots representing data transfer) */}
        {dataNodes.map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="data-node"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Large subtle glowing orbs */}
        <motion.div 
          className="glow-orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="glow-orb orb-2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default ProjectsBackground;
