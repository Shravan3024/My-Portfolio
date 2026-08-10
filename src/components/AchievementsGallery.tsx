import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Award, Star, Image as ImageIcon } from 'lucide-react';
import './AchievementsGallery.css';

// Import TE AI Cup Photos
import teAiCup1 from '../assets/TE AI CUp/Screenshot 2026-08-03 232335.png';
import teAiCup2 from '../assets/TE AI CUp/Screenshot 2026-08-03 232420.png';
import teAiCup3 from '../assets/TE AI CUp/Screenshot 2026-08-03 232434.png';

// Import OdooxVIT Photos
import odooxVit1 from '../assets/OdooxVIT/18cf2e88-6de5-43ec-8fe2-fa6365be7b2d.jpg';
import odooxVit2 from '../assets/OdooxVIT/5d8c9fe2-53f1-4049-9f92-128562071e2f.jpg';

// Import National Level Hackathon Photos
import nationalHack1 from '../assets/National Level hackathon Finalist/74edaf7d-d726-4ab4-8f1f-d689aae7623d.jpg';
import nationalHack2 from '../assets/National Level hackathon Finalist/fa71eb5f-00b1-451c-a56c-449c7b143ee9.jpg';

// Import German Certification
import germanCert from '../assets/german/Screenshot 2026-08-03 233417.png';

// Import Sports Photos
import sports1 from '../assets/sports/Screenshot 2026-08-03 233525.png';
import sports2 from '../assets/sports/Screenshot 2026-08-03 233536.png';
import sports3 from '../assets/sports/e51a8115-ec3c-4e58-9707-4f43ac5c135f.jpg';
import sports4 from '../assets/sports/e91e5141-bae3-4b96-840a-8abb8de3e21d.jpg';

const achievementsData = [
  {
    id: 'national-hackathon',
    title: 'National Level Hackathon Finalist',
    description: 'Secured a finalist position in a prestigious national level hackathon, competing against top teams across the country.',
    photos: [nationalHack1, nationalHack2],
  },
  {
    id: 'te-ai-cup',
    title: 'TE AI Cup',
    description: 'Showcased innovative AI solutions and problem-solving skills at the TE AI Cup.',
    photos: [teAiCup3, teAiCup1, teAiCup2],
  },
  {
    id: 'odooxvit',
    title: 'Odoo x VIT Hackathon',
    description: 'Participated in the Odoo x VIT collaborative hackathon, building scalable business solutions.',
    photos: [odooxVit1, odooxVit2],
  },
  {
    id: 'german',
    title: 'German Language Certification',
    description: 'Achieved certification in the German language, demonstrating strong linguistic capabilities and global readiness.',
    photos: [germanCert],
  },
  {
    id: 'sports',
    title: 'Sports Achievements',
    description: 'Outstanding performance and medals won in various sports competitions, showcasing teamwork and discipline.',
    photos: [sports1, sports2, sports3, sports4],
  }
];

// Reusable Photo Stack Component
const PhotoStack = ({ photos }: { photos: string[] }) => {
  const [order, setOrder] = useState(photos.map((_, i) => i));

  const handleNextPhoto = () => {
    if (photos.length <= 1) return;
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const top = newOrder.shift();
      if (top !== undefined) {
        newOrder.push(top);
      }
      return newOrder;
    });
  };

  return (
    <div className="photo-stack-container" onClick={handleNextPhoto}>
      <AnimatePresence>
        {order.map((photoIndex, visualIndex) => {
          // visualIndex 0 is the top card, 1 is behind it, etc.
          const isTop = visualIndex === 0;
          return (
            <motion.div
              key={photoIndex}
              className="photo-stack-item"
              initial={false}
              animate={{
                top: visualIndex * 15,
                left: visualIndex * 15,
                scale: 1 - visualIndex * 0.05,
                zIndex: photos.length - visualIndex,
                opacity: 1 - visualIndex * 0.2,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                pointerEvents: isTop ? 'auto' : 'none',
              }}
            >
              <img src={photos[photoIndex]} alt="Achievement" />
            </motion.div>
          );
        })}
      </AnimatePresence>
      {photos.length > 1 && (
        <div className="photo-stack-hint">
          <ImageIcon /> {photos.length} Photos - Click to flip
        </div>
      )}
    </div>
  );
};

const AchievementsGallery = () => {
  const backgroundElements = Array.from({ length: 15 });

  return (
    <section id="achievements" className="achievements-gallery">
      {/* Animated Background Elements */}
      <div className="ag-background">
        {backgroundElements.map((_, i) => {
          const icons = [<Trophy size={48} />, <Medal size={48} />, <Award size={48} />, <Star size={48} />];
          const Icon = icons[i % icons.length];
          const topPos = (i / backgroundElements.length) * 90 + Math.random() * 5;
          const duration = 15 + Math.random() * 20;
          const delay = Math.random() * -30;
          return (
            <motion.div
              key={i}
              className="ag-floating-element"
              style={{
                width: 70 + Math.random() * 40,
                height: 70 + Math.random() * 40,
                top: `${topPos}%`,
                left: 0,
                color: `rgba(0, 255, 170, ${Math.random() * 0.25 + 0.1})`
              }}
              animate={{
                x: ['-10vw', '110vw'],
                rotate: [0, 360],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'linear',
                delay: delay,
              }}
            >
              {Icon}
            </motion.div>
          );
        })}
      </div>

      <div className="ag-content">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements & Gallery
        </motion.h2>

        <div className="ag-grid">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="ag-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="ag-card-info">
                <h3 className="ag-card-title">{item.title}</h3>
                <p className="ag-card-desc">{item.description}</p>
              </div>
              <PhotoStack photos={item.photos} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsGallery;
