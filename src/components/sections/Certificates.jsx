import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { ShieldCheck, Award } from 'lucide-react';
import { textReveal } from '../../utils/motion';

const certificates = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "Aug 2025",
        id: "AWS-CSA-8921",
        icon: <ShieldCheck size={32} />
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "Feb 2025",
        id: "FM-REACT-442",
        icon: <Award size={32} />
    },
    {
        title: "System Design Certificate",
        issuer: "ByteByteGo",
        date: "Nov 2024",
        id: "BBG-SYS-991",
        icon: <Award size={32} />
    }
];

export default function Certificates() {
    return (
        <SectionWrapper id="certifications" className="">
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
                            Certifications
                        </span>
                    </motion.h2>
                </div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Verified credentials and professional accreditations.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto">
                {certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                        className="group relative h-64"
                    >
                        <div className="w-full h-full relative transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="absolute inset-0  rounded-xl p-6 flex flex-col overflow-hidden border border-white/5 hover:border-white/30">

                                <div className="flex justify-between items-start mb-auto relative z-10">
                                    <div className="p-3  rounded-lg text-zinc-300 border border-white/10 group-hover:border-white/30 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <div className="text-xs font-mono text-slate-500  px-2 py-1 rounded border border-white/5">
                                        {cert.date}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-zinc-300 transition-colors">{cert.title}</h3>
                                    <p className="text-sm text-slate-400 font-medium">{cert.issuer}</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-500">
                                    <span>ID: {cert.id}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
