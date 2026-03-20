import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { Trophy, Star, Zap } from 'lucide-react';
import { textReveal } from '../../utils/motion';

const achievements = [
    {
        year: "Nov' 2025",
        title: "Solved 200+ coding problems",
        desc: "Across platforms including LeetCode, NeoColab, and CodeTantra.",
        icon: <Trophy size={20} />
    }
];

export default function Achievements() {
    return (
        <SectionWrapper id="achievements" className="">
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
                            Achievements
                        </span>
                    </motion.h2>
                </div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Key milestones and professional recognitions.
                </p>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                {achievements.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center border border-white/5 hover:border-white/30 transition-colors group"
                    >
                        <div className="w-14 h-14 shrink-0 rounded-full  flex items-center justify-center border border-white/10 group-hover:border-white/50 group-hover:bg-zinc-200/20 text-zinc-300 transition-colors">
                            {item.icon}
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <span className="text-sm font-mono text-zinc-300 bg-zinc-200/30 px-3 py-1 rounded-full border border-zinc-500/20">
                                    {item.year}
                                </span>
                            </div>
                            <p className="text-slate-400">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
