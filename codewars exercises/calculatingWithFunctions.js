// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// These functions should accept a callback function in case of left operand and should simply return a value in case of right operand.

let rightOperand;
let leftOperand;
let result;

function assignOperandsAndDoMath(mathOperation, digit) {
  if (!mathOperation) rightOperand = digit;
  if (typeof mathOperation == 'function') {
    leftOperand = digit;
    mathOperation(leftOperand, rightOperand);
  }
}

function zero(mathOperation) {
  digit = 0;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function one(mathOperation) {
  digit = 1;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function two(mathOperation) {
  digit = 2;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function three(mathOperation) {
  digit = 3;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function four(mathOperation) {
  digit = 4;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function five(mathOperation) {
  digit = 5;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function six(mathOperation) {
  digit = 6;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function seven(mathOperation) {
  digit = 7;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function eight(mathOperation) {
  digit = 8;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}
function nine(mathOperation) {
  digit = 9;
  assignOperandsAndDoMath(mathOperation, digit);
  return result;
}

// These function should somehow read the left operand and calculate using the right operand

function plus() {
  return function (leftOperand, rightOperand) {
    result = leftOperand + rightOperand;
  };
}
function minus() {
  return function (leftOperand, rightOperand) {
    result = leftOperand - rightOperand;
  };
}
function times() {
  return function (leftOperand, rightOperand) {
    result = leftOperand * rightOperand;
  };
}
function dividedBy() {
  return function (leftOperand, rightOperand) {
    result = Math.trunc(leftOperand / rightOperand);
  };
}

console.log(two(plus(one())));
console.log(five(minus(three())));
console.log(two(times(eight())));
console.log(seven(dividedBy(nine())));
console.log(four(dividedBy(zero())));
