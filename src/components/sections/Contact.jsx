import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { Send, Mail, Phone, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { textReveal } from '../../utils/motion';
import Magnetic from '../ui/Magnetic';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    // Credentials provided by user
    const SERVICE_ID = "service_sav4tb5";
    const TEMPLATE_ID = "template_38ypqwj";
    const PUBLIC_KEY = "BimzIl90AmWT6g_0-";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

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
                    Feel free to reach out for opportunities, collaborations, or any queries.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="flex flex-col gap-6 order-2 lg:order-1">
                    {/* Email Card */}
                    <div className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center group hover:border-white/30 transition-colors">
                        <div className="w-14 h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:bg-zinc-200/20 transition-all">
                            <Mail size={24} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                            <p className="text-lg md:text-xl font-bold text-white mb-2">abhishek1709kumar@gmail.com</p>
                            <a href="mailto:abhishek1709kumar@gmail.com" className="text-sm text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">
                                Write Me <Send size={14} />
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp Card */}
                    <div className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center group hover:border-white/30 transition-colors">
                        <div className="w-14 h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:bg-zinc-200/20 transition-all">
                            <MessageSquare size={24} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-slate-500 mb-1">WhatsApp</p>
                            <p className="text-lg md:text-xl font-bold text-white mb-2">+91-8002176875</p>
                            <a 
                                href="https://api.whatsapp.com/send?phone=918002176875&text=Hi Abhishek, I saw your portfolio!" 
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
                            >
                                Write Me <Send size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Message Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl border border-white/10 flex flex-col gap-6 relative overflow-hidden order-1 lg:order-2"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-400" htmlFor="user_name">Name</label>
                        <input
                            id="user_name"
                            name="name" // Matches provided logic
                            type="text"
                            required
                            placeholder="Your Name"
                            className="border border-white/10 bg-transparent rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-400" htmlFor="user_email">Email</label>
                        <input
                            id="user_email"
                            name="email" // Matches provided logic
                            type="email"
                            required
                            placeholder="Your Email"
                            className="border border-white/10 bg-transparent rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2 relative z-10">
                        <label className="text-sm font-medium text-slate-400" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message" // Matches provided logic
                            rows="6"
                            required
                            placeholder="Write your message here..."
                            className="border border-white/10 bg-transparent rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400 transition-all resize-none"
                        ></textarea>
                    </div>

                    <Magnetic>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white hover:!text-slate-900 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </Magnetic>

                    {/* Feedback Messages */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-40"
                            >
                                <CheckCircle2 className="text-green-500 mb-4" size={48} />
                                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400 text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="mt-6 text-xs text-white uppercase tracking-widest font-bold hover:text-zinc-300 transition-colors"
                                >
                                    Send another one
                                </button>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-500 text-sm"
                            >
                                <AlertCircle size={18} />
                                <span>❌ Failed to send message. Please try again.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </SectionWrapper>
    );
}
