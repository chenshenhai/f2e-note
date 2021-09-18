

function move(arr, n) {
  if ( Math.abs(n) > arr.length ) {
    n = n % arr.length
  }
  return arr.slice(-n).concat(arr.slice(0,-n))
}

var arr = [0, 1, 2, 3, 4, 5];

console.log(move(arr, -2)); // [1, 2, 3, 4, 5, 0]
console.log(move(arr, -1)); // [2, 3, 4, 5, 0, 1]
console.log(move(arr, 1)); // [5, 0, 1, 2, 3, 4]
console.log(move(arr, 2)); // [4, 5, 0, 1, 2, 3]
console.log(move(arr, 3)); // [3, 4, 5, 0, 1, 2]