function check(str) {
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(map[str[i]])
    } else if (stack.length > 0 && str[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}


console.log(check('{[()]}'));

console.log(check('()[]{}'));

console.log(check('[(])'));

console.log(check('[(]{)}'));