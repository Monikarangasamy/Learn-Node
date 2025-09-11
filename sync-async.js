// Synchronous file read example
// const fs = require('fs');
// console.log('1. Starting sync read...');
// const data = fs.readFileSync('myfirst.txt', 'utf8');
// console.log('2. File contents:', data);
// console.log('3. Done reading file');


// Asynchronous file read example
// const fs = require('fs');
// console.log('1.starting async read');
// const data = fs.readFile('myfirst.txt', 'utf8',(err,data) => {
//     if (err) throw err;
//     console.log('2. file reading ', data);
// });
// console.log('3. done reading file');


//callback hell => perform multiple async operations in they will have nested callbacks making code hard to read and maintain
// fs.readFile('myfirst.txt', 'utf8',(err,data) => {
//     if (err) throw err; 
//     console.log('File reading ', data);
//     fs.writeFile('myfirst.txt', data + '\n Appended text', (err) => {
//         if (err) throw err;
//         console.log('File written successfully');    
//         fs.readFile('myfirst.txt', 'utf8',(err,data) => {
//             if (err) throw err; 
//             console.log('File reading again ', data);
//         });
//     });
// });


// to avoid callback hell we can use Promises and async/await

const fs = require('fs').promises;

console.log('1. Reading file...');
fs.readFile('myfirst.txt', 'utf8')
  .then(data => {
    console.log('3. File content:', data);
  })
  .catch(err => console.error('Error:', err));

console.log('2. This runs before file is read!');
