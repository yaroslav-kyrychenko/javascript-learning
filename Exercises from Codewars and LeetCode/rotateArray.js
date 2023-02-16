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
const rotateArray1 = function (nums, k) {
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

// ADD SOLUTION USING THE SLICE/SPLICE METHODS
const rotateArray2 = function (nums, k) {
  const n = nums.length;
  k %= n;
  const rotated = [...nums.slice(n - k), ...nums.slice(0, n - k)];
  nums.splice(0, n, ...rotated);
  renderResult(nums);
};

// ADD SOLUTION USING THE REVERSE METHOD
const rotateArray3 = function (nums, k) {
  const n = nums.length;
  k %= n;
  reverse(nums, 0, n - k - 1);
  reverse(nums, n - k, n - 1);
  reverse(nums, 0, n - 1);
  renderResult(nums);
};

const reverse = function (array, start, end) {
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
};

// TESTS
const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
const nums2 = [-1, -100, 3, 99];
const k2 = 2;
const nums3 = [1, 2];
const k3 = 3;
rotateArray1(nums1, k1); // expected [5, 6, 7, 1, 2, 3, 4,]
rotateArray2(nums2, k2); // expected [3, 99, -1, -100]
rotateArray3(nums3, k3); // expected [2, 1]
