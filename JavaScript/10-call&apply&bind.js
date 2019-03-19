// 模拟实现 call 和 apply
// 通过 obj 调用自身属性方法时，this指向obj来实现
Function.prototype.myCall = function(context) {
  var context = context || window
  context.fn = this // foo
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  var result = context.fn(...args)
  // 删除Fn
  delete context.fn
  return result
}

var foo = function() {
  console.log(this.a)
}

foo.myCall({ a: 1 })

Function.prototype.myApply = function(context) {
  var context = context || window
  context.fn = this
  var result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}


// bind 还可以通过 bind 实现柯里化

Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  // 得到第二位后面的参数
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F(){
    // 因为返回了一个函数，我们可以 new F，所以需要判断
    if(this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
