/**
 * 斐波那契数列 计算第n个值
 * @param {*} n
 */
function f(n){
  if(n <= 2) {
    return n
  }
  return f(n - 2) + f(n-1)
}
console.log(f(4))