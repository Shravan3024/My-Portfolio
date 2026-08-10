import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import lexilearnImg from '../assets/lexilearn.png';
import empayImg from '../assets/empay.png';
import msbsvetImg from '../assets/msbsvet.png';
import weatherImg from '../assets/weather.png';
import codesenseImg from '../assets/codesense.png';
import papershredderImg from '../assets/papershredder.png';
import canteenImg from '../assets/canteen.png';
import genhireImg from '../assets/genhire.png';
import manastraImg from '../assets/manastra.png';
import ProjectsBackground from './ProjectsBackground';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Lexilearn AI",
    shortDesc: "AI Powered Learning Platform",
    techStack: ["Google Gemini", "Next.js", "SQLite"],
    problem: "Traditional learning platforms lack personalized, adaptive simplification of complex texts for students of different comprehension levels.",
    solution: "An AI-powered portal that leverages Google Gemini to dynamically simplify texts based on user roles and tracking progress.",
    architecture: "Role-based architecture with Next.js frontend, SQLite database, and Gemini API integration for real-time text processing.",
    features: ["AI Text Simplification", "Role Based Portal", "Assessments", "Progress Tracking"],
    color: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
    hoverColor: "#FF6B6B",
    category: "AI/ML",
    image: lexilearnImg
  },
  {
    id: 2,
    title: "EmPay HRMS",
    shortDesc: "Smart HR Management",
    techStack: ["React", "Node.js", "MongoDB"],
    problem: "Organizations struggle with manual attendance, leave management, and payroll processing, leading to inefficiencies.",
    solution: "A smart HRMS platform that automates Attendance, Leave Management, and Payroll to help organizations work efficiently.",
    architecture: "Full-stack web application with a responsive dashboard for employees and HR admins.",
    features: ["Attendance Tracking", "Leave Management", "Payroll Automation", "HR Dashboard"],
    color: "linear-gradient(135deg, #4facfe, #00f2fe)",
    hoverColor: "#4facfe",
    category: "Full Stack",
    image: empayImg
  },
  {
    id: 3,
    title: "CRPF Canteen System",
    shortDesc: "Enterprise Management Dashboard",
    techStack: ["PostgreSQL", "Redis", "Docker"],
    problem: "Inefficient manual inventory and order management in the CRPF canteens leading to discrepancies and delays.",
    solution: "A containerized, full-scale enterprise management system featuring distinct portals for soldiers, kitchen staff, and admins.",
    architecture: "Dockerized microservices utilizing PostgreSQL for persistent storage and Redis for high-speed caching of live orders.",
    features: ["Kitchen Dashboard", "Inventory", "Soldier Portal", "Admin Dashboard"],
    color: "linear-gradient(135deg, #43e97b, #38f9d7)",
    hoverColor: "#43e97b",
    category: "Full Stack",
    image: canteenImg
  },
  {
    id: 4,
    title: "Facial Emotion Recognition",
    shortDesc: "Real-time CV Detection",
    techStack: ["TensorFlow", "OpenCV", "Streamlit"],
    problem: "Need for accurate, real-time emotion detection for sentiment analysis in user-facing applications.",
    solution: "A deep learning model trained on facial datasets, deployed via Streamlit for live webcam inference.",
    architecture: "Convolutional Neural Network (CNN) built with TensorFlow/Keras, integrated with OpenCV for frame processing.",
    features: ["Deep Learning", "Computer Vision", "Real-time Detection"],
    color: "linear-gradient(135deg, #fa709a, #fee140)",
    hoverColor: "#fa709a",
    category: "AI/ML",
    image: ""
  },
  {
    id: 5,
    title: "PaperShredder AI",
    shortDesc: "AI Academic Peer Review Platform",
    techStack: ["Gemini API", "ElevenLabs", "Snowflake", "React 19"],
    problem: "Academic peer review is slow, biased, and fails to catch methodological flaws or logical fallacies in research papers.",
    solution: "An AI platform that ingests research PDFs, extracts core claims, cross-references them against known data, and delivers a brutally honest narrated 'Savage Peer Review'.",
    architecture: "React 19 + React Router v7 frontend with server-side Gemini multimodal extraction, Snowflake data persistence, and ElevenLabs text-to-speech narration.",
    features: ["Gemini Multimodal Analysis", "Contradiction Matrix", "Savage Peer Review", "Voice Agent (ElevenLabs)", "SHRED Token Economy"],
    color: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    hoverColor: "#a18cd1",
    category: "AI/ML",
    image: papershredderImg
  },
  {
    id: 6,
    title: "MSBSVET Portal",
    shortDesc: "Vocational Education Platform",
    techStack: ["React", "Node.js", "Express"],
    problem: "Students struggle to navigate the complex MSBSVET website to find course details and guidance.",
    solution: "A modernized platform with an integrated AI Chatbot (Kaushalya) to assist students with navigation and queries.",
    architecture: "Web platform integrating conversational AI for real-time student support.",
    features: ["AI Chatbot", "Bilingual Support", "Course Guidance"],
    color: "linear-gradient(135deg, #f6d365, #fda085)",
    hoverColor: "#f6d365",
    category: "Full Stack",
    image: msbsvetImg
  },
  {
    id: 7,
    title: "CodeSense AI",
    shortDesc: "AI-Powered Code Review Platform",
    techStack: ["React Router v7", "TypeScript", "Llama 3.3", "Groq API"],
    problem: "Catching security flaws, performance issues, and subtle bugs before they reach production requires significant manual review effort.",
    solution: "An automated code review platform that integrates with GitHub to provide deep code analysis using state-of-the-art LLMs via Groq.",
    architecture: "Frontend built with React Router v7 and TypeScript, integrating Groq SDK for ultra-fast Llama 3.3 inference and Octokit for GitHub data.",
    features: ["Deep Code Analysis", "Ultra-Fast Inference", "GitHub PR Integration", "Comprehensive Dashboards"],
    color: "linear-gradient(135deg, #84fab0, #8fd3f4)",
    hoverColor: "#84fab0",
    category: "AI/ML",
    image: codesenseImg
  },
  {
    id: 8,
    title: "Weather Application",
    shortDesc: "Dynamic Weather Dashboard",
    techStack: ["JavaScript", "REST APIs", "CSS3"],
    problem: "Need for a fast, responsive, and beautiful interface for checking global weather data.",
    solution: "A sleek frontend application integrating third-party weather APIs to display real-time data and forecasts.",
    architecture: "Vanilla JS / React frontend fetching data asynchronously from OpenWeatherMap API.",
    features: ["Responsive Dashboard", "Real-time Data", "Location Search"],
    color: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
    hoverColor: "#e0c3fc",
    category: "Frontend",
    image: weatherImg
  },
  {
    id: 9,
    title: "AI Hiring System",
    shortDesc: "Enterprise Recruitment OS",
    techStack: ["Next.js", "Zustand", "Node.js", "Gemini Pro"],
    problem: "Recruitment is slow, biased, and inefficient — manually evaluating candidates for high-stakes enterprise roles is resource-intensive.",
    solution: "A mission-critical orchestration platform delivering candidate scoring, real-time proctored assessments, and automated governance workflows.",
    architecture: "Decoupled monorepo with Next.js 14 frontend, TanStack Query polling, Node.js + PostgreSQL backend, and Google Gemini Pro integration.",
    features: ["Hybrid AI Assessment", "Real-Time Proctoring", "Multi-Stakeholder Dashboards", "Immutable Audit Logs"],
    color: "linear-gradient(135deg, #00f2fe, #4facfe)",
    hoverColor: "#00f2fe",
    category: "AI/ML",
    image: genhireImg
  },
  {
    id: 10,
    title: "Manastra AI",
    shortDesc: "AI Powered Global Talent Engine",
    techStack: ["AI/ML", "NLP", "Python", "React"],
    problem: "Modern recruitment is slow, biased, and inefficient — manually screening candidates across global talent pools is resource-intensive and error-prone.",
    solution: "An AI-powered talent research and recommendation engine that uses NLP to extract skills and experience from resumes, scores candidates against job requirements, and ranks them for recruiters.",
    architecture: "NLP pipeline extracts candidate features (skills, education, certifications, experience) from resumes and profiles. ML algorithms generate compatibility scores and rank candidates. Workforce analytics layer provides global talent insights.",
    features: ["AI Resume Parsing", "Candidate Compatibility Scoring", "Skill Trend Analysis", "Workforce Analytics", "Bias Reduction"],
    color: "linear-gradient(135deg, #667eea, #764ba2)",
    hoverColor: "#667eea",
    category: "AI/ML",
    image: manastraImg
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="section-container relative">
      <ProjectsBackground />
      <motion.h2
        className="section-title text-gradient relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card glass-card"
            style={{ '--hover-color': project.hoverColor } as React.CSSProperties}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover="hover"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-placeholder" style={{ background: project.color }}>
              {project.image ? (
                <div
                  className="project-hover-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              ) : (
                <h3 className="project-image-title">{project.title.substring(0, 2)}</h3>
              )}
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-short-desc">{project.shortDesc}</p>

              <div className="project-tech">
                {project.techStack.map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <div className="project-links">
                  <a href="#" className="p-link"><FaGithub size={18} /> Code</a>
                  <a href="#" className="p-link"><ExternalLink size={18} /> Live Demo</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > 6 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', position: 'relative', zIndex: 10 }}>
          <button 
            className="cta-secondary glass" 
            onClick={() => setShowAll(!showAll)}
            style={{ whiteSpace: 'nowrap' }}
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content glass"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className="modal-header" style={{ background: selectedProject.color }}>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.shortDesc}</p>
              </div>

              <div className="modal-body">
                {selectedProject.image && (
                  <div className="modal-image-container">
                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-project-image" />
                  </div>
                )}
                <div className="modal-section">
                  <h3>Overview</h3>
                  <p><strong>Problem Statement:</strong> {selectedProject.problem}</p>
                  <p><strong>Solution:</strong> {selectedProject.solution}</p>
                </div>

                <div className="modal-section">
                  <h3>Architecture & Tech Stack</h3>
                  <p>{selectedProject.architecture}</p>
                  <div className="modal-tags">
                    {selectedProject.techStack.map((tech: string) => (
                      <span key={tech} className="modal-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature: string) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <a href="#" className="cta-primary glass">View GitHub <FaGithub size={18} /></a>
                  <a href="#" className="cta-primary glass">Live Demo <ExternalLink size={18} /></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
