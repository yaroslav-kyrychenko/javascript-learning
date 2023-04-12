// PROBLEM
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// SOLUTION
const strStr = function (haystackString, needleString) {
  return haystackString.indexOf(needleString);
};

const strStr2 = function (haystackString, needleString) {
  const regExp = new RegExp(needleString);
  const match = haystackString.match(regExp);
  return match ? match.index : -1;
};

// TESTS
const haystack1 = 'sadbutsad';
const needle1 = 'sad';
const haystack2 = 'leetcode';
const needle2 = 'leeto';

console.log(strStr(haystack1, needle1));
console.log(strStr(haystack2, needle2));

console.log(strStr2(haystack1, needle1));
console.log(strStr2(haystack2, needle2));
