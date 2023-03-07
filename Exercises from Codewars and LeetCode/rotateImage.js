'use strict';
// PROBLEM
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// HTML RENDER
const renderResult = function (resultContent) {
  const resultsContainer = document.querySelector('.results');
  const resultItem = document.createElement('li');
  resultItem.classList.add('result');
  resultItem.textContent = resultContent;
  resultsContainer.after(resultItem);
};

// SOLUTION
const getRotatedMatrix = function (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = x; y < matrix[x].length; y++) {
      const temp = matrix[x][y];
      matrix[x][y] = matrix[y][x];
      matrix[y][x] = temp;
    }
  }
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length / 2; y++) {
      const temp = matrix[x][y];
      const indexOfSwappedElement = matrix[x].length - 1 - y;
      matrix[x][y] = matrix[x][indexOfSwappedElement];
      matrix[x][indexOfSwappedElement] = temp;
    }
  }
  renderResult(matrix);
  return matrix;
};

// TESTS
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

getRotatedMatrix(matrix1);
getRotatedMatrix(matrix2);
