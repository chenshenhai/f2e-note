
function listenObj(obj) {
  let onRead = null;
 
  function _listen(obj, paths = []) {
    var proxy = new Proxy(obj, {
      get(target, key, receiver) {
        const newPaths = [...[], ...paths, ...[key]];
        let data = Reflect.get(target, key, receiver);
        if (typeof data === 'object' && data !== null) {
          data = _listen(data, newPaths);
        }
        if (typeof onRead === 'function' && obj.hasOwnProperty(key)) {
          onRead({
            path: newPaths.join('.'),
            value: Reflect.get(target, key, receiver),
          })
        }
        return data
      },
    })
    return proxy;
  }
  const p = _listen(obj, []);

  p.on = (name, callback) => {
    if (name === 'read') {
      onRead = callback;
    }
  }
  return p;
}

var obj = listenObj({
  a: {
    aa: {
      aaa: 1
    }
  },
});

obj.on('read', (data) => {
  console.log(`read: path=${data.path}, value=${JSON.stringify(data.value)}`)
});

obj.a.aa.aaa;
// read: path=a, value={"aa": {"aaa": 1}}
// read: path=a.aa, value={"aaa": 1}
// read: path=a.aa.aaa, value=1





