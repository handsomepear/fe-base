console.log('script start')

// macrotask(task)
setTimeout(() => {
  console.log('setTimeout')
}, 0)


// microtask(jobs)
new Promise(resolve => {
  console.log('Promise');
  resolve()
})
.then(() => {
  console.log('promise1');
})
.then(() => {
  console.log('promise2');
})

console.log('script end')

// script start => Promise => script end => promise1 => promise2 => setTimeout
// 正确的顺序
/**
 * 1.执行同步代码，这属于宏任务
 * 2.执行栈为空 查询是否有微任务需要执行
 * 3.执行所有的微任务
 * 4.必要的话渲染UI
 * 5.然后开始下一轮Event loop 执行宏任务中的异步代码
 */
