const obj = {
  data: 1,
  func: function() {
    console.log(this.data);
  }
}

Function.prototype.bind2 = function (target) {
  let _this = this;
  return function() {
    _this.apply(target);
  }
}

const func = obj.func.bind2(obj);
func();