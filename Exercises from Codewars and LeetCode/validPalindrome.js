'use strict';
// PROBLEM
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// SOLUTION
const isValidPalindrome = function (string) {
  const stringAlphanumericLowercase = string
    .replace(/[^0-9a-z]/gi, '')
    .toLowerCase();
  let reversedString = '';
  for (
    let index = stringAlphanumericLowercase.length - 1;
    index >= 0;
    index--
  ) {
    // console.log(stringOnlyAlphanumeric[index]);
    reversedString = reversedString + stringAlphanumericLowercase[index];
  }
  if (stringAlphanumericLowercase !== reversedString) return false;
  return true;
};

const isValidPalindrome2 = function (string) {
  let leftIndex = 0;
  let rightIndex = string.length - 1;
  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && !/^[0-9a-z]/gi.test(string[leftIndex])) {
      leftIndex++;
    }
    while (leftIndex < rightIndex && !/^[0-9a-z]/gi.test(string[rightIndex])) {
      rightIndex--;
    }
    if (string[leftIndex].toLowerCase() !== string[rightIndex].toLowerCase()) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
};

// TESTS
const string1 = 'A man, a plan, a canal: Panama';
const string2 = 'race a car';
const string3 = ' ';

console.log(isValidPalindrome(string1));
console.log(isValidPalindrome(string2));
console.log(isValidPalindrome(string3));

console.log(isValidPalindrome2(string1));
console.log(isValidPalindrome2(string2));
console.log(isValidPalindrome2(string3));
