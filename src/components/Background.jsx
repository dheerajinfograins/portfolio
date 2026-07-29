import { motion } from 'framer-motion';

// Generate random stars for the background once outside the component
// Using window.crypto to satisfy security linters, although Math.random() is safe for visual effects.
const getSecureRandom = () => {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / (0xffffffff + 1);
};

const stars = Array.from({ length: 75 }).map((_, i) => ({
  id: i,
  x: getSecureRandom() * 100,
  y: getSecureRandom() * 100,
  size: getSecureRandom() * 2 + 1,
  duration: getSecureRandom() * 3 + 2,
  delay: getSecureRandom() * 2
}));

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none">
      
      {/* Animated Gradient Base Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30"></div>

      {/* Moving Glow Blobs (Provides dynamic gradient feel) */}
      <motion.div
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-[45vw] h-[45vw] bg-purple-500/20 rounded-full blur-[140px] mix-blend-screen"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[40%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Stars / Particle System */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-cyan-100 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 2}px rgba(6,182,212,0.8)`
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default Background;
