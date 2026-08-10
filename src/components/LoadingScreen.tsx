import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import animatedGif from '../assets/shravan_navale_technical_world_animated.gif';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const greeting = "Hi, my name is Shravan. Welcome to my technical world.";

  useEffect(() => {
    const duration = 3000; // 3 seconds loading
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 800); // Wait a little after reaching 100% before fading out
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loading-marquee-container">
        <div className="loading-marquee">
          <span>Software Developer &nbsp; • &nbsp; AI Engineer &nbsp; • &nbsp; Full Stack Developer &nbsp; • &nbsp; Machine Learning &nbsp; • &nbsp; Software Developer &nbsp; • &nbsp; AI Engineer &nbsp; • &nbsp;</span>
        </div>
        <div className="loading-marquee marquee-reverse" style={{ marginTop: '50px' }}>
          <span>Deep Learning &nbsp; • &nbsp; Backend Systems &nbsp; • &nbsp; Computer Vision &nbsp; • &nbsp; Web Development &nbsp; • &nbsp; Deep Learning &nbsp; • &nbsp; Backend Systems &nbsp; • &nbsp;</span>
        </div>
      </div>

      <div className="loading-content-split">
        <div className="loading-left">
          <div className="loading-greeting-large">
            {greeting.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.03 + 0.8 }}
              >
                {char}
              </motion.span>
            ))}
            <span className="loading-cursor"></span>
          </div>
        </div>

        <div className="loading-right">
          <motion.div 
            className="loading-avatar-large"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={animatedGif} alt="Shravan Waving" />
          </motion.div>
        </div>
      </div>

      <div className="loading-bottom">
        <div className="loading-bar-container">
          <div className="loading-bar-track">
            <motion.div 
              className="loading-bar-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loading-percentage">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
