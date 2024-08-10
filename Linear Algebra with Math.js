const math = require('mathjs');

// Matrix multiplication
const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];
const C = math.multiply(A, B);

console.log(C); // Output: [[19, 22], [43, 50]]

// Solving linear equations
const coefficients = [[3, 2], [1, 2]];
const constants = [5, 5];
const solution = math.lusolve(coefficients, constants);

console.log(solution); // Output: [[1], [2]]
