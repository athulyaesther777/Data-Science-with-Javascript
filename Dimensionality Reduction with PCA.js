const PCA = require('pca-js');

const data = [
  [2.5, 2.4],
  [0.5, 0.7],
  [2.2, 2.9],
  [1.9, 2.2],
  [3.1, 3.0],
  [2.3, 2.7],
  [2.0, 1.6],
  [1.0, 1.1],
  [1.5, 1.6],
  [1.1, 0.9]
];

const pca = new PCA();
const [reducedData] = pca.pca(data, 2);

console.log(reducedData);
// Output: Reduced data with PCA applied
