'use strict';
// PROBLEM
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// HTML RENDER
const renderResult = function (resultContents) {
  const resultsContainer = document.querySelector('.results');
  const resultListItem = document.createElement('li');
  resultListItem.classList.add('result');
  resultListItem.textContent = resultContents;
  resultsContainer.after(resultListItem);
};

// SOLUTION

const isValidSudokuBoard = function (board) {
  // 1) validate rows
  // iterate over each subarray of the original array and check if each of its elements is between 1-9 and if it contains any duplicates
  isValidRowColumnOrSubbox(board);
  // 2) validate columns
  // iterate over the subarray using the counter for each column, push every element to an empty array, check if each of the elements of the new array is between 1-9 and if it contains any duplicates
  const columns = [[], [], [], [], [], [], [], [], []];
  for (let index = 0; index < board.length; index++) {
    for (let columnNumber = 0; columnNumber < columns.length; columnNumber++) {
      columns[columnNumber].push(board[index][columnNumber]);
    }
  }
  isValidRowColumnOrSubbox(columns);
  // 3) validate 3x3 sub-boxes
  const subBoxes = [[], [], [], [], [], [], [], [], []];
  // declare variables for the counting, e.g. 1 and 3 for first 3x3 box, 2 and 3 for the second, 3 x 3 for the third etc
  // push all the elements of sub-boxes into a new array, check if each of the elements of the new array is between 1-9 and if it contains any duplicates
  console.log('PASSED');
  return true;
};

const isValidRowColumnOrSubbox = function (inputArray) {
  for (const array of inputArray) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] < 1 || array[index] > 9) {
        console.log(`${array[index]} false`);
        return false;
      }
      if (array[index] >= 1 && array[index] <= 9) {
        if (index !== array.indexOf(array[index])) {
          console.log(`${array[index]} false`);
          return false;
        }
      }
    }
  }
};

// TESTS
const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

isValidSudokuBoard(board1);
// isValidSudokuBoard(board2);
