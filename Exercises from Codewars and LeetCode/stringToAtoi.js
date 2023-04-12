'use strict';
// PROBLEM
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// SOLUTION
const getAtoiFromString = function (string) {
  let trimmedString = string.trim();
  let isNegative = trimmedString[0] === '-' ? true : false;
  if (trimmedString[0] === '+' || trimmedString[0] === '-') {
    trimmedString = trimmedString.substring(1);
  }
  let integerString = '';
  for (const element of trimmedString) {
    if (/[0-9]/.test(element)) {
      integerString = integerString.concat('', element);
    } else {
      break;
    }
  }
  if (!integerString) return 0;
  let parsedInteger = isNegative
    ? parseInt(integerString, 10) * -1
    : parseInt(integerString, 10);
  const clamp32bit = 2 ** 31;
  if (parsedInteger < -clamp32bit) parsedInteger = -clamp32bit;
  if (parsedInteger > clamp32bit - 1) parsedInteger = clamp32bit - 1;
  return parsedInteger;
};

const getAtoiFromString2 = function (string) {
  const trimmedString = string.trim();
  const integerString = trimmedString.match(/^[-+]?\d+/);
  if (!integerString) return 0;
  let parsedInteger = parseInt(integerString[0], 10);
  const clamp32bit = 2 ** 31;
  if (parsedInteger < -clamp32bit || parsedInteger > clamp32bit - 1) {
    parsedInteger = parsedInteger < 0 ? -clamp32bit : clamp32bit;
  }
  return parsedInteger;
};

// TESTS
const string1 = '42';
const string2 = '   -42';
const string3 = '4193 with words';
const string4 = 'words and 987';
const string5 = '+-12';

// console.log(getAtoiFromString(string1));
// console.log(getAtoiFromString(string2));
// console.log(getAtoiFromString(string3));
// console.log(getAtoiFromString(string4));
// console.log(getAtoiFromString(string5));

console.log(getAtoiFromString2(string1));
console.log(getAtoiFromString2(string2));
console.log(getAtoiFromString2(string3));
console.log(getAtoiFromString2(string4));
console.log(getAtoiFromString2(string5));
