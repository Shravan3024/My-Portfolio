import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text text-gradient">SN</span>
            <p className="footer-quote">"Building intelligent systems that create real-world impact."</p>
          </div>
          
          <div className="footer-status">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Available for:</span>
            </div>
            <ul className="status-list">
              <li>AI Engineering</li>
              <li>Software Engineering</li>
              <li>Research</li>
              <li>Internships</li>
              <li>Open Source</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shravan Shivaji Navale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
