function repeatedString(s, n) {
  const stringRepetition = Math.trunc(n / s.length);
  const remainingChars = n % s.length;
  const remainingString = s.substring(0, remainingChars);
  
  let remainingStringNumberofA = 0;
  let numberOfA = 0;
  
  if(s.match(/a/g)) {
    numberOfA = s.match(/a/g).length;
  }

  if (remainingString.match(/a/g)) {
    remainingStringNumberofA = remainingString.match(/a/g).length;
  }

  return stringRepetition * numberOfA + remainingStringNumberofA;
}

console.log(repeatedString("d", 590));
