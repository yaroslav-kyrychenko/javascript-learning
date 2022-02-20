// Nie działa - zamiast arrWord, które później nadpisujemy lepiej stwórzyć pustą tablicę i dodawać do niej ( albo ) w zależności od wyniku warunku.
// const duplicateEncode = function (word) {
//   let arrWord = word.toLowerCase().split('');
//   for (let i = 0; i < arrWord.length; i++) {
//     if (arrWord.indexOf(arrWord[i]) !== arrWord.lastIndexOf(arrWord[i])) {
//       arrWord[i] = ')';
//     } else {
//       arrWord[i] = '(';
//     }
//   }
//   return arrWord.join('');
// };

// Sposób myślenia jak powyżej, ale poprawnie działające
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

// const duplicateEncode = function (word) {
//   word = word.toLowerCase();
//   let newText = '';
//   for (let i in word)
//     if (word.split(word[i]).length - 1 > 1) {
//       newText += ')';
//     } else {
//       newText += '(';
//     }

//   return newText;
// };

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
