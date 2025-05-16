function isValidSudoku(board) {
  for (let col = 0; col < 9; col++) {
    let currentRowNumbers = [];
    for (let row = 0; row < 9; row++) {
      const num = board[row][col];
      if (num === ".") continue;
      if (currentRowNumbers.includes(num)) {
        return false;
      }
      currentRowNumbers.push(num);
    }
  }

  // Check if column contains numbers other than 1-9 duplicates
  for (let row = 0; row < 9; row++) {
    let currentColNumbers = [];
    for (let col = 0; col < 9; col++) {
      const num = board[row][col];
      if (num === ".") continue;
      if (currentColNumbers.includes(num)) {
        return false;
      }
      currentColNumbers.push(num);
    }
  }

  // Check if 3x3 sub-boxes contain numbers other than 1-9 duplicates
  for (let subboxRow = 0; subboxRow < 3; subboxRow++) {
    for (let subboxCol = 0; subboxCol < 3; subboxCol++) {
      const currentSubboxNumbers = [];
      for (let row = subboxRow * 3; row < subboxRow * 3 + 3; row++) {
        for (let col = subboxCol * 3; col < subboxCol * 3 + 3; col++) {
          const num = board[row][col];
          if (num === ".") continue;
          if (currentSubboxNumbers.includes(num)) {
            return false;
          }
          currentSubboxNumbers.push(num);
        }
      }
    }
  }

  return true;
}
