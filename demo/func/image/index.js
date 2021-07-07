import { img2dataURL, img2file, file2dataURL } from './lib.js';

const img = document.querySelector('#img');
const body = document.querySelector('body');
function appendImage(src, name = '') {
  const chidImg = new Image();
  chidImg.width = 100;
  chidImg.src = src;
  chidImg.setAttribute('data-type', name)
  body.appendChild(chidImg);
}

appendImage(img2dataURL(img), 'img2dataURL');

const file = img2file(img);
file2dataURL(file).then((str) => {
  appendImage(str, 'file2dataURL')
}).catch(console.log); 
