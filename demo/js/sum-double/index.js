function sum() {
  let count = 0;
  function countArgs(args) {
    for (let i = 0; i < args.length; i++) {
      count += args[i];
    }
  }
  countArgs(arguments);
  function _sum() {
    countArgs(arguments);
    return count;
  }
  return _sum;
}

console.log(sum(1,2,3,4)(5,6))