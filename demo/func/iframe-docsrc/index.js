const body = document.querySelector('body');
const docScript = document.querySelector('#doc-script').innerText;
const docHTML = document.querySelector('#doc-html').innerHTML;

const data = {
  html: docHTML,
  w: 400,
  h: 320,
}
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
    ${docHTML}
  </body>
  <script>
  ${docScript}
  initEvent();
  </script>
</html>
`

const iframe = document.createElement('iframe');
iframe.width = data.w;
iframe.height = data.h;
iframe.srcdoc = iframeSrcDoc;
iframe.sandbox = "allow-scripts"
body.appendChild(iframe);


window.addEventListener('message', (data) => {
  console.log('message: data ====', data);
}, false)



