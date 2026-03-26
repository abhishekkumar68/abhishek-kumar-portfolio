import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Zero-lag interactive spotlight using direct DOM style injection
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.06), transparent 40%)`;
      }
    };
    
    // Fallback starting position
    if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(800px circle at 50% 0%, rgba(255,255,255,0.04), transparent 40%)`;
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#030303] overflow-hidden pointer-events-none">
      
      {/* 1. Subtle Animated Tech Grid Overlay */}
      {/* This renders a beautiful faint grid that fades out radially */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

      {/* 2. Deep Ambient Glows (Replacing Smoke) */}
      <div className="absolute inset-x-0 top-0 h-screen overflow-hidden blur-[120px] opacity-50">
        <motion.div
           className="absolute top-[-10%] left-[10%] w-[50%] h-[50%] bg-indigo-900/40 rounded-full mix-blend-screen"
           animate={{ 
             x: [0, 150, 0], 
             y: [0, 100, 0],
             scale: [1, 1.2, 1] 
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
           className="absolute top-[20%] right-[10%] w-[60%] h-[40%] bg-slate-800/50 rounded-full mix-blend-screen"
           animate={{ 
             x: [0, -100, 0], 
             y: [0, 150, 0],
             scale: [1, 1.5, 1]
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 3. Interactive Mouse Spotlight */}
      <div ref={spotlightRef} className="absolute inset-0 z-10 transition-opacity duration-300" />
      
      {/* 4. Fine Noise Premium Texture Base */}
      <svg className="absolute w-0 h-0 hidden">
        <filter id="ultraFineNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] mix-blend-overlay"
        style={{ filter: "url(#ultraFineNoise)" }}
      ></div>

    </div>
  );
}
