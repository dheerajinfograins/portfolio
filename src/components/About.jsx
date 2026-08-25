import { useState } from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/images/my/image.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Photo Section (Fades in from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/5 flex justify-center mt-4"
        >
          <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-2xl overflow-visible group">
            {/* Background border accent */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-500 rounded-2xl z-0 transition-all duration-300 group-hover:top-6 group-hover:left-6"></div>

            {/* Image Container */}
            <div className="relative z-10 w-full h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img src={myImage} alt="Dheeraj Gami" className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </motion.div>

        {/* Content Section (Fades in from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-3/5"
        >
          <p className="text-cyan-400 font-medium tracking-wider uppercase mb-2">Discover</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me.</h2>

          {/* Description */}
          <div className="text-slate-400 text-lg leading-relaxed mb-8">
            <p className="mb-4">
              Hi, I'm Dheeraj Gami, a passionate and detail-oriented Full Stack Web Developer.
              With a strong foundation in both frontend and backend technologies, I specialize in building
              robust, scalable, and visually appealing web applications.
            </p>
            <p>
              My goal is to leverage modern technologies like React, Node.js, and MongoDB to solve
              complex problems and deliver seamless user experiences. I am constantly learning and exploring new tools to stay ahead in the tech landscape.
            </p>
          </div>

          {/* Tabs for Education, Experience, Tech Stack */}
          <div className="flex flex-wrap gap-6 mb-6 border-b border-slate-800 pb-4">
            <button type='button'
              onClick={() => setActiveTab('education')}
              className={`font-semibold text-lg transition-colors relative ${activeTab === 'education' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Education
              {activeTab === 'education' && (
                <motion.div layoutId="activeTabIndicator" className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
            <button type='button'
              onClick={() => setActiveTab('experience')}
              className={`font-semibold text-lg transition-colors relative ${activeTab === 'experience' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Experience
              {activeTab === 'experience' && (
                <motion.div layoutId="activeTabIndicator" className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
            <button type='button'
              onClick={() => setActiveTab('tech')}
              className={`font-semibold text-lg transition-colors relative ${activeTab === 'tech' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Tech Stack
              {activeTab === 'tech' && (
                <motion.div layoutId="activeTabIndicator" className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[150px] pt-4">
            {activeTab === 'education' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl">Master of Science</h4>
                  <p className="text-cyan-400 font-medium">DAVV University <span className="text-slate-500 ml-2">| 2018 - 2023</span></p>
                  <p className="text-slate-400 mt-2">Focused on Computer Science and Software Engineering. Built solid foundation in algorithms and data structures.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl">MERN Stack Developer</h4>
                  <p className="text-cyan-400 font-medium">InfoGrains Solution Pvt Ltd<span className="text-slate-500 ml-2">| 2025 - Present</span></p>
                  <p className="text-slate-400 mt-2">Developing scalable web applications, RESTful APIs, and responsive frontends using modern JavaScript frameworks.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'tech' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <ul className="grid grid-cols-2 gap-y-3 ml-5 text-slate-300 list-disc marker:text-cyan-500">
                  <li>React.js / Next.js</li>
                  <li>Node.js / Express</li>
                  <li>MongoDB / Mongoose</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Git / GitHub</li>
                </ul>
              </motion.div>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
