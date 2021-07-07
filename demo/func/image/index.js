import { img2dataURL } from './lib.js';

const img = document.querySelector('#img');
const body = document.querySelector('body');

const dataURL = img2dataURL(img);
const img2 = new Image();
img2.width = 100;
img2.src = dataURL;
img2.setAttribute('data-type', 'img2dataURL')
body.appendChild(img2);




