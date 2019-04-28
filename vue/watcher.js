export default class Watcher {
  constructor(vm, expOrFn, cb) {
    this.cb = cb
    this.vm = vm
    this.expOrFn = expOrFn
    this.value = this.get()
  }
  upadate(){
    this.run()
  }
  run(){
    const value = this.get()
    if(value !== this.value) {
      this.value = value
      this.cb.call(this.vm)
    }
  }
  get(){
    Dep.target = this
    const value = this.vm._data[this.expOrFn]
    Dep.target = null
    return value
  }
}