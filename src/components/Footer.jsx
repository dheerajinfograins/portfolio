const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Dheeraj Gami. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
