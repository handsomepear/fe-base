
// 通过判断对象的原型链中是不是能找到类型的 prototype

function instanceOf(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while(true) {
    if(left === null) {
      return false
    }
    if(prototype === left) {
      return true
    }
    left = left.__proto__
  }
}

console.log(instanceOf('123', Number))