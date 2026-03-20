import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = "" }) {
    return (
        <section id={id} className={`py-20 md:py-32 relative ${className}`}>
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
