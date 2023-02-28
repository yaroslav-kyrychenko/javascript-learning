// PROBLEM
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// HTML RENDER
const renderResult = function (resultContents) {
  const resultsContainer = document.querySelector('.results');
  const result = document.createElement('li');
  result.classList.add('result');
  result.textContent = resultContents;
  resultsContainer.after(result);
};

// SOLUTION
const addOneToInteger = function (digitsArray) {
  const n = digitsArray.length;
  for (let i = 1; i <= n; i++) {
    digitsArray[n - i] += 1;
    if (digitsArray[n - i] < 10) break;
    if (digitsArray[n - i] === 10) {
      digitsArray[n - i] = 0;
    }
    if (i === n) {
      digitsArray.splice(0, 0, 1);
    }
  }
  console.log(digitsArray);
  return digitsArray;
};

// TESTS
digitsArray1 = [1, 2, 3];
digitsArray2 = [4, 3, 2, 9];
digitsArray3 = [9];
digitsArray4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
digitsArray5 = [9, 9, 9, 9];

addOneToInteger(digitsArray1);
addOneToInteger(digitsArray2);
addOneToInteger(digitsArray3);
addOneToInteger(digitsArray4);
addOneToInteger(digitsArray5);
