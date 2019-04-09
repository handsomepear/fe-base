/**
 * 数组去重
 */


const arr = [1,2,3,3,2,4,4]

// Set
console.log(Array.from(new Set(arr))) // [1, 2, 3, 4]
console.log([...new Set(arr)]) // [1, 2, 3, 4]

// 原始
// 用当前项与剩余的相比较 如果发现有跟当前项相同的就重新开始 用当前项的下一项再与余下的比较
Array.prototype.distinct = function(){
  var arr = this,
    result = [],
    i,
    j,
    len = arr.length
    for(i = 0; i < len; i++) {
      for(j = i + 1; j < len; j++) {
        if(arr[i] === arr[j]){
          j = ++i
        }
      }
      result.push(arr[i])
    }
    return result
}

console.log(arr.distinct())