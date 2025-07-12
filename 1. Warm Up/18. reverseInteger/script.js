function reverseInteger(n) {
  let rev = 0;
  let nCopy = n;
  n = Math.abs(n);
  while (n > 0) {
    let last = n % 10;
    rev = 10 * rev + last;
    n = Math.floor(n / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) {
    return 0;
  }
  return nCopy < 0 ? -rev : rev;
}

let result = reverseInteger(120);
console.log(result);
