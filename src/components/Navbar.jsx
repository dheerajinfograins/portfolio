import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg shadow-cyan-900/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain drop-shadow-md" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/Dheeraj_Gami_Resume.docx"
            download="Dheeraj_Gami_Resume.docx"
            className="px-6 py-2 border border-cyan-400 text-cyan-400 text-sm font-bold rounded-full hover:bg-cyan-400/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-slate-200 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 flex flex-col py-4 px-6 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-lg font-medium text-slate-200 border-b border-slate-800 hover:text-cyan-400"
            >
              {link}
            </a>
          ))}
          <a
            href="/Dheeraj_Gami_Resume.docx"
            download="Dheeraj_Gami_Resume.docx"
            className="mt-4 text-center px-6 py-3 border border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
