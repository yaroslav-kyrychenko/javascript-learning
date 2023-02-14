// Problem
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Solution 1

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const romanNumeralsDecoder = function (romanNumeralInput) {
  return Object.keys(romanNumerals).reduce((acc, romanNumeral) => {
    while (romanNumeralInput.indexOf(romanNumeral) === 0) {
      acc += romanNumerals[romanNumeral];
      romanNumeralInput = romanNumeralInput.slice(romanNumeral.length);
    }
    return acc;
  }, 0);
};

// Tests
console.log(romanNumeralsDecoder('XXI')); // should be 21
console.log(romanNumeralsDecoder('I')); // should be 1
console.log(romanNumeralsDecoder('IV')); // should be 4
console.log(romanNumeralsDecoder('MMVIII')); // should be 2008
console.log(romanNumeralsDecoder('MDCLXVI')); // should be 1666
console.log('------------ End of test 1 -----------');

///////////////////////////////////
///////////////////////////////////
// Solution 2 - inspired by the answers on codewars (coded by myself, not copied)

const romanNumerals2 = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumeralsDecoder2 = function (romanNumeralInput) {
  romanNumeralInputArray = romanNumeralInput.split('');
  let sum = 0;
  for (let i = 0; i < romanNumeralInputArray.length; i++) {
    const currentSymbol = romanNumeralInputArray[i];
    const nextSymbol = romanNumeralInputArray[i + 1];
    if (romanNumerals2[currentSymbol] < romanNumerals2[nextSymbol]) {
      sum += romanNumerals2[nextSymbol] - romanNumerals2[currentSymbol];
    } else {
      sum += romanNumerals2[currentSymbol];
    }
  }
  return sum;
};

// Tests
console.log(romanNumeralsDecoder2('XXI')); // should be 21
console.log(romanNumeralsDecoder2('I')); // should be 1
console.log(romanNumeralsDecoder2('IV')); // should be 4
console.log(romanNumeralsDecoder2('MMVIII')); // should be 2008
console.log(romanNumeralsDecoder2('MDCLXVI')); // should be 1666
console.log('------------ End of test 2 -----------');

///////////////////////////////////
///////////////////////////////////
// Solution 3 - inspired by the answers on codewars (coded by myself, not copied)

const romanNumerals3 = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumeralsDecoder3 = function (romanNumeralInput) {
  romanNumeralInputArray = romanNumeralInput.split('');
  return romanNumeralInputArray.reduce(
    (sum, currentSymbol, currentIndex, romanNumeralInputArray) => {
      const nextSymbol = romanNumeralInputArray[currentIndex + 1];
      if (romanNumerals3[currentSymbol] < romanNumerals3[nextSymbol]) {
        sum += romanNumerals3[nextSymbol] - romanNumerals3[currentSymbol];
      } else {
        sum += romanNumerals3[currentSymbol];
      }
      return sum;
    },
    0
  );
};

// Tests
console.log(romanNumeralsDecoder3('XXI')); // should be 21
console.log(romanNumeralsDecoder3('I')); // should be 1
console.log(romanNumeralsDecoder3('IV')); // should be 4
console.log(romanNumeralsDecoder3('MMVIII')); // should be 2008
console.log(romanNumeralsDecoder3('MDCLXVI')); // should be 1666
