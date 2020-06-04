function A(name) {
  this.name = name;
  this.say = function() {
    console.log(`Hi! I am ${this.name}`)
  }
}

// const a = new A('Mick');
// a.say();

function newObj() {
  const Constructor = Array.prototype.shift.call(arguments);
  const obj = {};
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);
  return obj;
}
const a = newObj(A, 'Mick');
a.say();