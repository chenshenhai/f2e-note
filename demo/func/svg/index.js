import { svg2base64 } from './lib.js';

const svgDOM = document.querySelector('#svg');
const svg = svgDOM.innerHTML;
const body = document.querySelector('body');

svg2base64(svg).then((base64) => {
  const img = new Image();
  img.src = base64;
  img.width = 100;
  body.appendChild(img);
}).catch(console.log);