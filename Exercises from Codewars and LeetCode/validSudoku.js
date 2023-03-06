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
  let rows = Array(9)
    .fill(null)
    .map(() => new Set());
  let columns = Array(9)
    .fill(null)
    .map(() => new Set());
  let subBoxes = Array(9)
    .fill(null)
    .map(() => new Set());

  for (let xCoord = 0; xCoord < 9; xCoord++) {
    for (let yCoord = 0; yCoord < 9; yCoord++) {
      let cell = board[xCoord][yCoord];
      if (cell !== '.') {
        if (
          rows[xCoord].has(cell) ||
          columns[yCoord].has(cell) ||
          subBoxes[Math.floor(xCoord / 3) * 3 + Math.floor(yCoord / 3)].has(
            cell
          )
        ) {
          console.log(false);
          return false;
        } else {
          rows[xCoord].add(cell);
          columns[yCoord].add(cell);
          subBoxes[Math.floor(xCoord / 3) * 3 + Math.floor(yCoord / 3)].add(
            cell
          );
        }
      }
    }
  }
  console.log(true);
  return true;
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
isValidSudokuBoard(board2);
