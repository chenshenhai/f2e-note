class MiniPromise {
  constructor(handler) {
    this._val = undefined;
    this._status = 'PENDING'; // FULFILLED, REJECTED
    this._resolveQueue = [];
    this._rejectQueue = [];
    handler(
      this._resolve.bind(this),
      this._reject.bind(this),
    )
  }

  _resolve(val) {
    if (this._status === 'PENDING') {
      this._status = 'FULFILLED';
      this._val = val;
      this._resolveQueue.forEach((fn) => {
        fn(val);
      })
    }
  }

  _reject(val) {
    if (this._status === 'PENDING') {
      this._status = 'REJECTED';
      this._val = val;
      this._rejectQueue.forEach((fn) => {
        fn(val);
      })
    }
  }

  then(resolve, reject) {
    return new MiniPromise((resolveNext, rejectNext) => {
      function runResolve(val) {
        if (typeof resolve === 'function') {
          const res = resolve(val);
          if (res instanceof MiniPromise) {
            res.then(resolveNext, rejectNext);
          } else {
            resolveNext(res);
          }
        } else {
          resolveNext(val);
        }
      }

      function runReject(val) {
        if (typeof reject === 'function') {
          const res = reject(val);
          if (res instanceof MiniPromise) {
            res.then(resolveNext, rejectNext);
          } else {
            rejectNext(res);
          }
        } else {
          rejectNext(val);
        }
      }
      if (this._status === 'FULFILLED') {
        runResolve(this._val);
      } else if (this._status === 'REJECTED') {
        runReject(this._val);
      } else if (this._status === 'PENDING') {
        this._resolveQueue.push(runResolve);
        this._rejectQueue.push(runReject);
      }
    });
  }
}


const p1 = new MiniPromise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello 001');
    resolve(123);
  }, 1000)
})
const p2 = new MiniPromise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello 002');
    resolve(456);
  }, 1000)
})

p1.then((res) => {
  console.log(res); // 123
  return p2;
}).then((res) => {
  console.log(res); // 456
}).then((res) => {
  console.log(res); // undefnied
})