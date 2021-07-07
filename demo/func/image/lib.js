export function img2dataURL(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalWidth;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL();
  return dataURL;
}

export function img2File() {
  
}