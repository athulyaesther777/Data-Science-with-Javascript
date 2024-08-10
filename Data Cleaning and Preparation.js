// Removing null or undefined values from an array
const rawData = [1, null, 2, undefined, 3, 4, NaN];
const cleanData = rawData.filter(x => x != null && !isNaN(x));
console.log(cleanData); // Output: [1, 2, 3, 4]

// Normalizing data (scaling values between 0 and 1)
const max = Math.max(...cleanData);
const min = Math.min(...cleanData);
const normalizedData = cleanData.map(x => (x - min) / (max - min));
console.log(normalizedData); // Output: [0, 0.333, 0.666, 1]
