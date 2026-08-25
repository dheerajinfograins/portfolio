import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Earth from '../canvas/Earth';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen mx-auto flex items-center px-6 md:px-12 pt-20 max-w-7xl overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full z-10 gap-8">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center w-full md:w-1/2 pb-20 md:pb-0"
        >
          <p className="text-cyan-400 font-medium tracking-wider uppercase mb-3 text-lg md:text-xl">
            Hello I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white leading-tight">
            Dheeraj Gami
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-300 mb-10 h-12 md:h-16 flex items-center">
            A{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={[' MERN Stack Developer', 'Frontend Developer', 'Backend Developer']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Hire Me
            </a>
            <a href="/Dheeraj_Gami_Modern_Professional_Resume_260710_114722 (1)" download="Dheeraj_Gami_Modern_Professional_Resume_260710_114722 (1)" className="px-8 py-3 rounded-full border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-all duration-300">
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: 3D Earth */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 h-[450px] md:h-[700px] flex items-center justify-center relative mt-10 md:mt-0"
        >
          <Earth />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
