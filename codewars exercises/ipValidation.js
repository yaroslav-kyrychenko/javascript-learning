// PROBLEM
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// SOLUTION

const isValidIP = function (inputString) {
  const validIP =
    /((25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)/;
  const inputStringArray = inputString.split('.');
  if (!validIP.test(inputString) || inputStringArray.length > 4) {
    console.log(false);
    return false;
  }
  for (const element of inputStringArray) {
    if (
      element < 0 ||
      element > 255 ||
      element.includes(' ') ||
      element.includes('\n') ||
      /[a-z]/.test(element) ||
      (element.length > 1 && element[0] === '0')
    ) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

// TESTS
isValidIP('12.255.56.1'); // should be true
isValidIP('137.255.156.100'); // should be true
isValidIP(''); // should be false
isValidIP('abc.def.ghi.jkl'); // should be false
isValidIP('123.456.789.0'); // should be false
isValidIP('12.34.56'); // should be false
isValidIP('01.02.03.04'); // should be false
isValidIP('256.1.2.3'); // should be false
isValidIP('1.2.3.4.5'); // should be false
isValidIP('123,45,67,89'); // should be false
isValidIP('1e0.1e1.1e2.2e2'); // should be false
isValidIP(' 1.2.3.4'); // should be false
isValidIP('1.2.3.4 '); // should be false
isValidIP('12.34.56.-7'); // should be false
isValidIP('1.2.3.4\n'); // should be false
isValidIP('\n1.2.3.4'); // should be false
isValidIP('89.76.116.16ab'); // should be false
