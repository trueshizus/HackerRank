function arrayManipulation(n, queries) {
  let max = 0;
  let sum = 0;
  let values = Array.from({ length: n }, () => 0);

  queries.forEach(([from, to, value]) => {
    values[from - 1] += value;
    values[to] -= value;
  });

  for (let i = 0; i < values.length; i++) {
    sum += values[i];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(
  arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]])
);
