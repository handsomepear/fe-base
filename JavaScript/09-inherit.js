// ===== 继承

// ES5
/*function Super() {}
Super.prototype.getNumber = function() {
  return 1
}

function Sub() {}
let s = new Sub()
Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true
  }
})*/

// ES6 
class Super {
  constructor(){}

  getNumber(){
    return 1
  }
}

class Sub extends Super {
  constructor(props){
    super(props)
  }
}

console.log(new Sub().getNumber())


// 例：如果不是 Date 构造出来的实例的话 是不能调用 Date 里面的函数的

function MyDate(){}

MyDate.prototype.test = function(){
  return this.getTime()
}

let d = new Date()
Object.setPrototypeOf(d, MyDate.prototype)
Object.setPrototypeOf(MyDate.prototype, Date.prototype)
console.log(d.test())