const path = require('path');

console.log('File name: ', path.basename(__filename));
console.log('Directore name: ', path.dirname(__filename));
console.log('Extension name: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));
console.log('New file: ', path.join(__dirname, 'server', 'index.html'))
