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
            location: "Punjab, India",
            duration: "Since August 2022",
            degree: "Bachelor of Technology - Computer Science and Engineering",
            score: "CGPA: 8.16*"
        },
        {
            institution: "St Theresa's Convent School",
            location: "Karnal, Haryana",
            duration: "April 2021 - March 2022",
            degree: "Intermediate",
            score: "Percentage: 90.4%"
        },
        {
            institution: "Delhi Public School",
            location: "Karnal, Haryana",
            duration: "April 2019 - March 2020",
            degree: "Matriculation",
            score: "Percentage: 93.3%"
        }
    ],
    Skills: [],
    Projects: [],
    Extracurricular: [],
    Certificates: []
};

const tabs = ['Education', 'Skills', 'Projects', 'Extracurricular', 'Certificates'];

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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 border-b-4 border-emerald-600 pb-2">
                            Resume
                        </span>
                    </motion.h2>
                </div>

                {/* Contact Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="mailto:abhishek1709kumar@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Mail size={16} className="text-white" />
                            <span>abhishek1709kumar@gmail.com</span>
                        </a>
                    </Magnetic>
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="tel:+918278478622" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Phone size={16} className="text-zinc-300" />
                            <span>+91-8278478622</span>
                        </a>
                    </Magnetic>
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Linkedin size={16} className="text-white" />
                            <span>LinkedIn</span>
                        </a>
                    </Magnetic>
                    <Magnetic damping={0.15} stiffness={180}>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full  border border-white/5 hover:border-white/50 text-slate-300 hover:text-white transition-colors text-sm">
                            <Github size={16} className="text-zinc-400" />
                            <span>GitHub</span>
                        </a>
                    </Magnetic>
                </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-10">
                    {tabs.map((tab) => (
                        <Magnetic key={tab} damping={0.2} stiffness={200}>
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 ${activeTab === tab
                                        ? 'bg-white/10 border border-white/10 backdrop-blur-md text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]'
                                        : 'text-slate-400 hover:text-white hover:'
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
                            {activeTab === 'Education' && resumeData.Education.map((item, idx) => (
                                <div key={idx} className=" p-6 lg:p-8 rounded-xl border border-white/5 flex flex-col gap-4 hover:border-white/30 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 border-b border-white/5 pb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-emerald-300">{item.institution}</h3>
                                            <p className="text-sm text-slate-500 mt-1">{item.location}</p>
                                        </div>
                                        <span className="text-sm font-medium text-zinc-400 md:text-right shrink-0">{item.duration}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-base text-slate-200 font-semibold mb-1">{item.degree}</h4>
                                        <p className="text-slate-400 text-sm">{item.score}</p>
                                    </div>
                                </div>
                            ))}

                            {activeTab !== 'Education' && (
                                <div className="flex flex-col items-center justify-center p-12  rounded-xl border border-white/5 text-slate-400 text-center">
                                    <FileText size={48} className="mb-4 text-slate-600" />
                                    <p>Detailed logs for {activeTab} are available in the full document.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Download Button */}
                <div className="mt-12">
                    <Magnetic>
                        <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] group">
                            <FileText size={18} className="group-hover:-translate-y-1 transition-transform" />
                            Download Resume
                        </a>
                    </Magnetic>
                </div>
            </div>
        </SectionWrapper>
    );
}
