const body = document.querySelector('body');
const docScript = document.querySelector('#doc-script').innerText;
const docHTML = document.querySelector('#doc-html').innerHTML;

const data = {
  w: 440,
  h: 320,
  desc: {
    html: docHTML,
    width: 400,
    height: 200, 
  }
}
const scaleX = data.w / data.desc.width;
const scaleY = data.h / data.desc.height;
const iframeSrcDoc = `
<html>
  <head>
    <style>
      html, body {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="content" 
      style="
      transform: 
        scaleX(${data.w/data.desc.width}) scaleY(${data.h/data.desc.height}) translateX(${(data.w - data.desc.width) / scaleX / 2}px) translateY(${(data.h - data.desc.height) / scaleY / 2}px);
    ">
      ${docHTML}
    </div>
  </body>
  <script>
  ${docScript}
  initEvent();
  </script>
</html>
`

const iframe = document.createElement('iframe');
iframe.style = 'margin-top: 100px; margin-left: 80px; border: 1px solid #c0c0c0;'
iframe.width = data.w;
iframe.height = data.h;
iframe.srcdoc = iframeSrcDoc;
iframe.sandbox = "allow-scripts"
body.appendChild(iframe);


window.addEventListener('message', (data) => {
  console.log('message: data ====', data);
}, false)



