// Imputing missing data with mean
const data = [1, null, 2, 4, null, 5];
const mean = data.filter(x => x !== null).reduce((sum, x) => sum + x, 0) / data.filter(x => x !== null).length;

const imputedData = data.map(x => x === null ? mean : x);
console.log(imputedData); // Output: [1, 3, 2, 4, 3, 5]
