const fs = require('fs');

const files = [
  'c:/Desktop/abhishek-kumar-portfolio/src/components/sections/Achievements.jsx',
  'c:/Desktop/abhishek-kumar-portfolio/src/components/sections/Certificates.jsx',
  'c:/Desktop/abhishek-kumar-portfolio/src/components/sections/Projects.jsx',
  'c:/Desktop/abhishek-kumar-portfolio/src/components/sections/Skills.jsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    // Inject glass backings onto orphaned structure borders created by my previous regex strip
    content = content.replace(/className=\" rounded-xl/g, 'className=\"bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl');
    content = content.replace(/className=\" relative rounded-2xl/g, 'className=\"bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative rounded-2xl');
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
});
