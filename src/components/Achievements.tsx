import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import CosmicBackground from './CosmicBackground';
import './Achievements.css';

const achievements = [
  "National Level Hackathon Finalist",
  "Odoo x VIT Finalist",
  "TE AI CUP Finalist",
  "IEEE Paper Submission",
  "German Language Certification (B1)",
  "Academic Achievements & Excellence",
  "Sports Leadership",
  "Technical Community Leadership"
];

const certifications = [
  "Google AI",
  "IBM",
  "AICTE",
  "Edunet",
  "AWS",
  "Deloitte",
  "Gemini Certification",
  "German Language"
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container relative">
      <CosmicBackground />
      <motion.h2 
        className="section-title text-gradient relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Achievements & Certifications
      </motion.h2>

      <div className="ac-container">
        <div className="ac-column">
          <div className="ac-header">
            <Trophy className="ac-icon text-gradient" size={32} />
            <h3>Key Achievements</h3>
          </div>
          <div className="ac-list">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="ac-card glass-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="ac-text">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="ac-column">
          <div className="ac-header">
            <Award className="ac-icon text-gradient" size={32} />
            <h3>Certifications</h3>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="cert-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="cert-text">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
