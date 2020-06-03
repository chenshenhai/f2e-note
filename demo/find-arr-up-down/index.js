function find(arr) {
  while(arr.length > 0) {
    const item = arr.shift();
    if (item > arr[0]) {
      return item;
    }
  }
}

const arr = [1,2,3,4,5,6,9,8,7,6,5,4];

console.log(find(arr));