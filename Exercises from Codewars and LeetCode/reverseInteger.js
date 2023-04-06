'use strict';
// PROBLEM
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// SOLUTION
const reverseInteger = function (integer) {
  let intArray = String(integer).split('');
  if (intArray[0] === '-') {
    intArray = intArray.slice(1);
  }
  intArray.reverse();
  const output = parseInt(intArray.join(''), 10) * Math.sign(integer);
  if (output < -(2 ** 31) || output > 2 ** 31) return 0;
  return output;
};

// TESTS
const integer1 = 123;
const integer2 = -123;
const integer3 = 120;
const integer4 = 1534236469;
console.log(reverseInteger(integer1));
console.log(reverseInteger(integer2));
console.log(reverseInteger(integer3));
console.log(reverseInteger(integer4));
