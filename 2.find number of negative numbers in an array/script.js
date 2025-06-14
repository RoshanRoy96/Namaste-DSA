// Write a function that returns the number of negative numbers in an array?

let arr = [5, -13, 21, -33, -8, 28];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let result = countNegatives(arr);
console.log(result);
