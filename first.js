const fs = require('fs');

// read the file Asynchronously So stored in callback function executed after call stack content
fs.readFile('myfirst.txt', 'utf8', (err, data) =>{
    if (err) {
        console.log('error handling : '+err);
    }
    console.log('File data :' , data);
});

console.log('Reading file ...'); // this is first executed because readFile is async function
console.log('End of program');