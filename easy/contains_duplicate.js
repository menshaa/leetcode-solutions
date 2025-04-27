function hasDuplicate(nums) {
  const integerOccurranceMap = {};
  nums.forEach((num) => {
    if (integerOccurranceMap[num] !== undefined) {
      integerOccurranceMap[num] += 1;
    } else {
      integerOccurranceMap[num] = 1;
    }
  });

  return Object.values(integerOccurranceMap).some((map) => map > 1);
}
