// Problem
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solution
const breakCamelCase = function (inputString) {
  // iterate over a string
  // check every symbol if upper or lower case
  // if upper case, create a substring of the previous part and put it into a new array
  // return a merged string with spaces using concat or join

  const splitStringsArray = [];
  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === inputString[i].toUpperCase()) {
      splitStringsArray.push(inputString.slice(0, i));
    }
  }
  console.log(splitStringsArray);
  console.log(inputString);

  // the way to check if the symbol is upper case
  // if character == character.toUpperCase()
};

// TO DO - find out how to remove the sliced part

// Tests
breakCamelCase('camelCasing');
// breakCamelCase('camelCasingTest');
// breakCamelCase('');
