function observe(obj) {
  if (typeof obj !== 'object' && obj != null) {
      return obj
  }
  const observed = new Proxy(obj, {
    get(target, key, receiver) {
      let data = Reflect.get(target, key, receiver)
      if (data !== null && typeof data === 'object') {
        data = observe(data);
      }
      // console.log(`get ${key}: ${data}`)
      return data
    },
    set(target, key, value, receiver) {
      const data = Reflect.set(target, key, value, receiver)
      console.log(`set ${key}: ${value}`)
      return data
    },
    deleteProperty(target, key) {
      const data = Reflect.deleteProperty(target, key)
      console.log(`delete ${key}: ${data}`)
      return data
    }
  })
  return observed
}

const arr = [0, 1, 2];
const arr2 = observe(arr);
arr2[0] = 'a';
arr2[3] = 'b';
arr2.push('c');

// ------------------
const obj = {
  data: {
    num1: 1
  },
  num2: 2
}
const obj2 = observe(obj);
obj2.data.num1 = 'a';
obj2.num2 = 'b';
obj2.num3 = 'c';