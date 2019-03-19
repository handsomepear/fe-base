// 袖珍版
// func 是用户传入需要防抖的函数
// wait 是等待时间
const debounceMini = (func, wait = 50) => {
  let timer = 0
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait);
  }
}

// 带立即执行的防抖

function now (){
  return +new Date()
}

/**
 * 防抖函数 返回函数连续调用时，空闲时间必须大于或等于wait，func才会执行
 * 
 * @param {function} func 回调函数
 * @param {number} wait 表示时间窗口的间隔
 * @param {boolean} immediate 设置为true，是否立即调用函数
 * @return {function} 返回客户调用函数
 */
function debounce (func, wait = 50, immediate = true) {
  let timer, context, args
  // 延迟执行函数
  const later = () => setTimeout(() => {
    // 延迟执行函数执行完毕，清空缓存的定时器序号
    timer = null
    // 延迟执行的情况下，函数会在延迟函数中执行
    // 使用到之前缓存的参数和上下文
    if(!immediate) {
      func.apply(context, args)
      context = args = null
    }
  }, wait);
  // 这里返回的函数是每次实际调用的函数
  return function(...params) {
    // 如果没有创建延迟执行函数（later）,就创建一个
    if(!timer) {
      timer = later()
      // 是否立即执行
      // 否则缓存参数和调用上下文
      if(immediate) {
        func.apply(this,params)
      }else {
        context = this
        args = params
      }
    }else {
      clearTimeout(timer)
      timer = later()
    }
  }
}