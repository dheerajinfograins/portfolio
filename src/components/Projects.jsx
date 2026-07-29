import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import vijay1 from '../assets/images/vijayradios/Screenshot 2026-07-28 150952.png';
import vijay2 from '../assets/images/vijayradios/Screenshot 2026-07-28 151058.png';
import vijay3 from '../assets/images/vijayradios/Screenshot 2026-07-28 151119.png';
import vijay4 from '../assets/images/vijayradios/Screenshot 2026-07-28 151202.png';

import leap1 from '../assets/images/leap east/Screenshot 2026-07-29 105622.png';
import leap2 from '../assets/images/leap east/Screenshot 2026-07-29 105708.png';
import leap3 from '../assets/images/leap east/Screenshot 2026-07-29 105731.png';
import leap4 from '../assets/images/leap east/Screenshot 2026-07-29 105812.png';

import info1 from '../assets/images/infograins/Screenshot 2026-07-29 111557.png';
import info2 from '../assets/images/infograins/Screenshot 2026-07-29 111620.png';
import info3 from '../assets/images/infograins/Screenshot 2026-07-29 111722.png';
import info4 from '../assets/images/infograins/Screenshot 2026-07-29 112009.png';


const projects = [
  {
    name: 'Vijay Radios (E-Commerce Platform)',
    description: 'A full-stack e-commerce platform with premium designs, reliable repair services booking, and modern audio equipment showcasing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    images: [vijay1, vijay2, vijay3, vijay4],
    // github: 'https://github.com/dheerajinfograins/RajRadios',
    demo: 'https://raj-radios-eosin.vercel.app/'
  },
  {
    name: 'LEAP East 2026',
    description: 'A dynamic event website for LEAP East 2026 Hong Kong, an international tech event. Showcasing global tech leaders, startups, and innovations.',
    tags: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    images: [leap1, leap2, leap3, leap4],
    // github: 'https://github.com/infograinssoftware/leapeast2026',
    demo: 'https://leap-east-2026.infograins.com/'
  },
  {
    name: 'Infograins Software Solutions',
    description: 'A comprehensive corporate website showcasing innovative digital solutions, specialized services, and industry expertise.',
    tags: ['React', 'Python', 'Web3', 'Tailwind CSS'],
    images: [info1, info2, info3, info4],
    // github: 'https://github.com/ranjeetinfograins/infograins-fronted',
    demo: 'https://infograins.com/'
  }
];

const ProjectCard = ({ project, index }) => {
  const [currentImg, setCurrentImg] = useState(0);

  // Auto-play the slider
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [project.images]);

  const nextImg = (e) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImg = (e) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-full"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="1rem"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02} // Entire card zoom effect
        transitionSpeed={400}
        className="h-full"
      >
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:bg-slate-800/60 transition-all duration-300 group h-full flex flex-col cursor-pointer relative z-10">

          {/* Image Slider / Placeholder */}
          <div className="w-full aspect-video relative overflow-hidden group/slider">
            {project.images ? (
              <>
                <img
                  src={project.images[currentImg]}
                  alt={`${project.name} screenshot ${currentImg + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Slider Controls */}
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-cyan-500 text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-all z-20"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-cyan-500 text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-all z-20"
                >
                  <FaChevronRight size={12} />
                </button>

                {/* Slider Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {project.images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${currentImg === i ? 'bg-cyan-400 w-4' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className={`absolute inset-0 w-full h-full ${project.image} flex items-center justify-center text-white/50 group-hover:scale-110 transition-transform duration-500`}>
                [ Project Image ]
              </div>
            )}
            {/* Dark overlay that fades on hover */}
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>

          <div className="p-6 flex flex-col flex-grow relative z-20">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.name}</h3>

            <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[11px] font-medium text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded-full border border-cyan-900/50">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-900 bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-lg transition-colors text-sm font-bold shadow-lg shadow-cyan-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-cyan-400 font-medium tracking-wider uppercase mb-2">My Work</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Projects.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
