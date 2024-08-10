// Calculate moving average
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const windowSize = 3;

const movingAverage = data.map((_, idx, arr) => {
  if (idx < windowSize - 1) return null;
  return arr.slice(idx - windowSize + 1, idx + 1).reduce((sum, val) => sum + val, 0) / windowSize;
}).filter(x => x !== null);

console.log(movingAverage); // Output: [2, 3, 4, 5, 6, 7, 8]
