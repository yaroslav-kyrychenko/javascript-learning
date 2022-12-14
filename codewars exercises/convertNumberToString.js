// PROBLEM
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// SOLUTION
const convertNumberToString1 = function (inputNumber) {
  return inputNumber.toString();
};

const convertNumberToString2 = function (inputNumber) {
  return String(inputNumber);
};

const convertNumberToString3 = function (inputNumber) {
  return inputNumber + '';
};

const convertNumberToString4 = function (inputNumber) {
  return '' + inputNumber;
};

const convertNumberToString5 = function (inputNumber) {
  return `${inputNumber}`;
};

// TEST 1
console.log(`TEST 1`);
console.log(typeof convertNumberToString1(123));
console.log(typeof convertNumberToString1(999));
console.log(typeof convertNumberToString1(-100));
// TEST 2
console.log(`TEST 2`);
console.log(typeof convertNumberToString2(123));
console.log(typeof convertNumberToString2(999));
console.log(typeof convertNumberToString2(-100));
// TEST 3
console.log(`TEST 3`);
console.log(typeof convertNumberToString3(123));
console.log(typeof convertNumberToString3(999));
console.log(typeof convertNumberToString3(-100));
// TEST 4
console.log(`TEST 4`);
console.log(typeof convertNumberToString4(123));
console.log(typeof convertNumberToString4(999));
console.log(typeof convertNumberToString4(-100));
// TEST 5
console.log(`TEST 5`);
console.log(typeof convertNumberToString4(123));
console.log(typeof convertNumberToString4(999));
console.log(typeof convertNumberToString4(-100));
