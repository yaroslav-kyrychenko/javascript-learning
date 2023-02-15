// PROBLEM
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// RENDER RESULT ON THE WEBPAGE
const renderResult = function (result) {
  const resultsContainer = document.querySelector('.results');
  const resultElement = document.createElement('li');
  resultElement.classList.add('result');
  resultElement.textContent = `Result: ${result}`;
  resultsContainer.after(resultElement);
};

// SOLUTION
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArray = function (nums, k) {
  newNums = nums.map((element, index, array) => {
    if (k > array.length) k = k % array.length;
    if (array.length > 1) return array.at(index - k);
    if (array.length === 1) return array.at(index);
  });
  nums.forEach((element, index, array) => {
    array[index] = newNums[index];
  });
  renderResult(nums);
};

// ADD SOLUTION USING THE REVERSE METHOD

// ADD SOLUTION USING THE SLICE/SPLICE METHODS

// TESTS
const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
const nums2 = [-1, -100, 3, 99];
const k2 = 2;
const nums3 = [1, 2];
const k3 = 3;
rotateArray(nums1, k1); // expected [5, 6, 7, 1, 2, 3, 4,]
// rotateArray(nums2, k2); // expected [3, 99, -1, -100]
// rotateArray(nums3, k3); // expected [2, 1]
