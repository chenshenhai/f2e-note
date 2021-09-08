function parse(str) {
  // str
  if(/^rgb\(([0-9]{1,3})\,[\s]{0,}([0-9]{1,3})\,[\s]{0,}([0-9]{1,3})\)$/i.test(str) !== true) {
    return null;
  }
  const list = str.match(/([0-9]{1,})/ig);
  const num1 = list[0] * 1;
  const num2 = list[1] * 1;
  const num3 = list[2] * 1;
  return `#${num1.toString(16)}${num2.toString(16)}${num3.toString(16)}`
}

console.log(parse('rgb(255, 255, 255)')) // '#ffffff'
console.log(parse('rgb(33, 150, 243)')) // '#2196f3'
console.log(parse('rgb(255)')) // null
console.log(parse('rgb(255, 11)')) // null
