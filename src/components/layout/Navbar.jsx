import { useState, useEffect } from 'react';
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? '/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
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
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            </Magnetic>
          ))}
        </nav>
      </div>
    </header>
  );
}
