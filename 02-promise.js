// reading a File using Promises
//Promise.all() for parallel execution of multiple promises
//use Promise.all() for concurrent operations


const fs = require('fs').promises;
const promise1 = Promise.resolve('first result');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('second result'), 1000));
const promise3 = fs.readFile('myfirst.txt','utf8');
Promise.all([promise1, promise2, promise3])
.then(results => {
    console.log('result', results);
})
.catch(error =>{
    console.log('error in one of the promises', error);
});
