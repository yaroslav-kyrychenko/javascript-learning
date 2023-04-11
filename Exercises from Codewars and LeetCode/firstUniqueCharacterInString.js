'use strict';
// PROBLEM
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.

// SOLUTION
const getFirstUniqueCharacter = function (string) {
  for (let index = 0; index < string.length; index++) {
    const currentChar = string[index];
    if (string.indexOf(currentChar) === string.lastIndexOf(currentChar))
      return index;
  }
  return -1;
};

// TESTS
const string1 = 'leetcode';
const string2 = 'loveleetcode';
const string3 = 'aabb';
console.log(getFirstUniqueCharacter(string1));
console.log(getFirstUniqueCharacter(string2));
console.log(getFirstUniqueCharacter(string3));
