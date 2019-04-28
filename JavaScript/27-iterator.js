// iterator接口主要供for...of使用

function makeIterator(array) {
  var nextIndex = 0
  return {
    next: function() {
      // return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true }
      // 可简写
      return nextIndex < array.length ? { value: array[nextIndex++] } : { done: true }
    }
  }
}

var it = makeIterator(['a', 'b'])

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let arr = ['a', 'b', 'c']
// 原生的遍历器接口
// let iter = arr[Symbol.iterator]()
// console.log(iter.next()) // { value: 'a', done: false }
// console.log(iter.next()) // { value: 'b', done: false }
// console.log(iter.next()) // { value: 'c', done: false }
// console.log(iter.next()) // { value: undefined, done: true }

class RangeIterator {
  constructor(start, stop) {
    this.value = start
    this.stop = stop
  }
  [Symbol.iterator]() {
    return this
  }
  next() {
    var value = this.value
    if (value < this.stop) {
      this.value++
      return { done: false, value: value }
    }
    return {done: true, value: undefined}
  }
}

function range(start, stop) {
  return new RangeIterator(start,stop)
}
for(var val of range(0,3)){
  console.log(val)
}
