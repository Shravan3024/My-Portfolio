import { motion } from 'framer-motion';
import { BookOpen, Target, Network, Compass } from 'lucide-react';
import CosmicBackground from './CosmicBackground';
import './Research.css';

const researchInterests = [
  "Large Language Models",
  "Agentic AI",
  "Retrieval-Augmented Generation",
  "Computer Vision",
  "Prompt Engineering"
];

const Research = () => {
  return (
    <section id="research" className="section-container relative">
      <CosmicBackground />
      <motion.h2 
        className="section-title text-gradient relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Research & Explorations
      </motion.h2>

      <div className="research-grid">
        <motion.div 
          className="research-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="r-icon"><BookOpen size={28} /></div>
          <h3>Research Interests</h3>
          <ul className="r-list">
            {researchInterests.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="research-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="r-icon"><Target size={28} /></div>
          <h3>Future Goals</h3>
          <p className="r-text">
            My aim is to push the boundaries of multi-agent systems and their capability to orchestrate complex reasoning tasks. I plan to publish findings on efficient context-retrieval techniques in distributed LLM architectures.
          </p>
        </motion.div>

        <motion.div 
          className="research-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="r-icon"><Network size={28} /></div>
          <h3>Technical Explorations</h3>
          <p className="r-text">
            Currently experimenting with fine-tuning smaller, domain-specific models for edge deployment and exploring novel embedding techniques for multimodal RAG pipelines.
          </p>
        </motion.div>

        <motion.div 
          className="research-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="r-icon"><Compass size={28} /></div>
          <h3>Research Notes</h3>
          <p className="r-text">
            Maintaining a comprehensive digital garden of papers read, architectural patterns discovered, and experimental results from personal ML sandbox projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
