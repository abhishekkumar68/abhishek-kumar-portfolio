import { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const SoundIcon = ({ isPlaying }) => {
    const bars = [8, 14, 22, 14, 8];
    return (
        <div className="flex items-center justify-center gap-[3px] h-6 w-6 pointer-events-none">
            {bars.map((h, i) => (
                <motion.span
                    key={i}
                    className="w-[3px] bg-current rounded-full"
                    animate={{
                        height: isPlaying ? [h * 0.3, h, h * 0.3] : h * 0.3,
                        opacity: isPlaying ? 1 : 0.5
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: isPlaying ? Infinity : 0,
                        delay: i * 0.15,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (localStorage.theme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-mode');
    }
    
    // Sync React state to the DOM audio element
    const audioEl = document.getElementById('bgm-player');
    if (audioEl) {
        audioEl.volume = 0.4;
        if (!audioEl.paused) {
            setIsPlaying(true);
        }
    }
  }, []);

  const toggleSound = () => {
    const audioEl = document.getElementById('bgm-player');
    if (!audioEl) return;

    if (isPlaying) {
        audioEl.pause();
        setIsPlaying(false);
    } else {
        audioEl.play()
            .then(() => setIsPlaying(true))
            .catch(err => {
                console.warn('Audio play failed:', err);
                setIsPlaying(false);
            });
    }
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.theme = 'dark';
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
    >
      <audio id="bgm-player" src="/bgm.mp3" loop className="hidden" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Magnetic>
          <a href="#home" className="text-2xl font-bold tracking-tight text-white group flex items-center gap-2">
            <span className="text-white">AK</span>
            <span>Portfolio</span>
          </a>
        </Magnetic>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Magnetic key={link.name} damping={0.2} stiffness={200}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                {link.name}
              </a>
            </Magnetic>
          ))}
          <Magnetic damping={0.2} stiffness={200}>
            <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none flex items-center justify-center"
                aria-label="Toggle Dark/Light Mode"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </Magnetic>
          <Magnetic damping={0.2} stiffness={200}>
            <button
                onClick={toggleSound}
                className="ml-2 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none flex items-center justify-center"
                aria-label="Toggle Sound"
            >
                <SoundIcon isPlaying={isPlaying} />
            </button>
          </Magnetic>
        </nav>
      </div>
    </header>
  );
}
