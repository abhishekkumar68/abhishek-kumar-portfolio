import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { textReveal } from '../../utils/motion';
import Magnetic from '../ui/Magnetic';

export default function Contact() {
    return (
        <SectionWrapper id="contact" className="">
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
                            Get In Touch
                        </span>
                    </motion.h2>
                </div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Currently open to new opportunities. Let's build something amazing together!
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center group hover:border-white/30 transition-colors">
                        <div className="w-14 h-14 shrink-0  rounded-full border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:bg-zinc-200/20 transition-all">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                            <a href="mailto:abhishek1709kumar@gmail.com" className="text-lg md:text-xl font-bold text-white hover:text-zinc-300 transition-colors">
                                abhishek1709kumar@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center group hover:border-white/30 transition-colors">
                        <div className="w-14 h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:bg-zinc-200/20 transition-all">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">Mobile</p>
                            <a href="tel:+918002176875" className="text-lg md:text-xl font-bold text-white hover:text-zinc-300 transition-colors">
                                +91-8002176875
                            </a>
                        </div>
                    </div>
                </div>

                {/* Message Form */}
                <form className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl border border-white/10 flex flex-col gap-6 relative overflow-hidden">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-400">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className=" border border-white/10 bg-transparent rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-400">Email</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className=" border border-white/10 bg-transparent rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2 relative z-10">
                        <label className="text-sm font-medium text-slate-400">Message</label>
                        <textarea
                            rows="4"
                            placeholder="How can I help you?"
                            className=" border border-white/10 bg-transparent rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400 transition-all resize-none"
                        ></textarea>
                    </div>

                    <Magnetic>
                        <button
                            type="button"
                            className="w-full bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white hover:!text-slate-900 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </Magnetic>
                </form>
            </div>
        </SectionWrapper>
    );
}
