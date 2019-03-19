// ES6
// file a.js
export function a() {}
export function b() {}

// file b.js
export default function() {}

import { a, b } from './a.js'
// import XXX from './b.js'


// CommonJS (Node 独有的规范)
// a.js
module.exports = {
  a: 1
}
// or
exports.a = 1

// file b.js
var module = require('./a')
module.a // log 1