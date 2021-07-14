export function svg2base64(svg) {
  return new Promise((resolve, reject) => { 
    const _svg = svg;
    const blob = new Blob([_svg], { type: 'image/svg+xml;charset=utf-8'});
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function (event) {
      const base64 = event?.target?.result;
      resolve(base64)
    };
    reader.onerror = function(err) {
      reject(err);
    };
  });
}