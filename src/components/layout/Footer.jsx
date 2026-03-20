import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5  py-12">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg shrink-0 border border-zinc-500/30 bg-white/10 flex items-center justify-center text-zinc-300 font-bold text-lg">
                        DV
                    </div>
                    <span className="text-slate-400 font-medium">© {new Date().getFullYear()} Abhishek Kumar</span>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full  flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full  flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:abhishek1709kumar@gmail.com" className="w-10 h-10 rounded-full  flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
