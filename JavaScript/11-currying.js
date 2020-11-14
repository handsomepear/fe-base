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

function multiply(a, b, c) {
  return a * b * c
}

// 编写可以轻松复用和配置的小代码块

// e:你有一家商店，然后你想给你的优惠顾客10%的折扣：
// function discount(price, duscount) {
//   return price * discount
// }
// 柯里化之后
function discount(discount){
  return price => price * discount
}

const tenPercentDiscount = discount(0.1)
console.log(tenPercentDiscount(500))
console.log(tenPercentDiscount(300))
const twentyPercentDiscount = discount(0.2)
console.log(twentyPercentDiscount(500))
console.log(twentyPercentDiscount(300))


function composite()
