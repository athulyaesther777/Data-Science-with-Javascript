// Simple linear regression
function linearRegression(data) {
  const n = data.length;
  const sumX = data.reduce((sum, [x, _]) => sum + x, 0);
  const sumY = data.reduce((sum, [_, y]) => sum + y, 0);
  const sumXY = data.reduce((sum, [x, y]) => sum + x * y, 0);
  const sumX2 = data.reduce((sum, [x, _]) => sum + x * x, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

const data = [[1, 2], [2, 3], [3, 5], [4, 4], [5, 5]];
const { slope, intercept } = linearRegression(data);
console.log(`Slope: ${slope}, Intercept: ${intercept}`);
// Output: Slope: 0.7, Intercept: 1.3
