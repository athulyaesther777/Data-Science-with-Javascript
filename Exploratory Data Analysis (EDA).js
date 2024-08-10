// Summarize data with mean and standard deviation
const data = [10, 20, 30, 40, 50];
const mean = data.reduce((sum, value) => sum + value, 0) / data.length;
const stdDev = Math.sqrt(data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / data.length);

console.log(`Mean: ${mean}, Standard Deviation: ${stdDev}`);
// Output: Mean: 30, Standard Deviation: 14.142135623730951
