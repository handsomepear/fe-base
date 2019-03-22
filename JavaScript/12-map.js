console.log(['1', '2', '3'].map(parseInt))
// parseInt('1', 0)
// parseInt('2', 1)
// parseInt('3', 2)
// parseInt 第二个参数如果小于 2 或者大于 36，则 parseInt() 将返回 NaN。

// console.log([1,[2],[3]].flatMap(v => v + 1)) // => [2,3,4] 可降维
