const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('c:/Desktop/abhishek-kumar-portfolio/src/components');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let oldContent = content;

  // Fix avatar background in Hero (Make it a dark/glass theme instead of green)
  content = content.replace(/background=10b981/g, 'background=ffffff&color=000');
  content = content.replace(/background=ffffff&color=fff/g, 'background=ffffff&color=000');

  // Fix residual emerald colors
  content = content.replace(/text-emerald-[0-9]{3}/g, 'text-zinc-200');
  content = content.replace(/from-emerald-[0-9]{3}/g, 'from-zinc-200');
  content = content.replace(/to-emerald-[0-9]{3}/g, 'to-zinc-400');
  content = content.replace(/border-emerald-[0-9]{3}/g, 'border-zinc-500');
  content = content.replace(/bg-emerald-[0-9]{3}/g, 'bg-zinc-200');
  
  // Specific issue identified by user in second screenshot: "Lovely Professional University" text color
  // Let's strip any green text manually just in case
  content = content.replace(/text-green-[0-9]{3}/g, 'text-zinc-200');

  // Fix button contrast
  // Ensure we add hover:text-black where hover:bg-white is used
  // Or just make sure buttons use hover:text-black
  content = content.replace(/hover:bg-white(?!\s*hover:text-black)/g, 'hover:bg-white hover:text-black');
  
  // Also fix cases where bg-white is hovered without text color
  content = content.replace(/hover:text-white group-hover:text-white/g, 'group-hover:text-white');
  
  if (content !== oldContent) {
    fs.writeFileSync(file, content);
    console.log('Fixed styles in: ' + file);
  }
});
