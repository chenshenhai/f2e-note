// JS-笔试 监听嵌套属性调用次数

function listenObj(obj) {
  const topMap = {
    children: {}
  };
  let readKeys = [];

  function _listen(obj, countMap) {
    Object.keys(obj).forEach(k => {
      countMap[k] = {
        count: 0,
        children: {},
      };
    })
    var proxy = new Proxy(obj, {
      get(target, key, receiver) {
        let data = Reflect.get(target, key, receiver);
        
        if (countMap[key] && countMap[key].count >= 0) {
          countMap[key].count ++;
        }
        console.log('key =', key, countMap[key].count, JSON.stringify(topMap))
        if (typeof data === 'object' && data !== null) {
          return _listen(data, countMap[key].children);
        } else {
          return data
        }
      },
    })
    return proxy;
  }
  const p = _listen(obj, topMap.children);

  p._count = (k) => {
    const keys = k.split('.');
    // console.log(keys, topMap)
    let target = topMap;
    while (keys.length > 0) {
      target = target.children[keys.shift()];
    }
    return target.count;
  }
  return p;
}

var obj = listenObj({
  a: {
    aa: {
      aaa: 1
    }
  },
  // b:'b',
  // c:'c'
});
obj.a.aa.aaa;
obj.a.aa.aaa;
obj.a.aa.aaa;
obj.b;

console.log(obj._count('a')) // 2
console.log(obj._count('a.aa')) // 2
console.log(obj._count('a.aa.aaa')) // 2
console.log(obj._count('b')) // 1
console.log(obj._count('c')) // 0


