// JS 面试之数组的几个不 low 操作

/**
 * 1.扁平化 n 维数组
 */
 
// 终极篇 Array.prototype.flat(depth) // 参数为数组的维度 
var ret1 = [1,[2,3]].flat(2) // [1, 2, 3]
console.log([1,[2,3,[4,5]]].flat(3)) // [1, 2, 3, 4, 5]
var ret2 = [1,[2,3,[4,5],[6,7]]].flat(Infinity) // 使用 infinity 可以展开任意维度的数组
console.log(ret2) // [1, 2, 3, 4, 5, 6, 7]

function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    // concat 可以接受多个参数 可以是任意类型 如果是数组的话 会被展开合并
    arr = [].concat(...arr)
  }
}

// 使用 reduce

var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
console.log(arr1.reduce((acc, val) => acc.concat(val), [])) // 只可以扁平二维数组
// 递归扁平化
function flattenDeep(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), [])
}
console.log(flattenDeep(arr1))
// 不使用递归
function falltenNormal(input) {
  const stack = [...input] // 展开数组的每一项
  const res = [] // 预留一个空数组 用来保存展开后的结果
  while(stack.length) {
    const next = stack.pop()
    if(Array.isArray(next)) {
      // 如果是数组的话 就通过 ...展开符先扁平一维 并且放回原数组
      stack.push(...next)
    }else {
      // 否则的话 就push到预留的数组当中
      res.push(next)
    }
  }
  return res.reverse()
}

console.log(falltenNormal(arr1))
