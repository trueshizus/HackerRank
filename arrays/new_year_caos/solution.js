function minimumBribes(q) {
  let bribes = 0;
  for (let index = 0; index < q.length - 1; index++) {
    let positionDifference = q[index] - (index + 1);
    if (positionDifference > 3) return "Too chaotic";

    bribes += q.slice(index).filter(num => num < q[index]).length;
  }
  return bribes;
}
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
