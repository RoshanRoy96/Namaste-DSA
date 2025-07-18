let prices = [7, 6, 4, 3, 1];
let min = prices[0];
let maxProfit = 0;

function findMaxProfit(prices) {
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
}

let result = findMaxProfit(prices);
console.log(result);
