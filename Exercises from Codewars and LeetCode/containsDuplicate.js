// PROBLEM
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// SOLUTION
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const uniqueNums = [...new Set(nums)];
  return nums.length !== uniqueNums.length ? true : false;
};

const containsDuplicate2 = function (nums) {
  const n = nums.length;
  for (let indexSlow = 0; indexSlow < n; indexSlow++) {
    for (let indexFast = indexSlow + 1; indexFast < n; indexFast++) {
      if (nums[indexSlow] === nums[indexFast]) {
        return true;
      }
    }
  }
  return false;
};

containsDuplicate3 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) return true;
  }
  return false;
};

// TESTS
nums1 = [1, 2, 3, 1];
nums2 = [1, 2, 3, 4];
nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
nums4 = [3, 3];
console.log(containsDuplicate3(nums1));
containsDuplicate(nums2);
// containsDuplicate(nums3);
containsDuplicate(nums4);
