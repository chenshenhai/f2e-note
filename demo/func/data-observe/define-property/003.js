

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
  const arr = [0, 1, 2];
  observeObj(arr);

  arr[0] = 'a';
  arr[3] = 'b' 
  arr.push('abc');
})()




// --------------