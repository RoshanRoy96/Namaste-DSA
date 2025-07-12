let arr = [5, 100, 24, 89, 1];

function findMaximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let result = findMaximum(arr);
console.log(result);

// Note:- Time complexity is O(n). Space complexity is O(1);