const OP = Object.prototype

/**
 * 需要重写的数组的方法
 */
const OAM = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
class Jsonob {
  constructor(obj, callback) {
    if (OP.toString.call(obj) !== '[object Object]') {
      console.error('This paramter must be an object: ' + obj)
    }
    this.$callback = callback
    this.observe(obj)
  }

  observe(obj) {
    if (OP.toString.call(obj) === '[object Array]') {
      this.overrideArrayProto(obj)
    }
    Object.keys(obj).forEach(function(key) {
      var oldVal = obj[key]
      Object.defineProperty(obj, key, {
        get: function() {
          return oldVal
        },
        set: function(newVal) {
          // return this.$callback(newVal)
          if (oldVal !== newVal) {
            if (OP.toString.call(newVal) === '[object Object]' || OP.toString.call(newVal) === '[object Array]') {
              this.observe(newVal)
            }
            this.$callback(newVal, oldVal)
            oldVal = newVal
          }
        }.bind(this)
      })
      if (OP.toString.call(obj[key]) === '[object Object]' || OP.toString.call(obj[key]) === '[object Array]') {
        this.observe(obj[key])
      }
    }, this)
  }

  overrideArrayProto(array) {
    // 保存原始的原型
    var originalProto = Array.prototype,
      // 通过Object.create创建一个对象，该对象的原型就是Array.prototype
      overrideProto = Object.create(originalProto),
      self = this,
      result
    // 遍历需要重写的数组方法
    Object.keys(OAM).forEach(function(key, index, array) {
      var method = OAM[index],
        oldArray = []
      Object.defineProperty(overrideProto, method, {
        value: function() {
          console.log(this.length) // 3 this 指向 调用数组方法的对象
          oldArray = this.slice(0)
          var arg = [].slice.apply(arguments)
          // 调用原始原型的数组方法
          result = originalProto[method].apply(this, arg)
          // 对新的数组进行监测
          self.observe(this)
          // 执行回调
          self.$callback(this, oldArray)
          return result
        },
        writable: true,
        enumerable: false,
        configurable: true
      })
    }, this)
    array.__proto__ = overrideProto
  }
}
