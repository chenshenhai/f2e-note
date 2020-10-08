function merge1(arr1, arr2) {
  let result = [];
  while(arr1.length > 0 || arr2.length > 0) {
    if (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] < arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    } else if (arr1.length > 0) {
      result.push(arr1.shift());
    } else if (arr2.length > 0) {
      result.push(arr2.shift());
    }
  }
  return result;
}

function merge2(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}


var arr1 = [1,3,5,7,9,11];
var arr2 = [0,2,4,6,8,10];
console.log(merge1(arr1, arr2));

var arr1 = [1,3,5,7,9,11];
var arr2 = [0,2,4,6,8,10];
console.log(merge2(arr1, arr2));