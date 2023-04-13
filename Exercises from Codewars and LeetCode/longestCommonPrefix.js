'use strict';
// PROBLEM
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// SOLUTION
const getLongestCommonPrefix = function (arrayOfStrings) {
  if (arrayOfStrings.length === 0) return '';
  let prefix = arrayOfStrings[0];
  for (let indexSlow = 1; indexSlow < arrayOfStrings.length; indexSlow++) {
    const currentString = arrayOfStrings[indexSlow];
    let indexFast = 0;
    while (
      indexFast < prefix.length &&
      indexFast < currentString.length &&
      prefix.charAt(indexFast) === currentString.charAt(indexFast)
    ) {
      indexFast++;
    }
    prefix = prefix.substring(0, indexFast);
    if (!prefix) return '';
  }
  return prefix;
};

// TESTS
const array1 = ['flower', 'flow', 'flight'];
const array2 = ['dog', 'racecar', 'car'];
const array3 = [''];
const array4 = ['a'];

console.log(getLongestCommonPrefix(array1));
console.log(getLongestCommonPrefix(array2));
console.log(getLongestCommonPrefix(array3));
console.log(getLongestCommonPrefix(array4));
