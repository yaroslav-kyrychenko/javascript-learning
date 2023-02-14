// Problem
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n−1)3 and so on until the top which will have a volume of 1^3.
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+...+1^3=m, if such a n exists or -1 if there is no such n.
// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

// Solution 1 - inefficient
// const findNumberOfCubes = function (inputNumber) {
//   let n = 0;
//   let result = 0;

//   INEFFICIENT SOLUTION, LEFT FOR MEMORY
//   while (result < inputNumber) {
//     result = 0;
//     n++;
//     for (let m = 0; n - m >= 1; m++) {
//       result += (n - m) ** 3;
//     }
//   }
// };

// Solution 2 - optimal
const findNumberOfCubes = function (inputNumber) {
  let n = 0;
  let result = 0;

  while (result < inputNumber) {
    n++;
    result += Math.pow(n, 3);
  }
  return result === inputNumber ? n : -1;
};

// Tests
findNumberOfCubes(4183059834009); // should return 2022
findNumberOfCubes(24723578342962); // should return -1
findNumberOfCubes(135440716410000); // should return 4824
findNumberOfCubes(40539911473216); // should return 3568
findNumberOfCubes(100); // should return 4
