const fs = require('fs');

// Reading a large file with streams
const readStream = fs.createReadStream('largefile.txt', { encoding: 'utf8' });

readStream.on('data', chunk => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
  console.log('Finished reading the file.');
});

readStream.on('error', err => {
  console.error('An error occurred:', err);
});
