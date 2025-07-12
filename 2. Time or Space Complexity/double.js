let arr = [1, 2, 3, 4, 5];

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

let result = double(arr);
console.log(result);

// Note:- Time complexity is O(n). Space complexity is O(n).