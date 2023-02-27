// PROBLEM
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// HTML RENDER

const renderResult = function (resultContents) {
  const resultsContainer = document.querySelector('.results');
  const result = document.createElement('li');
  result.classList.add('result');
  result.textContent = `Result: ${resultContents}`;
  resultsContainer.after(result);
};

// SOLUTION
const getIntersectionOfTwoArrays = function (numsArray1, numsArray2) {
  const intersectionArray = [];

  for (let i = 0; i < numsArray1.length; i++) {
    if (numsArray2.includes(numsArray1[i])) {
      intersectionArray.push(numsArray1[i]);
      numsArray2.splice(numsArray2.indexOf(numsArray1[i]), 1);
    }
  }

  renderResult(intersectionArray);
  return intersectionArray;
};

// TESTS
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
const nums5 = [1, 2];
const nums6 = [1, 1];
const nums7 = [1, 2, 2, 1];
const nums8 = [2];

getIntersectionOfTwoArrays(nums1, nums2);
getIntersectionOfTwoArrays(nums3, nums4);
getIntersectionOfTwoArrays(nums5, nums6);
getIntersectionOfTwoArrays(nums7, nums8);
