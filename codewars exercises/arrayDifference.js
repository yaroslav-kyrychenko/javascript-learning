// Task
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const h1 = document.querySelector('h1');

// solution
const getArrayDifference = function (arrayA, arrayB) {
  const arrayDifference = [];
  arrayA.forEach(element => {
    if (!arrayB.includes(element)) arrayDifference.push(element);
  });
  const breakLine = document.createElement('br');
  h1.appendChild(breakLine);
  solutionTextNode = document.createTextNode(`${arrayDifference}`);
  h1.appendChild(solutionTextNode);
  return arrayDifference;
};

// Tests
getArrayDifference([1, 2], [1]);
getArrayDifference([1, 2, 2, 2, 3], [2]);
getArrayDifference([1, 2, 2], [1]);
getArrayDifference([1, 2, 2], [2]);
getArrayDifference([1, 2, 2], []);
getArrayDifference([], [1, 2]);
getArrayDifference([1, 2, 3], [1, 2]);
