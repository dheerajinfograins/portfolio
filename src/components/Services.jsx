import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Building fast, responsive, and scalable web applications using modern technologies.',
    icon: '💻'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience.',
    icon: '🎨'
  },
  {
    title: 'Backend Architecture',
    description: 'Designing robust APIs and database structures for scalable applications.',
    icon: '⚙️'
  },
  {
    title: '3D Web Experiences',
    description: 'Integrating interactive 3D elements and animations using Three.js and WebGL.',
    icon: '🧊'
  }
];

const Services = () => {
  return (
    <section id="services" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-cyan-400 font-medium tracking-wider uppercase mb-2">What I Offer</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Services.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
