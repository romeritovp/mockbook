// Builds mockbook.bundle.js: mockbook.css (minified) injected by a small loader + mockbook.js.
// Usage: node build.js
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const css = fs.readFileSync(path.join(dir, 'mockbook.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')       // comments
  .replace(/\s+/g, ' ')                    // collapse whitespace
  .replace(/\s*([{};,>])\s*/g, '$1')       // spaces around punctuation
  .replace(/:\s+/g, ':')
  .replace(/;}/g, '}')
  .trim();
const js = fs.readFileSync(path.join(dir, 'mockbook.js'), 'utf8');

const loader =
  '(function(){if(typeof document==="undefined"||document.getElementById("mkb-css"))return;' +
  'var s=document.createElement("style");s.id="mkb-css";s.textContent=' + JSON.stringify(css) + ';' +
  '(document.head||document.documentElement).appendChild(s);})();\n';

fs.writeFileSync(path.join(dir, 'mockbook.bundle.js'), loader + js);
console.log('mockbook.bundle.js written (' + (loader.length + js.length) + ' bytes)');
