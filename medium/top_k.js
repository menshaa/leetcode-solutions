function topKFrequent(nums, k) {
  const numsFrequencyMap = {};
  for (const num of nums) {
    if (numsFrequencyMap[num] !== undefined) {
      numsFrequencyMap[num] += 1;
    } else {
      numsFrequencyMap[num] = 1;
    }
  }
  const arr = Object.entries(numsFrequencyMap).map(([num, freq]) => [
    freq,
    parseInt(num),
  ]);
  arr.sort((a, b) => b[0] - a[0]);

  return arr.slice(0, k).map((pair) => pair[1]);
}
