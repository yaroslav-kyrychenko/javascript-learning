// PROBLEM
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// SOLUTION 1 - using simple loop
const countCharactersInString = function (inputString) {
  const inputStringArr = inputString.split('');
  const charactersObject = {};
  for (const char of inputStringArr) {
    // if (Object.keys(charactersObject).includes(char)) {
    if (charactersObject[char]) {
      charactersObject[char] += 1;
    } else charactersObject[char] = 1;
  }
  return charactersObject;
};

// SOLUTION 2 - using forEach
const countCharactersInString2 = function (inputString) {
  const inputStringArr = inputString.split('');
  const charactersObject = {};
  inputStringArr.forEach(char => {
    charactersObject[char]
      ? charactersObject[char]++
      : (charactersObject[char] = 1);
  });
  return charactersObject;
};

// TESTS
console.log(countCharactersInString('aba'));
console.log(countCharactersInString2('aba'));
countCharactersInString('');
