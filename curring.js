function add(a) {
  var sum = a;
  if (!a) {
    return sum;
  }
  return function(b) {
    sum = a + b;
    return add(b);
  };
}
var ret = add(1)();
console.log(ret);
