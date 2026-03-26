import { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, FileText } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { textReveal } from '../../utils/motion';

const resumeData = {
    Education: [
        {
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            duration: "Aug 2023 - Present",
            degree: "Bachelor of Technology",
            score: "Computer Science and Engineering; CGPA: 7.36"
        },
        {
            institution: "RDS College",
            location: "Muzaffarpur, Bihar",
            duration: "2020 - 2022",
            degree: "Intermediate",
            score: "Percentage: 75.4%"
        },
        {
            institution: "Paramount Academy",
            location: "Muzaffarpur, Bihar",
            duration: "2020",
            degree: "Matriculation",
            score: "Percentage: 81.6%"
        }
    ],
    Training: [
        {
            institution: "Gokboru Tech Pvt. Ltd.",
            location: "Remote",
            duration: "Jun 2025 - Jul 2025",
            degree: "Full-Stack Development Using MERN",
            score: "Developed a full-stack quiz application using MERN with core features for participation and leaderboard tracking. Implemented JWT authentication and role-based access control."
        }
    ],
    Skills: {
        "Languages": ["C++", "Java"],
        "Web Technologies": ["HTML", "Tailwind CSS", "JavaScript", "React", "Node.js", "Express.js", "Socket.IO"],
        "Database Management": ["MySQL", "MongoDB"],
        "CS Fundamentals": ["OOP", "DBMS", "Data Structures", "Algorithms"],
        "Tools": ["VS Code", "Git", "GitHub"]
    },
    Projects: [
        {
            title: "SmartNote",
            tech: "MERN Stack",
            duration: "Mar 2026",
            description: "Built a scalable full-stack personal knowledge management platform designed to support the organization of 1000+ learning resources using hierarchical collections and modular learning entities."
        },
        {
            title: "ClipSync",
            tech: "MERN Stack",
            duration: "Sep 2025",
            description: "Engineered a real-time clipboard synchronization platform enabling secure text sharing across multiple devices through unique session tokens with sub-100 ms latency."
        }
    ],
    Certificates: [
        {
            title: "Cloud Computing",
            issuing_org: "NPTEL",
            date: "Apr 2025"
        },
        {
            title: "MERN Full Stack Development",
            issuing_org: "Gokboru Tech Pvt. Ltd.",
            date: "Jul 2025"
        }
    ],
    Achievements: [
        "Solved 200+ coding problems across platforms including LeetCode, NeoColab, and CodeTantra."
    ]
};

const tabs = ['Education', 'Training', 'Skills', 'Projects', 'Certificates'];

export default function Resume() {
    const [activeTab, setActiveTab] = useState('Education');

    return (
        <SectionWrapper id="resume" className="">
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
                <div className="overflow-hidden mb-8">
                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textReveal}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        <span className="text-white">My </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 border-b-4 border-zinc-500 pb-2">
                            Resume
                        </span>
                    </motion.h2>
                </div>

                {/* Contact Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishek1709kumar@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Mail size={16} className="text-white" />
                            <span>abhishek1709kumar@gmail.com</span>
                        </a>
                    </Magnetic>
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="tel:+918002176875" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Phone size={16} className="text-zinc-300" />
                            <span>+91-8002176875</span>
                        </a>
                    </Magnetic>
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="https://linkedin.com/in/abhishekkumar75" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Linkedin size={16} className="text-white" />
                            <span>LinkedIn</span>
                        </a>
                    </Magnetic>
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="https://github.com/abhishekkumar68" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Github size={16} className="text-zinc-400" />
                            <span>GitHub</span>
                        </a>
                    </Magnetic>
                </div>
                
                {/* Achievement Highlight */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <p className="text-zinc-400 text-sm italic font-medium">
                        🏆 {resumeData.Achievements[0]}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                    {tabs.map((tab) => (
                        <Magnetic key={tab} damping={0.2} stiffness={200}>
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 md:px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === tab
                                        ? 'bg-white/10 border border-white/10 backdrop-blur-md text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        </Magnetic>
                    ))}
                </div>

                {/* Content Area */}
                <div className="w-full min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-4"
                        >
                            {(activeTab === 'Education' || activeTab === 'Training') && resumeData[activeTab].map((item, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-xl border border-white/10 flex flex-col gap-4 hover:border-white/30 hover:bg-white/10 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 border-b border-white/10 pb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-200">{item.institution}</h3>
                                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{item.location}</p>
                                        </div>
                                        <span className="text-sm font-medium text-zinc-400 md:text-right shrink-0">{item.duration}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-base text-slate-200 font-semibold mb-2">{item.degree}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.score}</p>
                                    </div>
                                </div>
                            ))}

                            {activeTab === 'Skills' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                    {Object.entries(resumeData.Skills).map(([category, skills], idx) => (
                                        <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">{category}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill, sIdx) => (
                                                    <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 font-medium">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'Projects' && resumeData.Projects.map((project, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-xl border border-white/10 flex flex-col gap-4 hover:border-white/30 hover:bg-white/10 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-200">{project.title}</h3>
                                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{project.tech}</p>
                                        </div>
                                        <span className="text-sm font-medium text-zinc-400">{project.duration}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                                </div>
                            ))}

                            {activeTab === 'Certificates' && resumeData.Certificates.map((cert, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex justify-between items-center hover:border-white/30 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-200">{cert.title}</h3>
                                        <p className="text-sm text-slate-500">{cert.issuing_org}</p>
                                    </div>
                                    <span className="text-sm font-medium text-zinc-400">{cert.date}</span>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Download Button */}
                <div className="mt-12">
                    <Magnetic>
                        <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white hover:!text-slate-900 transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] group">
                            <FileText size={18} className="group-hover:-translate-y-1 transition-transform" />
                            Download Resume
                        </a>
                    </Magnetic>
                </div>
            </div>
        </SectionWrapper>
    );
}
