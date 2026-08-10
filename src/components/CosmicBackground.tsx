import { motion } from 'framer-motion';
import './CosmicBackground.css';

const stars = Array.from({ length: 40 });

const CosmicBackground = () => {
  return (
    <div className="cosmic-background">
      <div className="cosmic-container">
        {/* Starfield */}
        {stars.map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="cosmic-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 2 + 1
            }}
            animate={{ 
              opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.6, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Ambient Nebula Glows */}
        <motion.div 
          className="nebula nebula-1"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="nebula nebula-2"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default CosmicBackground;
