function reverseInteger(n) {
  let rev = 0;
  let nCopy = n;
  n = Math.abs(n);
  while (n > 0) {
    let last = n % 10;
    rev = 10 * rev + last;
    n = Math.floor(n / 10);
  }
  if (nCopy < 0) {
    return -rev;
  } else {
    return rev;
  }
}

let result = reverseInteger(12345);
console.log(result);