// 001
(() => {
  const num1 = document.querySelector('#num1');
  const btn1 = document.querySelector('#btn1');

  function reactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal
          num1.innerText = val;
        }
      }
    })
  }
  const data = {}
  reactive(data, 'num', 0);

  btn1.addEventListener('click', () => {
    data.num = data.num + 1;
  });
})()



// --------------