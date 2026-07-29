import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 z-[9999] origin-left shadow-[0_0_10px_rgba(6,182,212,0.8)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
