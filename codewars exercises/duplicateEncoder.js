// The goal of the exercise is to create an encoder for strings. 
// Where a symbol is repeated in a string, it should be encoded as ')'.
// Where it is unique, it should be encoded as '('.

// Method 1 - using lastIndexOf.
const duplicateEncode = function (word) {
  let encodedArr = [];
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      encodedArr.push(")");
    } else {
      encodedArr.push("(");
    }
  }
  return encodedArr.join("");
};

// Method 2 - using split.
const duplicateEncode = function (word) {
  word = word.toLowerCase();
  let newText = '';
  for (let i in word)
    if (word.split(word[i]).length - 1 > 1) {
      newText += ')';
    } else {
      newText += '(';
    }
  return newText;
};

// Tests
console.log(duplicateEncode("din")); // results in (((
console.log(duplicateEncode("recede")); // results in ()()() 
console.log(duplicateEncode("Success")); // results in )())())
console.log(duplicateEncode("(( @")); // results in ))((
