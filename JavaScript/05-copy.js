
// 浅拷贝

let a = {
  age: 1
}

// let b = Object.assign({}, a)
let b = {...a}
a.age = 2
console.log(b.age)


// 深拷贝
let d = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}

let c = JSON.parse(JSON.stringify(d))
d.jobs.first = 'native'
console.log(c.jobs.first) // FE

// JSON.parse(JSON.stringify) 
let e = {
  age: undefined,
  sex: Symbol('male'),
  jobs: function(){},
  name: 'yck'
}

let f = JSON.parse(JSON.stringify(e))
console.log(f) // {name: yark}  忽略了undefined symbol function

// module 大致实现

var module = {
  exports: {}
}
var load = function(module) {
  var a = 1
  module.exports = a
  return module.exports
}

// AMD
define(['./a', './b'], function(a, b) {
  a.do()
  b.do()
})

define(function(require, exports, module) {
  var a = require('./a')
  a.doSomething()
  var b = require('./b')
  b.doSomething()
})