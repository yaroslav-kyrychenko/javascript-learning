// Problem
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Solution
const splitStrings = function (inputString) {
  let stringsPairs = [];
  const inputStringLength = inputString.length;
  for (let i = 0; i < inputStringLength; i = i + 2) {
    if (inputStringLength % 2 === 1 && i === inputStringLength - 1) {
      stringsPairs.push(inputString[i] + '_');
    } else stringsPairs.push(inputString[i] + inputString[i + 1]);
  }
  return stringsPairs;
};

// Tests
console.log(splitStrings('abcdef'));
console.log(splitStrings('abcdefg'));
console.log(splitStrings(''));
