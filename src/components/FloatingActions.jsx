import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaSun, FaMoon } from 'react-icons/fa';
import toast from 'react-hot-toast';

const FloatingActions = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Royalty-free ambient music placeholder
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      toast('Music Paused', { icon: '🔇' });
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      toast('Playing Ambient Audio', { icon: '🎵' });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light-mode');
      toast('Light Mode Enabled!', { icon: '☀️' });
    } else {
      document.documentElement.classList.remove('light-mode');
      toast('Dark Mode Enabled!', { icon: '🌙' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9000]">
      <button type='button'
        onClick={toggleMusic}
        className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-900/20 hover:bg-slate-700 hover:scale-110 hover:text-cyan-300 transition-all"
        title="Toggle Music"
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </button>

      <button type='button'
        onClick={toggleTheme}
        className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-purple-400 shadow-lg shadow-purple-900/20 hover:bg-slate-700 hover:scale-110 hover:text-purple-300 transition-all"
        title="Toggle Theme"
      >
        {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </div>
  );
};

export default FloatingActions;
