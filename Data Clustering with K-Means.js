const kmeans = require('node-kmeans');

const data = [
  [1, 2],
  [2, 3],
  [3, 4],
  [8, 9],
  [9, 10],
  [10, 11],
];

kmeans.clusterize(data, { k: 2 }, (err, res) => {
  if (err) console.error(err);
  else console.log(res);
  // Output: Clusters data into 2 groups based on proximity
});
