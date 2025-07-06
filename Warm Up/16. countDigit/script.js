// Write a function to return the count of digits in a number?
// eg: if the the number is 259 return count as 3

function countDigits(n) {
  let count = 0;
  n = Math.abs(n);
  if (n === 0) {
    return 1;
  }
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
let result = countDigits(-259);
console.log(result);

// Corner Cases

// 1) What if my number is zero?
// 2) What if my number is negative?
