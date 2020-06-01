function quickSort(arr) {
  function _sort(a) {
    if (a.length <= 1) {
      return a;
    }
    const mid = Math.floor(a.length / 2);
    const midNum = a[mid];
    const left = [];
    const right = [];
    a.forEach((item) => {
      if (item < midNum) {
        left.push(item);
      } else if (item > midNum) {
        right.push(item);
      }
    });
    return [ ..._sort(left), ...[midNum], ..._sort(right)];
  }
  return _sort(arr);
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const res = quickSort(arr);
console.log(res);