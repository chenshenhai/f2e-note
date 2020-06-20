
function throttle(fn, timeout = 100) {
  let isFinish = true;
  return function() {
    if (isFinish !== true) {
      return;
    }
    isFinish = false;
    setTimeout(() => {
      if (typeof fn === 'function') {
        fn.apply(this, arguments);
      }
      isFinish = true;
    }, timeout);
  }  
}



const func = throttle(function() {
  const d = new Date();
  console.log(`${d.getMinutes()}:${d.getSeconds()}`);
}, 2000);

setInterval(() => {
  func();
}, 50);