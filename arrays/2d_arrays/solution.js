function hourglassSum(arr) {
  function calculateHourGlass(row, column, matrix) {
    return (
      matrix[row][column] +
      matrix[row][column + 1] +
      matrix[row][column + 2] +
      matrix[row + 1][column + 1] +
      matrix[row + 2][column] +
      matrix[row + 2][column + 1] +
      matrix[row + 2][column + 2]
    );
  }

  let maxHourGlass = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let hourGlass = calculateHourGlass(i, j, arr);
      if (hourGlass > maxHourGlass) {
        maxHourGlass = hourGlass;
      }
    }
  }

  return maxHourGlass;
}

const matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(matrix));
