function encode(strs) {
  let encodedString = "";

  /**
   * Encoding approach: Use string length + # + string itself
   * Sample string: "hussein"
   * Encoded string: "7#hussein"
   */
  for (const str of strs) {
    encodedString += str.length + "#" + str;
  }

  return encodedString;
}

function decode(str) {
  const decodedStrings = [];
  // Index of start of a string
  let i = 0;
  while (i < str.length) {
    // Index used to locate the '#'
    let j = i;

    // Locating the '#'
    while (str[j] !== "#") {
      j++;
    }
    const stringLength = parseInt(str.substring(i, j));
    const startOfStringIndex = j + 1;
    const endOfStringIndex = j + stringLength + 1;
    const string = str.substring(startOfStringIndex, endOfStringIndex);
    decodedStrings.push(string);
    i = endOfStringIndex;
  }

  return decodedStrings;
}
