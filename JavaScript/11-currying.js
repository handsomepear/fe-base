// 简单实现

function createCurry(func, args) {
  var arity = func.length
  var args = args || []

  return function() {
    var _args = [].slice.call(arguments)
    ;[].push.apply(_args, args)

    if(_args.length < arity) {
      return createCurry.call(this, func, _args)
    }

    // 参数收集完毕
    return func.apply(this, _args)
  }
}


