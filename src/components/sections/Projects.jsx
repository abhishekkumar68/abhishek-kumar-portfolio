import { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../ui/Magnetic';
import { imageParallax, textReveal } from '../../utils/motion';

const projectsData = [
    {
        title: "SmartNote",
        description: "Built a scalable full-stack personal knowledge management platform designed to support the organization of 1000+ learning resources using hierarchical collections and modular learning entities. Designed secure JWT-based authentication and implemented 15+ RESTful APIs for efficient CRUD operations.",
        categories: ["Full Stack", "Web App"],
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
        image: "/smartnote.png",
        featured: true
    },
    {
        title: "ClipSync",
        description: "Engineered a real-time clipboard synchronization platform enabling secure text sharing across multiple devices through unique session tokens. Integrated WebSocket communication with Socket.IO to achieve sub-100 ms latency for instant updates between connected clients.",
        categories: ["Full Stack", "Real-Time"],
        tech: ["Node.js", "React.js", "Tailwind CSS", "Socket.IO", "Express.js"],
        image: "/clipsync.png",
        featured: true
    }
];

const categories = ['All Projects', 'Full Stack', 'Data Visualization', 'Frontend', 'API Integration', 'Web App'];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const filteredProjects = activeCategory === 'All Projects'
        ? projectsData
        : projectsData.filter(project => project.categories.includes(activeCategory));

    return (
        <SectionWrapper id="projects" className="">
            <div className="text-center mb-16 relative z-10 flex flex-col items-center">
                <div className="overflow-hidden mb-4">
                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            Featured Projects
                        </span>
                    </motion.h2>
                </div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A showcase of my work spanning web applications, APIs, and responsive interfaces.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
                {categories.map((cat, idx) => (
                    <Magnetic key={idx} damping={0.2} stiffness={200}>
                        <button
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-white/10 border border-white/10 backdrop-blur-md text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]'
                                    : ' text-slate-300 hover:bg-slate-700 hover:text-white border border-white/5'
                                }`}
                        >
                            {cat}
                        </button>
                    </Magnetic>
                ))}
            </div>

            <motion.div layout className="grid lg:grid-cols-2 gap-8 relative z-10 w-full max-w-[1200px] mx-auto">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl overflow-hidden border border-white/5 group hover:border-white/30 transition-colors flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden bg-transparent">
                                <motion.img
                                    variants={imageParallax}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-90 z-10" />

                                <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 z-20">
                                    {project.categories.map((cat, cIdx) => (
                                        <span key={cIdx} className="px-3 py-1 bg-transparent/80 backdrop-blur-md rounded-full text-xs font-semibold text-slate-200 border border-slate-700">
                                            {cat}
                                        </span>
                                    ))}
                                </div>

                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1 bg-white/10 border border-white/10 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] tracking-wide">
                                            Featured
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                                <h3 className="text-2xl font-bold text-zinc-300 mb-3">{project.title}</h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-700/50">
                                    {project.tech.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1  rounded-full text-xs font-medium text-slate-300 border border-slate-700/50">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
}
