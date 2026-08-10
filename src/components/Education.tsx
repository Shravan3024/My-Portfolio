import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';
import './Education.css';

const coursework = [
  "Data Structures & Algorithms",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Discrete Mathematics"
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.h2
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="edu-card glass-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="edu-header">
          <div className="edu-icon-wrapper">
            <GraduationCap size={36} />
          </div>
          <div className="edu-info">
            <h3 className="edu-college">Nutan College of Engineering and Research</h3>
            <p className="edu-degree">B.Tech — Computer Science Engineering (Artificial Intelligence)</p>
          </div>
        </div>

        <div className="edu-meta">
          <div className="edu-meta-item">
            <Calendar size={16} />
            <span>2023 – 2027</span>
          </div>
          <div className="edu-meta-item">
            <Award size={16} />
            <span>Pune, Maharashtra</span>
          </div>
        </div>

        <div className="edu-divider"></div>

        <div className="edu-coursework">
          <div className="coursework-header">
            <BookOpen size={20} />
            <h4>Relevant Coursework</h4>
          </div>
          <div className="coursework-grid">
            {coursework.map((course, index) => (
              <motion.span
                key={course}
                className="coursework-tag glass"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
