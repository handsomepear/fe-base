const promise1 = new Promise((resolve) => setTimeout(resolve, 1000));

const promise2 = Promise.reject(200);

// 由于promise2 onRejected的状态 所以Promise.all就是onRejected状态
// fixme: 可以通过catch捕获的方式，将promise.all的状态置为onFulfilled
Promise.all([
  promise1.catch(() => {
    return { status: 'fail' };
  }),
  promise2.catch(() => {
    return { status: 'fail' };
  }),
])
  .then((res) => {
    if (res && res.status === 'fail') {
      console.log('失败了');
    }
    console.log(res);
    console.log('resolve');
  })
  .catch(() => {
    console.log('reject');
  });

// promise chain
const promiseList = [() => promise1, () => promise2];
async function main() {
  console.log(new Date().getTime());
  for await (const createPromise of promiseList) {
    createPromise();
    console.log(new Date().getTime());
  }
}

main();

// 通过promise.race 做超时处理
const TimeOutFn = (url, time) => {
  const timeOut = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求超时');
    }, time);
  });

  const FetchData = fetch(url);

  return Promise.race([timeOut, FetchData]);
};

TimeOutFn('https://dog.ceo/api/breeds/image/random', 2).catch((res) => {
  console.log(res);
});

// promise 终止 实际上就是是否要终止promise去执行promise完成之后的动作

let cancel = false;

promise2
  .then(() => {
    if (cancel) {
    }
  })
  .catch(() => {
    if (cancel) {
    }
  });

const p = new Promise((resolve) => setTimeout(resolve, 3000));

p.then(() => {
  return new Promise(() => {});
})
  .then(() => {
    console.log('resolve');
  })
  .catch(() => {
    console.log('reject');
  });
