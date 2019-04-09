/**
 * 排序也是老生常谈的基本算法了
 */

const arr = [3, 2, 4, 5, 1]

// sort 方法
console.log(arr.sort()) // 升序
console.log(arr.sort((a, b) => b - a)) // 降序

// 冒泡排序
// 内部循环找到最大值 放到最右边
Array.prototype.bubleSort = function() {
  let arr = this,
    len = arr.length
  for (let outer = 0; outer < len - 1; outer++) {
    for (let inner = 0; inner < len - 1 - outer; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        // 升序
        ;[arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
      }
    }
  }
  return arr
}

console.log(arr.bubleSort())

/**
 * 选择排序
 */
// 找到最小值放到最前面，然后再找剩下来的最小值放到第二位 依次
Array.prototype.selectSort = function() {
  let arr = this,
    len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

console.log(arr.selectSort());
