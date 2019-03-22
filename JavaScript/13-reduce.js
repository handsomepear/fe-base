// arr.reduce(function(prev,cur,index,arr){}, initialValue)
// prev 表示上一次回调函数的返回值
// cur 表示当前正在处理的元素
// index 表示当前正在处理的数组元素的索引

// 1.求数组项最大值
// var max = arr.reduce((prev, cur) => Math.max(prev, cur)) 

var arr = [1,2,1,3,4,45,5,1]
// 2. 数组去重
var newArr = arr.reduce((prev, cur) => {
  prev = Array.isArray(prev) ? prev : [prev]
  prev.indexOf(cur) === -1 && prev.push(cur)
  return prev
})

console.log(newArr)




// 多维数组降维
const flattenDeep = arr => Array.isArray(arr) 
? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
: [arr]

// console.log(flattenDeep([[1,[2],3], [3,4]]))

