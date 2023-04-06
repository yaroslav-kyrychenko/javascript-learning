'use strict';
// PROBLEM
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Solution

const reverseString = function (string) {
  // return string.reverse(); obvious solution

  // opposite directional two-pointer approach
  let indexRight = string.length - 1;
  for (let indexLeft = 0; indexLeft <= indexRight; indexLeft++) {
    const temp = string[indexLeft];
    string[indexLeft] = string[indexRight];
    string[indexRight] = temp;
    indexRight--;
  }
  return string;
};

// Tests
const string1 = ['h', 'e', 'l', 'l', 'o'];
const string2 = ['H', 'a', 'n', 'n', 'a', 'h'];
console.log(reverseString(string1)); // return ['o', 'l', 'l', 'e', 'h']
console.log(reverseString(string2)); // returns ['h', 'a', 'n', 'n', 'a', 'H']
