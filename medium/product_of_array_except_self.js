function productExceptSelf(nums) {
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      product *= nums[j];
    }
    results.push(product);
  }
  return results;
}
