let arr = [3, 2, 1, 5, 3, 4, 8, 3];

// let arr = [3, 1, 3, 4, 3, 3, 3, 7]; // Another example

let x = 0;

function removeElement(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {     // shift elements to left if it is not equal to val.
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

let result = removeElement(arr, 3);
console.log(result);
