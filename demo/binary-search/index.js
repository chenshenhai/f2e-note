function binarySearch(target, arr, start, end) {
  function _search(target, arr, start, end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      return _search(target, arr, 0, mid);
    } else if (target > arr[mid]) {
      return _search(target, arr, mid + 1, end);
    }
    return -1;
  }
  return _search(target, arr, start, end);
}

const arr = [10,11,12,13,14,15,16,17,18,20];
console.log(binarySearch(13, arr, 0, arr.length))