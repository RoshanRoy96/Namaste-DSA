let arr = [10, 35, 1, 8, 29, 17, -100];

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const result = findSmallest(arr);
console.log(result);
