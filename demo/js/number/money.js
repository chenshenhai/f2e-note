function parse(num) {
  num = parseFloat(num.toFixed(2));
  let [integer, decimal] = num.toString().split('.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
  return integer + '.' + (decimal ? decimal : '');
}

console.log(parse(1234567.890)) // 1,234,567.89
console.log(parse(123456.7890)) // 123,456.79
console.log(parse(12345.67890)) // 123,456.79