import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'The Beginning',
    company: 'Started MERN Stack Journey',
    date: '2025',
    points: [
      'Started my 6-month MERN Stack Full Stack Development course.',
      'Built a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.',
      'Developed multiple practice projects to strengthen full-stack development skills.',
      'Learned Git, GitHub, REST APIs, authentication, and database integration.'
    ]
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Internship',
    date: '2025',
    points: [
      'Worked on real-world MERN Stack projects during internship.',
      'Built responsive user interfaces using React.js and Tailwind CSS.',
      'Developed REST APIs using Node.js, Express.js, and MongoDB.',
      'Fixed bugs, implemented new features, and collaborated with senior developers.',
      'Gained hands-on experience with Git, API integration, and deployment.'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Professional Experience',
    date: '2026',
    points: [
      'Developed responsive and modern web interfaces using React.js and Next.js.',
      'Converted Figma designs into pixel-perfect, reusable React components.',
      'Integrated REST APIs and optimized application performance.',
      'Worked with Tailwind CSS, Framer Motion, and responsive design techniques.',
      'Collaborated with designers and backend developers to deliver production-ready applications.'
    ]
  },
  {
    title: 'MERN Stack Developer',
    company: 'Current Role',
    date: '2026 – Present',
    points: [
      'Building scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
      'Designing secure RESTful APIs with authentication and authorization.',
      'Developing real-world projects including E-commerce, Admin Dashboards, and Company Websites.',
      'Integrating PostgreSQL, payment gateways, and third-party APIs.',
      'Conducting JavaScript and React training sessions while continuously improving application performance.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-cyan-400 font-medium tracking-wider uppercase mb-2">My Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Experience.</h2>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-5 h-5 bg-slate-900 border-4 border-cyan-500 rounded-full -left-[11px] top-1.5 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10"></div>
              
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:bg-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/20 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                <p className="text-slate-300 font-medium mt-1 mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  {exp.company} 
                  <span className="hidden sm:block text-slate-600">|</span> 
                  <span className="text-cyan-500 text-sm">{exp.date}</span>
                </p>
                <ul className="list-disc ml-5 space-y-2 text-slate-400">
                  {exp.points.map((point) => (
                    <li key={point} className="pl-1 leading-relaxed tracking-wide group-hover:text-slate-300 transition-colors">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
