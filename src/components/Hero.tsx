import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Download, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';
import NeuralNetwork from './NeuralNetwork';
import './Hero.css';

const roles = [
  "Building AI Products...",
  "Building Intelligent Systems...",
  "Engineering Modern Software...",
  "Researching AI...",
  "Creating Real World Solutions..."
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <NeuralNetwork />
        </Canvas>
        <div className="aurora-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-main-layout">
          <div className="hero-text-side">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title">
                Shravan Shivaji Navale
              </h1>
              <h2 className="hero-subtitle">
                AI Engineer <span className="text-gradient">|</span> Full Stack Developer <span className="text-gradient">|</span> ML Engineer <span className="text-gradient">|</span> Deep Learning Engineer
              </h2>
            </motion.div>

            <motion.div 
              className="typing-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="typing-text text-gradient" key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </span>
            </motion.div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Computer Science Engineering (Artificial Intelligence) undergraduate passionate about AI Engineering, Full Stack Development, Backend Systems, Computer Vision, Large Language Models, and building scalable software that solves real-world problems.
            </motion.p>

            <motion.div 
              className="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <button className="cta-primary glass" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore My Work <ArrowRight size={18} />
              </button>
              
              <a href="/resume.pdf" download="Shravan_Navale_Resume.pdf" className="cta-secondary glass">
                Download Resume <Download size={18} />
              </a>
              
              <div className="social-links">
                <a href="https://github.com/Shravan3024" target="_blank" rel="noreferrer" className="social-btn glass" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/shravan-navale-29b5ba254/" target="_blank" rel="noreferrer" className="social-btn glass" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="#contact" className="social-btn glass" aria-label="Contact">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-side"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="hero-image-wrapper glass-card">
              <img src={profileImg} alt="Shravan Shivaji Navale" className="hero-profile-img" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="quick-stats glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="stat-item">
            <span className="stat-value text-gradient">B.Tech AI</span>
            <span className="stat-label">2027 Graduate</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value text-gradient">3</span>
            <span className="stat-label">Internships</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value text-gradient">8+</span>
            <span className="stat-label">Major Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value text-gradient">3x</span>
            <span className="stat-label">Hackathon Finalist</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
