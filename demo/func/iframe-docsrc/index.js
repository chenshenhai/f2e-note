const body = document.querySelector('body');
const docScript = document.querySelector('#doc-script').innerText;
const docHTML = document.querySelector('#doc-html').innerHTML;


console.log(docScript);
console.log(docHTML);

const iframe = document.createElement('iframe');

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
iframe.srcdoc = iframeSrcDoc;
body.appendChild(iframe);

console.log('Hello World')


