// Write a function that searches an element in an array and returns the index. If the element is not present return -1. ?

let arr = [2, 10, 15, 23, 38];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return `${x} is found at index: ${i}`;
    }
  }
}

let result = searchElement(arr, 23);
console.log(result);
