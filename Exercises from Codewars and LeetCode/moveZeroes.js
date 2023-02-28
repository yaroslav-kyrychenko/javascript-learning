'use strict';
// PROBLEM
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// HTML RENDER
const renderResult = function (resultContents) {
  const resultsContainer = document.querySelector('.results');
  const resultItem = document.createElement('li');
  resultItem.classList.add('result');
  resultItem.textContent = resultContents;
  resultsContainer.after(resultItem);
};

// SOLUTION
const moveZeroesToEndOfArray = function (inputArray) {
  // create an empty array
  // iterate
  // read if equals to zero
  // if it does remove from the current position and push into the new array
  // when done iterating, concat the zeros array with the input array
  renderResult(`initial: ${inputArray}`);
  const zeroesArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      zeroesArray.push(inputArray[i]);
      inputArray.splice(i, 1);
      i--;
    }
  }
  for (const element of zeroesArray) {
    inputArray.push(element);
  }
  renderResult(`output: ${inputArray}`);
  return inputArray;
};
// TESTS
const inputArray1 = [0, 1, 0, 3, 12];
const inputArray2 = [0];
const inputArray3 = [0, 0, 1];

moveZeroesToEndOfArray(inputArray1);
moveZeroesToEndOfArray(inputArray2);
moveZeroesToEndOfArray(inputArray3);
