const fs = require('fs');

const file = 'c:/Desktop/abhishek-kumar-portfolio/src/components/sections/Contact.jsx';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  // Inject the glass styling to the contact boxes
  content = content.replace(/className=\" p-8 rounded-xl border border-white\/5/g, 'className=\"bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-xl border border-white/10');
  fs.writeFileSync(file, content);
  console.log('Fixed Contact.jsx');
}
