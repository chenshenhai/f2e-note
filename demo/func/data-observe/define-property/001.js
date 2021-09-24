// 001
(() => {
  function observe(obj, key, val) {
    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal) {
        if (newVal !== val) {
          console.log(`set[${key}]: `, newVal);
          val = newVal;
        }
      }
    })
  }
  const data = {}
  observe(data, 'num', 0);
  data.num = 123
})()





// --------------