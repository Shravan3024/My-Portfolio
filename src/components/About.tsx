import { motion } from 'framer-motion';
import './About.css';
import bitmojiImg from '../assets/bitmoji.png';
import logoImg from '../assets/logo.png';

const About = () => {
  return (
    <section id="about" className="section-container about-section-relative">
      <img src={logoImg} alt="Background Logo" className="about-bg-logo" />
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper glass-card">
            <img src={bitmojiImg} alt="Shravan Shivaji Navale" className="profile-img" />
          </div>
        </motion.div>

        <motion.div 
          className="about-text-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="story-title">The Engineering Philosophy</h3>
          <p className="story-text">
            I believe that great software is not just about writing code—it's about understanding the problem deeply and engineering a solution that scales. As an AI Product Engineer, my mission is to bridge the gap between cutting-edge Artificial Intelligence research and robust, user-centric enterprise applications.
          </p>
          <p className="story-text">
            My vision is to architect intelligent systems that create measurable real-world impact. Whether it's optimizing backend infrastructure or building agentic AI workflows, I focus on performance, security, and exceptional user experience.
          </p>

          <div className="info-grid">
            <div className="info-card glass-card">
              <span className="info-label">Name</span>
              <span className="info-value">Shravan Shivaji Navale</span>
            </div>
            <div className="info-card glass-card">
              <span className="info-label">Location</span>
              <span className="info-value">Pune, Maharashtra</span>
            </div>
            <div className="info-card glass-card">
              <span className="info-label">Education</span>
              <span className="info-value">B.Tech CSE (AI)</span>
            </div>
            <div className="info-card glass-card">
              <span className="info-label">Graduation</span>
              <span className="info-value">2027</span>
            </div>
          </div>

          <div className="learning-section">
            <h4 className="learning-title">What I'm Currently Learning</h4>
            <div className="learning-tags">
              {['Advanced RAG', 'AI Agents', 'Multi-Agent Systems', 'AWS', 'System Design'].map((tag, index) => (
                <span key={index} className="learning-tag glass">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
