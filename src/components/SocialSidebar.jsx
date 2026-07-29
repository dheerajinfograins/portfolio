import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-[9000] p-4 bg-slate-900/50 backdrop-blur-md rounded-l-2xl border-y border-l border-slate-700/50 shadow-xl">

      <a
        href="https://github.com/dheerajinfograins"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-all hover:-translate-x-1"
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/dheeraj-gami-7b4956188/"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-all hover:-translate-x-1"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://wa.me/8435130722"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-green-500 transition-all hover:-translate-x-1"
        title="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default SocialSidebar;
