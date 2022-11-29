// Problem
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solution
const breakCamelCase = function (inputString) {
  const inputStringArray = inputString.split('');
  const splitStringsArray = [];
  for (let i = 1; i < inputStringArray.length; i++) {
    if (inputStringArray[i] === inputStringArray[i].toUpperCase()) {
      splitStringsArray.push(inputStringArray.splice(0, i).join(''));
      i = 0;
    }
  }
  splitStringsArray.push(inputStringArray.join(''));
  return splitStringsArray.join(' ');
};

// TO DO - find out how to remove the sliced part

// Tests
console.log(breakCamelCase('camelCasing'));
console.log(breakCamelCase('camelCasingTest'));
console.log(breakCamelCase(''));
console.log(breakCamelCase('makeYearSmall'));
