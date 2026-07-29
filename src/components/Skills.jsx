import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';
import { useState, useEffect } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiGit, 
  SiRedux, 
  SiNextdotjs, 
  SiTailwindcss 
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact size={40} />, color: 'text-cyan-400', shadow: 'hover:shadow-cyan-400/50' },
  { name: 'Node.js', icon: <SiNodedotjs size={40} />, color: 'text-green-500', shadow: 'hover:shadow-green-500/50' },
  { name: 'Express', icon: <SiExpress size={40} />, color: 'text-gray-300', shadow: 'hover:shadow-gray-300/50' },
  { name: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-400', shadow: 'hover:shadow-green-400/50' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: 'text-blue-400', shadow: 'hover:shadow-blue-400/50' },
  { name: 'Docker', icon: <SiDocker size={40} />, color: 'text-blue-500', shadow: 'hover:shadow-blue-500/50' },
  { name: 'Git', icon: <SiGit size={40} />, color: 'text-orange-500', shadow: 'hover:shadow-orange-500/50' },
  { name: 'Redux', icon: <SiRedux size={40} />, color: 'text-purple-500', shadow: 'hover:shadow-purple-500/50' },
  { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: 'text-white', shadow: 'hover:shadow-white/50' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: 'text-teal-400', shadow: 'hover:shadow-teal-400/50' },
];

const iconSlugs = [
  "typescript", "javascript", "react", "html5", "css3", "nodedotjs", "express",
  "nextdotjs", "mongodb", "postgresql", "firebase", "vercel", "docker", "git", "github", "tailwindcss", "redux", "figma"
];

const Skills = () => {
  const [iconData, setIconData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setIconData);
  }, []);

  const renderedIcons = iconData
    ? Object.values(iconData.simpleIcons).map((icon) =>
        renderSimpleIcon({
          icon,
          size: 42,
          aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
          },
        })
      )
    : [];

  return (
    <section id="skills" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-cyan-400 font-medium tracking-wider uppercase mb-2 text-center md:text-left">My Toolkit</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center md:text-left">Skills.</h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: 3D Icon Sphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="max-w-[400px] w-full cursor-grab active:cursor-grabbing">
              {renderedIcons.length > 0 ? (
                <Cloud
                  containerProps={{
                    style: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }
                  }}
                  canvasProps={{
                    style: { width: "100%", maxWidth: "400px" }
                  }}
                  options={{
                    clickToFront: 500,
                    depth: 1,
                    imageScale: 2,
                    initial: [0.1, -0.1],
                    outlineColour: "#0000",
                    reverse: true,
                    tooltip: "native",
                    tooltipDelay: 0,
                    wheelZoom: false,
                  }}
                >
                  {renderedIcons}
                </Cloud>
              ) : (
                <div className="h-[400px] flex items-center justify-center text-cyan-500/50 animate-pulse">Loading Sphere...</div>
              )}
            </div>
          </motion.div>

          {/* Right: Tilt Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.4}
                  glareColor="#ffffff"
                  glarePosition="all"
                  glareBorderRadius="1rem"
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.05}
                  transitionSpeed={400}
                  className="h-full"
                >
                  <div className={`bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg ${skill.shadow} h-[130px] cursor-pointer group`}>
                    <div className={`${skill.color} drop-shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-slate-300 font-bold tracking-wide text-sm group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
