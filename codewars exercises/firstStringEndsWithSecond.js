// PROBLEM
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// SOLUTION 1 - too complex
const firstStringEndsWithSecond1 = function (firstString, endingString) {
  let doesfirstStringEndsWithSecond = true;
  for (let i = 1; i <= endingString.length; i++) {
    if (
      firstString[firstString.length - i] !==
      endingString[endingString.length - i]
    ) {
      doesfirstStringEndsWithSecond = false;
    }
  }
  return doesfirstStringEndsWithSecond;
};

// SOLUTION 2 - the most straightforward
const firstStringEndsWithSecond2 = function (firstString, endingString) {
  return firstString.endsWith(endingString);
};

// SOLUTION 3 - using substring
const firstStringEndsWithSecond3 = function (firstString, endingString) {
  return (
    firstString.substring(firstString.length - endingString.length) ===
    endingString
  );
};

// TESTS
firstStringEndsWithSecond1('abcde', 'cde');
firstStringEndsWithSecond1('abcde', 'abc');
firstStringEndsWithSecond2('abcde', 'cde');
firstStringEndsWithSecond2('abcde', 'abc');
firstStringEndsWithSecond3('abcde', 'cde');
firstStringEndsWithSecond3('abcde', 'abc');
firstStringEndsWithSecond4('abcde', 'cde');
firstStringEndsWithSecond4('abcde', 'abc');
