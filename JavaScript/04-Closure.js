// 定义：函数A返回了函数B，并且函数B中使用了函数A的变量，函数B就被称为闭包

function A() {
  let a = 1
  return function B() {
    console.log(a)
  }
}

// 循环中使用闭包解决 var 定义函数的问题

// ① 使用setTimeout的第三个参数
/*for(var i = 0; i < 6; i++) {
  setTimeout(function (j) {
    console.log(j)
  }, i*100, i);
}*/

// ② 使用闭包
/*for(var i = 0; i < 6; i++){
  (function (j) {
    setTimeout(function(){
      console.log(j)
    }, j*100);
  })(i)
}*/

// ③ let定义
for (let i = 0; i < 6; i++) {
  setTimeout(function() {
    console.log(i)
  }, i * 100)
}
