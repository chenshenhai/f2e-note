function create(len) {
  let str = '';
  while (str.length < len) {
    str += Math.random().toString(36).substr(2);
  }
  return str.substring(0, len);
}

console.log(create(2))