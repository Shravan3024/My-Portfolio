import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import CosmicBackground from './CosmicBackground';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Software Developer Engineering Intern (SDE)",
    company: "Prabhim Technologies",
    duration: "2025 - Present",
    current: true,
    responsibilities: [
      "Architecting and developing scalable full-stack web applications using modern frameworks and best practices.",
      "Designing and implementing RESTful APIs and microservices for production-grade backend systems.",
      "Writing clean, maintainable, and well-tested code following SOLID principles and industry standards.",
      "Collaborating with cross-functional teams in agile sprints to ship features end-to-end.",
      "Optimizing application performance, database queries, and deployment pipelines for production workloads."
    ],
    technologies: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "REST APIs", "Git"],
    achievements: "Contributing to core product features serving enterprise clients while gaining hands-on production engineering experience."
  },
  {
    id: 2,
    role: "AI & Software Development Intern",
    company: "Swami Edutechsol Private Limited",
    duration: "Feb 2026 - Aug 2026",
    current: false,
    responsibilities: [
      "Contributed to core AI and software development activities.",
      "Involved in end-to-end application development, implementation, and rigorous testing.",
      "Collaborated effectively with team members for debugging and improving system reliability."
    ],
    technologies: ["Python", "AI", "Software Development", "Testing"],
    achievements: "Successfully completed the internship by contributing to application development and implementation."
  },
  {
    id: 3,
    role: "React Frontend Developer Intern",
    company: "AICTE",
    duration: "2023 - 2024",
    current: false,
    responsibilities: [
      "Developed responsive and dynamic user interfaces using React.js.",
      "Collaborated with backend teams to integrate RESTful APIs seamlessly.",
      "Optimized application performance and improved component reusability."
    ],
    technologies: ["React.js", "Redux", "Tailwind CSS", "REST APIs"],
    achievements: "Successfully deployed the main dashboard reducing load time by 30%."
  },
  {
    id: 4,
    role: "AI Intern",
    company: "Edunet Foundation",
    duration: "2023",
    current: false,
    responsibilities: [
      "Assisted in developing machine learning models for predictive analytics.",
      "Cleaned and preprocessed large datasets using Python and Pandas.",
      "Implemented and tested various algorithms to improve model accuracy."
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    achievements: "Contributed to a model that achieved 92% accuracy in predicting outcomes."
  }
];

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="section-container relative">
      <CosmicBackground />
      <motion.h2 
        className="section-title text-gradient relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="timeline-container" ref={ref}>
        <motion.div 
          className="timeline-line" 
          style={{ scaleY }} 
        />
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot">
              <Briefcase size={20} />
            </div>
            
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-duration text-gradient">{exp.duration}</span>
              </div>
              <h4 className="timeline-company">
                {exp.company}
                {exp.current && <span className="current-badge">● Current</span>}
              </h4>
              
              <div className="timeline-body">
                <ul className="timeline-list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="timeline-footer">
                <div className="timeline-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <p className="timeline-achievement">
                  <strong>Achievement:</strong> {exp.achievements}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
