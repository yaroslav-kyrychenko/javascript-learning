// Task
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Draft version
const getArrayDifference = function (arrayA, arrayB) {
  // Use .map() on arrayA, compare every element of arrayA to elements of arrayB by using .includes()

  //   const arrayDifference = arrayA.map(element => {
  //     if (!arrayB.includes(element)) {
  //       console.log(element);
  //     }
  //   });

  const arrayDifference = [];
  arrayA.forEach(element => {
    if (!arrayB.includes(element)) arrayDifference.push(element);
  });
  console.log(arrayDifference);
};

// final result
const arrayDiff = function (arrayA, arrayB) {
  const arrayDifference = [];
  arrayA.forEach(element => {
    if (!arrayB.includes(element)) arrayDifference.push(element);
  });
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
