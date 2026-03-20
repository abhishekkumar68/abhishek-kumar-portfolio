import { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { textReveal } from '../../utils/motion';

const skillsData = [
    { name: 'C', percentage: 70, category: 'Programming Languages', icon: <Cpu className="text-zinc-300" size={24} /> },
    { name: 'C++', percentage: 75, category: 'Programming Languages', icon: <Cpu className="text-white" size={24} /> },
    { name: 'Java', percentage: 85, category: 'Programming Languages', icon: <Code2 className="text-red-400" size={24} /> },
    { name: 'Python', percentage: 75, category: 'Programming Languages', icon: <Code2 className="text-yellow-400" size={24} /> },
    { name: 'React', percentage: 90, category: 'Frontend', icon: <Layout className="text-cyan-400" size={24} /> },
    { name: 'HTML', percentage: 95, category: 'Frontend', icon: <Layout className="text-orange-500" size={24} /> },
    { name: 'CSS', percentage: 85, category: 'Frontend', icon: <Layout className="text-white" size={24} /> },
    { name: 'JavaScript', percentage: 90, category: 'Frontend', icon: <Layout className="text-yellow-300" size={24} /> },
    { name: 'Tailwind CSS', percentage: 80, category: 'Frontend', icon: <Layout className="text-cyan-300" size={24} /> },
    { name: 'Node.js', percentage: 85, category: 'Backend', icon: <Server className="text-green-500" size={24} /> },
    { name: 'Express', percentage: 80, category: 'Backend', icon: <Server className="text-gray-400" size={24} /> },
    { name: 'MongoDB', percentage: 85, category: 'Databases', icon: <Database className="text-green-600" size={24} /> },
];

const categories = ['All Skills', 'Programming Languages', 'Frontend', 'Backend', 'Databases'];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('All Skills');

    const filteredSkills = activeCategory === 'All Skills'
        ? skillsData
        : skillsData.filter(skill => skill.category === activeCategory);

    return (
        <SectionWrapper id="skills" className="">
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
                            Technical Arsenal
                        </span>
                    </motion.h2>
                </div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A showcase of technologies I've mastered on my journey as a developer.
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

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full max-w-6xl mx-auto">
                <AnimatePresence>
                    {filteredSkills.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className=" rounded-xl p-6 border border-white/5 hover:border-white/30 transition-colors flex flex-col justify-between h-40 group shadow-lg"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg  flex items-center justify-center border border-white/10 group-hover:border-white/50 transition-colors">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-wide">{skill.name}</h3>
                                </div>
                                <span className="text-sm font-mono text-zinc-300">{skill.percentage}%</span>
                            </div>

                            <div className="w-full">
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="text-right mt-3 text-xs text-slate-500 font-medium tracking-wider">
                                {skill.category.replace(' ', '')}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionWrapper>
    );
}
