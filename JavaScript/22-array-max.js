/**
 * 求最大值
 * Math.max() 返回一组数中的最大值
 */

 const arr = [1,2,3,4,5,6]

 console.log(Math.max(...arr))
 console.log(Math.max.apply(this, arr))

 var arr = this