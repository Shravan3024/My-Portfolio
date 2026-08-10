import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import bitmojiImg from '../assets/bitmoji.png';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error submitting form", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="contact-wrapper">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-avatar">
            <img src={bitmojiImg} alt="Shravan" className="contact-bitmoji" />
          </div>
          <h2 className="contact-title">Let's Build Something <span className="text-gradient">Amazing</span> Together.</h2>

          <div className="contact-methods">
            <a href="mailto:navaleshravan7@gmail.com" className="contact-method-link glass">
              <Mail className="c-icon text-gradient" />
              <span>Reach out via Email</span>
            </a>

            <a href="https://github.com/Shravan3024" target="_blank" rel="noreferrer" className="contact-method-link glass">
              <FaGithub className="c-icon text-gradient" />
              <span>Explore my GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/shravan-navale-29b5ba254/" target="_blank" rel="noreferrer" className="contact-method-link glass">
              <FaLinkedin className="c-icon text-gradient" />
              <span>Connect on LinkedIn</span>
            </a>

            <div className="contact-method-link glass no-hover">
              <MapPin className="c-icon text-gradient" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container glass-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">

            {/* Replace YOUR_ACCESS_KEY_HERE with your actual access key from web3forms.com */}
            <input type="hidden" name="access_key" value="wqwertyuiop" />
            <input type="hidden" name="subject" value="New Contact from Portfolio!" />

            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group">
              <textarea id="message" name="message" required placeholder=" " rows={5}></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="submit-btn text-gradient-bg" disabled={status === 'submitting'}>
              {status === 'idle' && <>Send Message <Send size={18} /></>}
              {status === 'submitting' && 'Sending...'}
              {status === 'success' && <>Sent Successfully! <CheckCircle size={18} /></>}
              {status === 'error' && <>Failed to Send <AlertCircle size={18} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
