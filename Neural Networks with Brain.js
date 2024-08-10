const brain = require('brain.js');
const net = new brain.NeuralNetwork();

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

const output = net.run([1, 0]); // Predict based on the input
console.log(output); // Output: Approx. [1] (predicts XOR result)
