import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-slate-950 pt-20 pb-10 overflow-hidden border-t border-slate-800">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] pointer-events-none">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-wide">
              Dheeraj Gami<span className="text-cyan-400">.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              I am a passionate software developer dedicated to crafting immersive, high-performance digital experiences. With a strong foundation in modern web technologies, I transform complex problems into elegant, user-centric solutions. Whether it's designing pixel-perfect interfaces or building robust architectures, I bring ideas to life with clean code and creative design. Let's collaborate and build something extraordinary together.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <div className="flex flex-col space-y-4">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dheerajgami22@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                  <FaEnvelope size={16} />
                </div>
                <span>dheerajgami22@gmail.com</span>
              </a>
              <a href="tel:7999744425" className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                  <FaPhoneAlt size={16} />
                </div>
                <span>+91 79997 44425</span>
              </a>
              <a href="https://wa.me/8435130722" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-green-500 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all">
                  <FaWhatsapp size={18} />
                </div>
                <span>+91 84351 30722</span>
              </a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/dheerajinfograins" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-lg" title="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/dheeraj-gami-7b4956188/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg" title="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="https://wa.me/8435130722" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-green-500 hover:-translate-y-2 transition-all duration-300 shadow-lg" title="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dheerajgami22@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-red-500 hover:-translate-y-2 transition-all duration-300 shadow-lg" title="Email">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Dheeraj Gami. All rights reserved.
          </p>
          
          <p className="text-slate-500 text-sm flex items-center gap-2">
            Crafted with <span className="text-red-500 animate-pulse text-lg">❤️</span> in React
          </p>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
