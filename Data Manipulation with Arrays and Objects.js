// Filtering data: Extract values greater than 3
const data = [1, 2, 3, 4, 5];
const filteredData = data.filter(x => x > 3);
console.log(filteredData); // Output: [4, 5]

// Mapping data: Multiply each value by 2
const mappedData = data.map(x => x * 2);
console.log(mappedData); // Output: [2, 4, 6, 8, 10]

// Reducing data: Sum all values
const sum = data.reduce((acc, x) => acc + x, 0);
console.log(sum); // Output: 15
