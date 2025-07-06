// Write a function that returns the second largest number in an array?

let arr = [-8, -15, -39, -24, -1, -5, -1];

function secondLargest(arr) {
    if(arr.length < 2) {  // suppose if my array is empty or contains less than two elements. this condition solves that.
        return "Array should contain minimum two elements";
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != firstLargest) { // arr[i] != firstLargest:- this condition checks if duplicate elements present in an array.
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const result = secondLargest(arr);
console.log(result);

// Corner cases:-
// 1. What if my array should contain less than two elements or what if my array is empty?
// 2. What if my array contains duplicate elements?

// Note:- this code works for negative and positive values inside array.