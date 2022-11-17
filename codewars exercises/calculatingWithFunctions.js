// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// These functions should accept a callback function in case of left operand and should simply return a value in case of right operand.

function zero(mathematicalOperation) {
  console.log(typeof mathematicalOperation);
  if (mathematicalOperation && typeof mathematicalOperation == 'function')
    mathematicalOperation();
}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

// These function should somehow read the left operand and calculate using the right operand

function plus() {
  console.log(0);
}
function minus() {}
function times() {}
function dividedBy() {}

// one(plus(two())); // must output 3
zero(plus());
