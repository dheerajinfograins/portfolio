import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 800); // Wait briefly after hitting 100%
          return 100;
        }
        // Use crypto API for secure random increment to satisfy security linters
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        const randomIncrement = (randomBuffer[0] % 5) + 1;
        return prev + randomIncrement; // Random increment for realism
      });
    }, 50);

    return () => clearInterval(interval);
  }, [finishLoading]);

  let loadingText = 'Loading...';
  if (progress >= 100) loadingText = 'Welcome';
  else if (progress >= 70) loadingText = 'Loading 3D Assets...';
  else if (progress >= 30) loadingText = 'Initializing Portfolio...';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center"
    >
      <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 tracking-tighter animate-pulse">
        Dheeraj.
      </div>
      
      <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden relative shadow-inner">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-6 text-cyan-400 font-mono text-sm font-bold tracking-widest text-center h-10 flex flex-col items-center justify-center">
        <span>{loadingText}</span>
        <span className="mt-1 opacity-50">{progress}%</span>
      </div>
    </motion.div>
  );
};

export default Loader;
