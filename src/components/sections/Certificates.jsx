import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { ShieldCheck, Award } from 'lucide-react';
import { textReveal } from '../../utils/motion';

const certificates = [
    {
        title: "MERN Full Stack Development",
        issuer: "Gokboru Tech Pvt. Ltd.",
        date: "Jul 2025",
        link: "https://drive.google.com/file/d/1ndRedVxPNs7GyckWwn3BRTr0LIHf6TA1/view",
        icon: <ShieldCheck size={32} />
    },
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "Apr 2025",
        link: "https://drive.google.com/file/d/1ewnh9v2tLHO_1wsSfn0pSuOQK0glhqg1/view",
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

            <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
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
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-6 flex flex-col overflow-hidden border border-white/5 hover:border-white/30 transition-colors group">

                                <div className="flex justify-between items-start mb-auto relative z-10">
                                    <div className="p-3 rounded-lg text-zinc-300 border border-white/10 group-hover:border-white/50 group-hover:bg-zinc-200/20 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <div className="text-xs font-mono text-zinc-300 bg-zinc-200/30 px-3 py-1 rounded-full border border-zinc-500/20">
                                        {cert.date}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-zinc-300 transition-colors uppercase tracking-tight">{cert.title}</h3>
                                    <p className="text-sm text-slate-400 font-medium">{cert.issuer}</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-500">
                                    <a href={cert.link} target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors uppercase font-bold tracking-widest">
                                        View Credential →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
