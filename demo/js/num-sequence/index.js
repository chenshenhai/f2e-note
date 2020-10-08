
function parseN(result) {
  // n(n+1)/2 = result;
  // n^2+n - 2*result = 0;
  // a = 1, b = 1, c=-2*result
  const a = 1; 
  const b = 1;
  const c = -2*result;
  
  const n1 = (b*(-1) + Math.sqrt(b*b - 4*a*c))/(2*a);
  const n2 = (b*(-1) - Math.sqrt(b*b - 4*a*c))/(2*a);
  return Math.max(n1, n2);
}

console.log(parseN(253));