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

// Note:- The highest possible integer is 'Infinity'. When we want to find smallest number in an array we need to set the smallest value to be the highest possible integer. Tht's why we set Infinity as the smallest value.
