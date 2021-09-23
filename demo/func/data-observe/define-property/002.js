

(() => {
  function observeObj(obj) {
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach((key) => {
        observe(obj, key, obj[key])
      });
    }
  }

  function observe(obj, key, val) {
    observeObj(val);
    Object.defineProperty(obj, key, {
      get() {
        return val
      },
      set(newVal) {
        console.log(`set[${key}]: `, newVal);
        if (newVal !== val) {
          val = newVal
        }
      }
    })
  }
  const obj = {
    data: {
      num1: 1
    },
    num2: 2
  }
  observeObj(obj);
  obj.data.num1 = 'a';
  obj.num2 = 'b';
  obj.num3 = 'c';
})()




// --------------