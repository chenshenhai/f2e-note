
function debounce(fn, timeout = 100) {
  let id = -1;
  return function() {
    if (id >= 0) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      if (typeof fn === 'function') {
        fn.apply(this, arguments);
      }
    }, timeout);
  }
}

const input = document.querySelector('#J_Input');
const display = document.querySelector('#J_Display');


const callback = debounce((str) => {
  display.innerText = str;
}, 200);

input.addEventListener('input', (e) => {
  const val = input.value;
  callback(val);
})