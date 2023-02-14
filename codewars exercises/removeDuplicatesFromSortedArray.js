'use strict';
// PROBLEM
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// SOLUTION

const renderResult = function (result) {
  const resultsList = document.querySelector('.results');
  const resultElement = document.createElement('li');
  resultElement.classList.add('result');
  resultElement.textContent = `Result: ${result}`;
  resultsList.after(resultElement);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicatesFromSortedArray = function (nums) {
  if (nums.length === 0) return 0;

  let slowPointer = 0;
  for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
    if (nums[fastPointer] !== nums[slowPointer]) {
      slowPointer++;
      nums[slowPointer] = nums[fastPointer];
    }
  }

  renderResult(slowPointer + 1);
  return slowPointer + 1;
};

// TESTS
const nums1 = [1, 1, 2];
removeDuplicatesFromSortedArray(nums1);
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicatesFromSortedArray(nums2);
