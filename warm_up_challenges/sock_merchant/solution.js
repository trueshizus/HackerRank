// This solutions counts the number of impair elements by adding the first ocurrence to a set and removing it when is repeated.

function stockMerchant(n, ar) {
  const impairElements = new Set([]);
  ar.forEach(element => {
    impairElements.has(element)
      ? impairElements.delete(element)
      : impairElements.add(element);
  });

  return (ar.length - impairElements.size) / 2;
}
