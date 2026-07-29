import { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Toaster } from 'react-hot-toast';

// Direct imports for critical above-the-fold content
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingActions from './components/FloatingActions';
import Background from './components/Background';
import SocialSidebar from './components/SocialSidebar';

// Lazy load below-the-fold components for performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Github = lazy(() => import('./components/Github'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      // GSAP Initial Load Animation Timeline
      const tl = gsap.timeline();
      
      tl.fromTo(navRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(mainRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, [isLoading]);

  return (
    <div className="text-slate-200 min-h-screen font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden relative">
      <Toaster position="bottom-right" reverseOrder={false} toastOptions={{
        style: {
          background: '#0f172a',
          color: '#fff',
          border: '1px solid #1e293b',
          zIndex: 9999
        },
      }} />
      <Background />
      <CustomCursor />
      <ScrollProgress />
      <FloatingActions />
      <SocialSidebar />

      <AnimatePresence>
        {isLoading && <Loader key="loader" finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Content wrapped to hide until loader finishes */}
      <div className={`relative z-10 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <div ref={navRef} className="fixed top-0 w-full z-50">
          <Navbar />
        </div>
        
        <main ref={mainRef}>
          <Hero />
          
          {/* Suspense boundary for lazy loaded sections */}
          <Suspense fallback={<div className="h-40 flex items-center justify-center text-cyan-400">Loading section...</div>}>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Github />
            <Contact />
          </Suspense>
        </main>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App;
