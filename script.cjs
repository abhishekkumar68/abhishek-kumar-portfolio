const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('c:/Desktop/abhishek-kumar-portfolio/src/components');
files.push('c:/Desktop/abhishek-kumar-portfolio/src/App.jsx');
files.push('c:/Desktop/abhishek-kumar-portfolio/src/pages/Home.jsx');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let oldContent = content;

    // Remove opaque backgrounds
    content = content.replace(/bg-\[#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\]/g, '');

    content = content.replace(/bg-slate-900/g, 'bg-transparent');
    content = content.replace(/bg-\[#1e293b\]/g, 'bg-white/5 backdrop-blur-[2px]');
    content = content.replace(/bg-\[#111827\]/g, 'glass-card');
    content = content.replace(/bg-\[#0f172a\]/g, 'bg-transparent');
    content = content.replace(/bg-\[#0b1120\]/g, 'bg-transparent');

    content = content.replace(/from-emerald-400 to-teal-500/g, 'from-white to-slate-400');

    content = content.replace(/text-emerald-400/g, 'text-zinc-300');
    content = content.replace(/text-emerald-500/g, 'text-white');
    content = content.replace(/text-teal-400/g, 'text-zinc-400');
    content = content.replace(/text-teal-500/g, 'text-zinc-400');
    content = content.replace(/bg-emerald-500/g, 'bg-white');

    if (file.includes('CustomCursor')) {
        content = content.replace(/border-emerald-400\/50/g, 'border-white/50');
        content = content.replace(/shadow-\[0_0_10px_#10b981\]/g, 'shadow-[0_0_15px_rgba(255,255,255,0.8)]');
        content = content.replace(/rgba\(16, 185, 129/g, 'rgba(255, 255, 255');
    }

    content = content.replace(/bg-emerald-600 hover:bg-emerald-500/g, 'bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md');
    content = content.replace(/bg-emerald-600/g, 'bg-white/10 border border-white/10 backdrop-blur-md');

    content = content.replace(/hover:border-emerald-500\/30/g, 'hover:border-white/30');
    content = content.replace(/hover:border-emerald-500\/50/g, 'hover:border-white/50');
    content = content.replace(/group-hover:text-emerald-400/g, 'group-hover:text-white');

    content = content.replace(/from-emerald-500 to-teal-500/g, 'bg-white/80');

    content = content.replace(/border-\[#1e293b\]/g, 'border-white/10');
    content = content.replace(/shadow-\[0_0_40px_rgba\(16,185,129,0\.15\)\]/g, 'shadow-[0_0_40px_rgba(255,255,255,0.1)]');

    content = content.replace(/rounded-full blur-3xl/g, 'bg-white/10 rounded-full blur-[100px]');

    if (file.includes('Home.jsx') && !content.includes('Starfield')) {
        content = content.replace(/import Hero from/, 'import Starfield from \"../components/ui/Starfield\";\nimport Hero from');
        content = content.replace(/<main className="flex-1 relative z-10 w-full mb-20">/, '<main className="flex-1 relative z-10 w-full mb-20">\n        <Starfield />');
    }

    if (content !== oldContent) {
        fs.writeFileSync(file, content);
        console.log('Processed styling rest. on: ' + file);
    }
});
