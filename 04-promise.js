//Promise.race() 

const promise1 = new Promise(resolve => setTimeout(() => resolve('first result'),10000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('second result'), 5000));

Promise.race([promise1, promise2])
.then( result => {
    console.log('fast result', result);
});
