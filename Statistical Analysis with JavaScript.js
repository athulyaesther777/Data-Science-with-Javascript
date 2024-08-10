// Calculate mean
const data = [10, 20, 30, 40, 50];
const mean = data.reduce((sum, value) => sum + value, 0) / data.length;
console.log(mean); // Output: 30

// Calculate standard deviation
const variance = data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / data.length;
const stdDev = Math.sqrt(variance);
console.log(stdDev); // Output: 14.142135623730951
