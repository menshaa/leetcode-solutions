function twoSum(nums, target) {
  let i;
  let j;
  let targetArray;
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) targetArray = [i, j];
    }
  }

  return targetArray;
}
