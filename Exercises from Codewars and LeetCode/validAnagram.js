'use strict';
// PROBLEM
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// SOLUTION
//  SOLUTION !
const isValidAnagram = function (string1, string2) {
  if (string1.length !== string2.length) return false;
  const string1ArrSorted = [...string1].sort();
  const string2ArrSorted = [...string2].sort();
  for (let index = 0; index < string1.length; index++) {
    if (string1ArrSorted[index] !== string2ArrSorted[index]) return false;
  }
  return true;
};

const isValidAnagram2 = function (string1, string2) {
  if (string1.length !== string2.length) return false;

  const charCount = {};

  for (let index = 0; index < string1.length; index++) {
    const currentChar = string1[index];

    charCount[currentChar] = charCount[currentChar]
      ? charCount[currentChar] + 1
      : 1;
  }

  for (let index = 0; index < string2.length; index++) {
    const currentChar = string2[index];
    if (!charCount[currentChar]) return false;
    charCount[currentChar]--;
  }

  return true;
};

// TESTS
const string1a = 'anagram';
const string2a = 'nagaram';
const string1b = 'rat';
const string2b = 'car';

console.log(isValidAnagram(string1a, string2a));
console.log(isValidAnagram(string1b, string2b));
console.log(isValidAnagram2(string1a, string2a));
console.log(isValidAnagram2(string1b, string2b));
