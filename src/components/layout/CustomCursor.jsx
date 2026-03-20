
import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Directly track mouse via Framer Motion values (Zero React Re-renders on move = No Lag)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth floating follow for the outer ring - Made much faster/snappier
  const springConfigRing = { damping: 30, stiffness: 700, mass: 0.05 };
  const ringX = useSpring(cursorX, springConfigRing);
  const ringY = useSpring(cursorY, springConfigRing);

  const updateMousePosition = useCallback((e) => {
    // Inner dot gets the raw, instant coordinate
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  const handleMouseOver = useCallback((e) => {
    if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.cursor-pointer')) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Use absolute passive listener for zero input blocking
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [updateMousePosition, handleMouseOver]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot - Instant tracking (No Spring = 0 Lag) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-[100] mix-blend-screen shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', duration: 0.1 }}
      />
      
      {/* Outer Ring - Snappy spring follow */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 pointer-events-none z-[99] mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.1 }}
      />
    </>
  );
}

