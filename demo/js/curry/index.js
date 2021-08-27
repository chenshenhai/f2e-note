
// function curry(fn, args) {
//   let len = fn.length || 0;
//   args = args || [];
//   return function(...rest) {
//     let _args = [...args, ...rest];
//     if (_args.length < len) {
//       return curry.call(this, fn, _args);
//     } else {
//       return fn.apply(this, _args)
//     }
//   }
// }


function curry(fn, args) {
  let len = fn.length || 0;
  args = args || [];
  return function(...rest) {
    const _args = [...args, ...rest];
    if (_args.length < len) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  }
}


function add(a, b, c) {
  return a + b + c;
}
const fn = curry(add);

console.log(fn(1, 2, 3)); 
console.log(fn(1, 2)(3));
console.log(fn(1)(2)(3));