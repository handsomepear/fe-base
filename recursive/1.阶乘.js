/**
 * 计算 n 的阶乘
 * @param {*} n
 */
function f(n){
  if(n <= 2) {
    return n
  }
  return n * f(n - 1)
}

console.log(f(4))