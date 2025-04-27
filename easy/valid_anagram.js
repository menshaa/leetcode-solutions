function isAnagram(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) return false;

  const stringOneLetterOccuranceMap = {};
  for (const one of stringOne) {
    if (stringOneLetterOccuranceMap[one] !== undefined) {
      stringOneLetterOccuranceMap[one] += 1;
    } else {
      stringOneLetterOccuranceMap[one] = 1;
    }
  }

  const stringTwoLetterOccuranceMap = {};
  for (const two of stringTwo) {
    if (stringTwoLetterOccuranceMap[two] !== undefined) {
      stringTwoLetterOccuranceMap[two] += 1;
    } else {
      stringTwoLetterOccuranceMap[two] = 1;
    }
  }

  for (const key of Object.keys(stringOneLetterOccuranceMap)) {
    if (stringOneLetterOccuranceMap[key] !== stringTwoLetterOccuranceMap[key]) {
      return false;
    }
  }
  return true;
}
