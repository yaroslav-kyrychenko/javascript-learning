// PROBLEM
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// HTML RENDER

const renderResult = function (resultContents) {
  const resultsContainer = document.querySelector('.results');
  const result = document.createElement('li');
  result.classList.add('result');
  result.textContent = `Result: ${resultContents}`;
  resultsContainer.after(result);
};

// SOLUTION

const getNonDuplicateNumber = function (numsArray) {
  // const n = numsArray.length;
  // if (n === 1) return numsArray[0];

  numsArray.sort();
  for (let index = 0; index < numsArray.length; index++) {
    if (
      numsArray[index] != numsArray[index + 1] &&
      numsArray[index] != numsArray[index - 1]
    )
      return numsArray[index];
  }
  renderResult(numsArray);
};

// TESTS
const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];
const nums3 = [1];

console.log(getNonDuplicateNumber(nums1));
console.log(getNonDuplicateNumber(nums2));
console.log(getNonDuplicateNumber(nums3));
