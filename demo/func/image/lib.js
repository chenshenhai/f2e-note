export function img2dataURL(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalWidth;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL();
  return dataURL;
}

export function img2file(img, name = 'img') {
  const dataURL = img2dataURL(img);
  const arr = dataURL.split(',');
  const type = /^data:([^;]+?);base64/.exec(arr[0])[1] || 'image/png';
  const extname = type.split('/')[1] || 'png';
  const str = atob(arr[1]);
  const u8 = new Uint8Array(str.length);
  for (let i = str.length - 1; i >= 0; i--) {
    u8[i] = str.charCodeAt(i);
  }
  const blob = new Blob([u8], {type});
  const file = new window.File([blob], `${name}.${extname}`, {type: type})
  return file;
}

export function file2dataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      resolve(this.result);
    });
    reader.addEventListener('error', function(err) {
      reject(err)
    })
    reader.readAsDataURL(file);
  })
}
