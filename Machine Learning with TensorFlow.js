// Simple linear regression with TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Define a model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Prepare the training data
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model
model.fit(xs, ys, {epochs: 500}).then(() => {
  // Make a prediction
  model.predict(tf.tensor2d([5], [1, 1])).print(); // Predicting for input 5
});
