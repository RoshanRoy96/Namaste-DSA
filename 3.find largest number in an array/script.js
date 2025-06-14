// Write a function that returns the largest number in an array?

let arr = [25, 18, 1, 32, 41, 55];

function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result = findLargest(arr);
console.log(result);

// Note:- The least possible integer is '-Infinity'. That's why we are setting -Infinity as the value of largest and comparing it with elements of array.