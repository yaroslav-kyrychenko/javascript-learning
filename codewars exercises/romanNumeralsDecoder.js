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

// Solution

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

// TO DO
// Write an alternative solution based on the codewars suggestions

// Tests
console.log(romanNumeralsDecoder('XXI'));
console.log(romanNumeralsDecoder('I')); //
console.log(romanNumeralsDecoder('IV')); // 4
console.log(romanNumeralsDecoder('MMVIII')); //2008
console.log(romanNumeralsDecoder('MDCLXVI')); // 1666
