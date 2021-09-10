function parse(str) {
  let obj = {};
  str.replace(/[a-z]/ig, (match) => {
    if (!obj[match]) {
      obj[match] = 1;
    } else {
      obj[match]++;
    }
  })
  return obj;
}


console.log(parse('abc123ABCabc'))
