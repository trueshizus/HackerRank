function rotLeft(a, d) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let index = (i + d) % a.length;
    result.push(a[index]);
  }
  return result;
}

integers = [1, 2, 3, 4, 5];

console.log(rotLeft(integers, 3));
