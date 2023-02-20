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

// TESTS
nums1 = [1, 2, 3, 1];
nums2 = [1, 2, 3, 4];
nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
nums4 = [3, 3];
console.log(containsDuplicate(nums1));
containsDuplicate(nums2);
// containsDuplicate(nums3);
containsDuplicate(nums4);
