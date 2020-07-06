function maxConbination(str) {
  function _conb(s) {
    if (s.length <= 1) {
      return [s];
    }
    const result = [];
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const newStr = s.slice(0,i) + s.slice(i+1, s.length);
      const list = _conb(newStr);
      list.forEach((item) => {
        result.push(char + item);
      })
    }
    return result;
  }
  return _conb(str);
}

console.log(maxConbination('abc'))
// console.log(maxConbination('abcd'))