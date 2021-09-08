function findMaxDiffStr(str) {
  if (str.length <= 1) {
    return str;
  }
  let start = 0;
  let end = 1;
  let maxStr = str.substring(start, end);

  function check(s) {
    for(let i = 0; i < s.length; i++) {
      const char = s[i];
      if (s.indexOf(char) !== s.lastIndexOf(char)) {
        return false;
      }
    }
    return true;
  }

  while(start < str.length - 1 && start < end && end <= str.length) {
    if (end <= str.length) {
      end ++;
    }
    if (check(str.substring(start, end))) {
      if (maxStr.length < (end - start)) {
        maxStr = str.substring(start, end)
      } 
    } else {
      start ++;
    }
  }
  return maxStr;
}

console.log(findMaxDiffStr('aaaaaaaaaaaaaaaa12aa'));

console.log(findMaxDiffStr('a'));

console.log(findMaxDiffStr('ab'));

console.log(findMaxDiffStr('aaaaaa'));

console.log(findMaxDiffStr('aaa123456aaadef'));


