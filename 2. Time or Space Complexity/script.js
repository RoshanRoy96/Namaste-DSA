/*
Time Complexity:- Time Complexity is used to measure the efficiency of an algorithm in terms of speed as the input size grows.

for example:-
let arr = [5, 10, 15, 20, 25, 30, 35];
Here is an array which consist of some numbers as elements. I want to seach an element inside the array. We are implementing this by using two algorithms. One is linear search and the other is binary search.

In linear search, we uses a for loop and iterates over each elements of the array.
ie, for(i = 0; i < arr.length; i++). If the search element matches with any of the elements in the array, loop ends.

Suppose the search element is not present in the array, the loop runs for all the elements in array.
ie, suppose there are 100 elements in array, loop runs for 100 times....
suppose there are 1000 elements in array, loop runs for 1000 times.... suppose there are n elements in an array, loop runs for n times...

Binary Search
Works only for sorted array.
In binary search, first the middle element is found out and compares it with the search element. If the search element is greater than the middle element, it splits into two. Left side and Right side and ignores the left side since the middle element is less than the search element and it is a sorted array. Now again it founds the middle element of the right side, compares it with search element. If it matches with the search element, problem solved....otherwise it continues like splitting into two we see earlier. It continues until the array element becomes one.

now suppose there are 100 elements in an array 100, 100/2 = 50, 50/2 = 25, 25/2 = 12, 12/2 = 6, 6/2 = 3, 3/2 = 1, loop runs for 7 times...
now suppose there are 1000 elements, 1000, 1000/2 = 500, 500/2 = 250, 250/2 = 125, 125/2 = 62, 62/2 = 31, 31/2 = 15, 15/2 = 7, 7/2 = 3, 3/2 = 1. loop runs for 10 times.....

So binary search is more efficient than linear search. It can be represented using Big O Notation.


#) Checking the best case and worst case of both linear search and linear search

Best case:- 
Linear Search:- [5, 10, 15, 20, 25]; Search element is 5. for the first run, search element found.
Binary Search:- [2, 5, 10]; Search element is 5. Founds the middle element and it matches it with the search element when comparing.

Worst case:- 
Search element is not found inside the array.

Note:- When we are comparing the performance of an algorithm, we have to check the worst case:-
What is the maximum amount of complexity it can have,  What is the maximum number of iterations it can have.

Time complexities that we mostly see:- O(n), O(logn), O(nlogn), O(n^2), O(n^3), O(2^n), O(n!)

most efficient time complexity is constant time complexity. ie O(1).
eg:- let arr = [1, 2, 3, 4, 5, 6]; find the fifth element of the array. Runs for one time.

SPACE COMPLEXITY
How much extra space we are using for solving the problem.
eg: Write a function to find the fifth element in an array?
eg: Write a function to find the maximum value in an array?
eg: Write a function that returns an array of double the value of elements in an array?
*/
