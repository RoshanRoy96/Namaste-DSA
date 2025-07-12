// Write a function to find the second smallest number in an array?

let arr = [10, 55, 29, -17, 89];

function secondSmallest(arr) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  if (arr.length < 0) {
    return "Array should contain minimum two elements";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] != firstSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

const result = secondSmallest(arr);
console.log(result);
