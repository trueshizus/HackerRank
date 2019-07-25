function minimumSwaps(arr) {
  let swapped = 0;
  let continueSwapping = true;

  for (let i = 0; i < arr.length; i++) {
    do {
      continueSwapping = false;
      if (arr[i] != i + 1) {
        let aux = arr[arr[i] - 1];
        arr[arr[i] - 1] = arr[i];
        arr[i] = aux;
        swapped++;
        continueSwapping = true;
      }
    } while (continueSwapping);
  }

  return swapped;
}
console.log(minimumSwaps([4, 3, 2, 1]));
