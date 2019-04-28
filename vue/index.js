import Dep from './dep'
export default class Observer {
  constructor(value) {
    this.value = value
    this.walk(value)
  }
  // 递归，让每个属性可以observe
  walk(value) {
    Object.keys(value).forEach((key) => this.convert(key, value[key]))
  }
  convert(key, value) {
    defineReactive(this.value, key, value)
  }
}


export function defineReactive(obj, key, val) {
  var dep = new Dep()
  var childOb = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      if(Dep.target) {
        // 如果是 watcher 那么就添加到subs中
        dep.addSub(Dep.target)
      }
      return val
    },
    set: newVal => {
      var value = val
      if(newVal === value) {
        return
      }
      val = newVal
      childOb = observe(newVal) // 如果新赋值的值是个复杂类型。再递归它，加上set，get
      dep.notify()
    }
  })
}

export function observe(value, vm) {
  if(!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}
