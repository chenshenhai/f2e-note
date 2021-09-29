function parse(str) {
  return parseInt(`0x${str}`);
}

console.log(parse('11')) //17
console.log(parse('10')) //15
console.log(parse('f')) // 15
console.log(parse('a')) // 10


