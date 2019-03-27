var data = {name: 'zps'}
observe(data)

let name = data.name

data.name = 'yyy'


function observe(obj) {
  if(!obj || typeof obj !== 'object') {
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}



function defineReactive(obj, key, val) {
  // 递归子属性


  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      console.log('get value')
      return val
    },
    set: function reactiveSetter(newVal) {
      console.log('change value')
      val = newVal
    }
  })
}