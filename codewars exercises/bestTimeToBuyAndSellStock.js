// PROBLEM
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

// SOLUTION

const renderResult = function (result) {
  const resultList = document.querySelector('.results');
  const resultElement = document.createElement('li');
  resultElement.classList.add('result');
  resultElement.textContent = `Result: ${result}`;
  resultList.after(resultElement);
};

const getMaxProfit = function (prices) {
  let maxProfit = 0;
  prices.reduce((previousElement, currentElement) => {
    if (currentElement - previousElement > 0)
      maxProfit = maxProfit + (currentElement - previousElement);
    return currentElement;
  });
  renderResult(maxProfit);
  return maxProfit;
};

// TESTS
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

getMaxProfit(prices1);
getMaxProfit(prices2);
getMaxProfit(prices3);
