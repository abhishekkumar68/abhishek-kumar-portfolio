import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { fadeIn, staggerContainer, textReveal } from '../../utils/motion';
import Magnetic from '../ui/Magnetic';

export default function Hero() {
    const techStack = ["C++", "Java", "JavaScript", "React", "Node.js", "MongoDB", "MySQL"];
    const nameLine1 = "Abhishek";
    const nameLine2 = "Kumar";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    const [display1, setDisplay1] = useState(nameLine1);
    const [display2, setDisplay2] = useState(nameLine2);
    const [isAnimating, setIsAnimating] = useState(false);
    const iterationRef = useRef(0);
    const intervalRef = useRef(null);

    const scrambleAll = () => {
        if (iterationRef.current > 0) return;
        cancelAnimationFrame(intervalRef.current);
        iterationRef.current = 0.1;
        setIsAnimating(true);

        const animate = () => {
            // Update Line 1
            setDisplay1(
                nameLine1.split("")
                    .map((char, index) => {
                        if (index < Math.floor(iterationRef.current)) return nameLine1[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            // Update Line 2 ( Kumar is shorter, so it will settle faster naturally if we use the same iterationRef, 
            // but we want them to feel synchronized. We'll use the max length for the loop condition. )
            setDisplay2(
                nameLine2.split("")
                    .map((char, index) => {
                        if (index < Math.floor(iterationRef.current)) return nameLine2[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            const maxLength = Math.max(nameLine1.length, nameLine2.length);
            if (iterationRef.current < maxLength) {
                iterationRef.current += 1 / 4;
                intervalRef.current = requestAnimationFrame(animate);
            } else {
                setDisplay1(nameLine1);
                setDisplay2(nameLine2);
                iterationRef.current = maxLength;
                setIsAnimating(false);
            }
        };
        animate();
    };

    const resetAll = () => {
        cancelAnimationFrame(intervalRef.current);
        setDisplay1(nameLine1);
        setDisplay2(nameLine2);
        iterationRef.current = 0;
        setIsAnimating(false);
    };

    useEffect(() => {
        return () => cancelAnimationFrame(intervalRef.current);
    }, []);

    const NameLine = ({ display, original, glowing }) => {
        return (
            <div className="relative inline-block w-full">
                {/* Hidden Ghost Text for stable layout */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight opacity-0 pointer-events-none select-none leading-tight">
                    {original}
                </h1>
                
                {/* Animated Scramble Text Overlay */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight cursor-default absolute inset-0 z-10 whitespace-nowrap leading-tight">
                    <span 
                        className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 transition-all duration-150"
                        style={{ filter: glowing ? 'drop-shadow(0 0 1px rgba(255,255,255,0.95)) drop-shadow(0 0 8px rgba(200,220,255,0.5)) drop-shadow(0 0 18px rgba(160,190,255,0.25))' : 'none' }}
                    >
                        {display}
                    </span>
                </h1>
            </div>
        );
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16" id="home">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Content - Text & Buttons */}
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
                >
                    <div 
                        onMouseEnter={scrambleAll}
                        onMouseLeave={resetAll}
                        className="flex flex-col mb-4 space-y-2 cursor-default group"
                    >
                        <motion.div variants={textReveal}>
                            <NameLine 
                                display={display1} 
                                original={nameLine1} 
                                glowing={isAnimating}
                            />
                        </motion.div>
                        <motion.div variants={textReveal}>
                            <NameLine 
                                display={display2} 
                                original={nameLine2} 
                                glowing={isAnimating}
                            />
                        </motion.div>
                    </div>

                    <div className="overflow-hidden mb-6">
                        <motion.h2 variants={textReveal} className="text-2xl md:text-3xl text-slate-300 font-medium">
                            Full Stack Developer
                        </motion.h2>
                    </div>

                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed mb-8"
                    >
                        Welcome to my digital playground! I craft elegant solutions through code, turning ideas into immersive digital experiences that solve real-world problems.
                    </motion.p>

                    {/* Tech Stack Pills */}
                    <motion.div
                        variants={fadeIn('up', 0.5)}
                        className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
                    >
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-1.5 text-sm font-medium rounded-full  text-slate-300 border border-white/5"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    {/* Magnetic Buttons */}
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <Magnetic>
                            <a
                                href="#projects"
                                className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white hover:!text-slate-900 transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                            >
                                View My Work
                            </a>
                        </Magnetic>

                        <Magnetic>
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 rounded-lg font-bold text-white border border-slate-600 hover:bg-slate-800 transition-colors"
                            >
                                Contact Me
                            </a>
                        </Magnetic>
                    </motion.div>
                </motion.div>

                {/* Right Content - Floating Image */}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    animate="show"
                    className="flex justify-center lg:justify-end order-1 lg:order-2"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                        {/* Animated Glow Background */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white bg-white/10 rounded-full blur-[100px]"
                        />

                        {/* Floating Image Container */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]  flex items-center justify-center"
                        >
                            <img
                                src="/profile.png"
                                alt="Abhishek Kumar"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
