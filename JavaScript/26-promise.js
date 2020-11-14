const promise11 = new Promise((resolve, reject) => reject());

const promise22 = promise1.then(null, function () {
  return {
    get then() {
      console.log('hello');
      return 123;
    },
  };
});

// promise A+ 规范 不管 reject 还是 resolve 只要 return value 那么就一定是 onfulfilled
promise22.then(
  (res) => {
    console.log(res);
    console.log('resolve');
  },
  () => {
    console.log('reject');
  }
);
