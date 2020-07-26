const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), (error) => {
  if (error) console.error('Error while creating folder: ', error.message);
  else console.log('Folder was created!');
});

const filePath = path.join(__dirname, 'test', 'test.txt');

fs.writeFile(filePath, 'hello nodejs', (error) => {
  if (error) console.error('Error while creating file: ', error.message);
  else console.log('File was created!');
});

fs.readFile(filePath, 'utf8', (error, content) => {
  if (error) console.error('Error while reading file: ', error.message);
  else console.log('File content: ', content);
});
