// ===== 节流
var throttle = function(func, delay) {
  var prev = Date.now();
  return function() {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
};

function throttleTimeout(func, delay) {
  let timer = null;
  return function() {
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        timer = null
      }, delay);
    }
  };
}
