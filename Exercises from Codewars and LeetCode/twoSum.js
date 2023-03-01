'use strict';
// PROBLEM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// HTML RENDER
const renderResult = function (resultContents) {
  const resultsContainer = document.querySelector('.results');
  const resultItem = document.createElement('li');
  resultItem.classList.add('result');
  resultItem.textContent = resultContents;
  resultsContainer.after(resultItem);
};

// SOLUTION
const getIndicesOfElementsThatSumToTarget = function (inputArray, targetSum) {
  // create an empty array for the final result
  // iterate over the input array
  // create a second loop within the first one
  // in each iteration, sum the element from the first loop with the element from the second loop
  // check if the sum is equal to target sum
  // if it is equal, push the indices and return the array

  let indicesOfAddends = [];
  let indexFastInitial = 0;
  for (let indexSlow = 0; indexSlow < inputArray.length; indexSlow++) {
    indexFastInitial++;
    for (
      let indexFast = indexFastInitial;
      indexFast < inputArray.length;
      indexFast++
    ) {
      const sum = inputArray[indexSlow] + inputArray[indexFast];
      if (sum === targetSum) {
        indicesOfAddends.push(indexSlow, indexFast);
        renderResult(indicesOfAddends);
        return indicesOfAddends;
      }
    }
  }
};

// TESTS
const inputArray1 = [2, 7, 11, 15];
const targetSum1 = 9;
const inputArray2 = [3, 2, 4];
const targetSum2 = 6;
const inputArray3 = [3, 3];
const targetSum3 = 6;

getIndicesOfElementsThatSumToTarget(inputArray1, targetSum1);
getIndicesOfElementsThatSumToTarget(inputArray2, targetSum2);
getIndicesOfElementsThatSumToTarget(inputArray3, targetSum3);
