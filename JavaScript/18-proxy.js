// const p = new Proxy(target, handler)

let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}

let obj = {a : 1}
let value
let p = onWatch(obj, v => {
  value = v
}, (target, property) => {
  console.log(`Get '${property}' = ${target[property]}`)
})
p.a = 2
console.log(p.a)