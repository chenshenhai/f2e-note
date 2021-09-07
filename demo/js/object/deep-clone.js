function is(data) {
  return Object.prototype.toString.call(data).replace(/[\]|\[]{1,1}/ig, '').split(' ')[1];
}

function deepclone(target) {
  function _clone(t) {
    const type = is(t);
    if (['Null', 'Number', 'String', 'Undefined'].indexOf(type) >= 0) {
      return t;
    } else if (type === 'Array') {
      const arr = [];
      t.forEach((item) => {
        arr.push(_clone(item));
      });
      return arr;
    } else if (type === 'Object') {
      const obj = {};
      const keys = Object.keys(t);
      keys.forEach((key) => {
        obj[key] = _clone(t[key]);
      });
      return obj;
    }
  }
  return _clone(target);
}

const data = {
  a: {
    b: {
      c: 123
    }
  },
  arr: [
    {
      a: {
        b: 1,
      }
    }
  ],
  str: 'hello',
  null: null,
  num: 1.23
}

const obj = deepclone(data);
data.a.b = 456;
console.log(JSON.stringify(obj));