const plotly = require('plotly')('username', 'apiKey');

const trace1 = {
  x: [1, 2, 3, 4, 5],
  y: [10, 15, 13, 17],
  mode: 'markers',
  type: 'scatter'
};

const data = [trace1];

const layout = {
  title: 'Scatter Plot Example'
};

plotly.newPlot('myDiv', data, layout);
