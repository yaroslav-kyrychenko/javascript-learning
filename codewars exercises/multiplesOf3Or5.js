// Task
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// My code
const multiplesOfThreeOrFive = function (inputValue) {
  // The input value should be at least 3 so that we have at least one multiple to return
  if (inputValue <= 3) return 0;

  const multiples = [];
  for (let i = 1; ; i++) {
    const multipleOfThree = i * 3;
    const multipleOfFive = i * 5;
    if (multipleOfThree >= inputValue) break;
    multiples.push(multipleOfThree);
    if (multipleOfFive >= inputValue) continue;
    multiples.push(multipleOfFive);
  }
  uniqueMultiples = [...new Set(multiples)];
  const sumOfMultiples = uniqueMultiples.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sumOfMultiples;
};
