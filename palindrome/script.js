// Write a function to check if a number is palindrome or not?

function isPalindrome(n) {
  n = Math.abs(n);
  nCopy = n;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  if (nCopy === rev) {
    return true;
  } else {
    return false;
  }
}

let result = isPalindrome(-151);
console.log(result);
