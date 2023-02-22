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

  numsArray1.sort();
  numsArray2.sort();
  const arrayLength1 = numsArray1.length;
  const arrayLength2 = numsArray2.length;

  let longerArray = [];
  let shorterArray = [];

  if (arrayLength1 !== arrayLength2) {
    longerArray = arrayLength1 > arrayLength2 ? numsArray1 : numsArray2;
    shorterArray = arrayLength1 < arrayLength2 ? numsArray1 : numsArray2;

    for (let indexSlow = 0; indexSlow < shorterArray.length; indexSlow++) {
      for (let indexFast = 0; indexFast < longerArray.length; indexFast++) {
        if (shorterArray[indexSlow] === longerArray[indexFast]) {
          intersectionArray.push(shorterArray[indexSlow]);
          break;
        }
      }
    }
  }

  if (arrayLength1 === arrayLength2) {
    for (let index = 0; index < arrayLength1; index++) {
      if (numsArray1[index] === numsArray2[index]) {
        intersectionArray.push(numsArray1[index]);
      }
    }
  }
  // console.log(`Longer array - ${longerArray}, shorter array - ${shorterArray}`);

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

getIntersectionOfTwoArrays(nums1, nums2);
getIntersectionOfTwoArrays(nums3, nums4);
getIntersectionOfTwoArrays(nums6, nums5);
