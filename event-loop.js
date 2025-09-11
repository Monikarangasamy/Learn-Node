// console.log('First');
// setTimeout(() => console.log('second'), 0); 
// // even with 0ms delay, goes to callback queue so the event loop picks it after call stack is empty
// console.log('third');


// console.log('first');
// setTimeout(() => console.log('second'),2000);
// //The event loop consider it is a microtask and executes it before any other task in the callback queue like setTimeout and setInterval
// Promise.resolve().then(() => console.log('third'));
// console.log('fourth');


console.log('1. Start');
// Next tick queue
process.nextTick(() => console.log('2. Next tick'));
// Microtask queue (Promise)
Promise.resolve().then(() => console.log('3. Promise'));
// Timer phase
setTimeout(() => console.log('4. Timeout'), 0);
// Check phase
setImmediate(() => console.log('5. Immediate'));
console.log('6. End');
