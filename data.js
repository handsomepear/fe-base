const twoSum = (nums, target) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in obj) {
      // 如果当前值已经存到了对象里面 那么就表示有值 跟 当前匹配 所以就直接返回
      return [obj[num], i];
    } else {
      // 将需要的值跟匹配的索引存起来 key=需要的数值：value=当前值的索引
      obj[target - num] = i;
    }
  }
};
