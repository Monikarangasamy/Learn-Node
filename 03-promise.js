// Promise methods
//promise.then()

mypromise 
.then(
    result => console.log(result),
    error => console.log(error.message) // to get only message
);

//promise.catch()
mypromise 
.then ( result => console.log('result'))
.catch(err => console.log('error'));

//promise.finally()
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Operation completed'));

//error handling in promises
//using reject() method in promise
//using try...catch block inside promise
//usinh then() and catch() methods

function fetchData() {
  return new Promise((resolve, reject) => {
    reject(new Error('Network error'));
  });
}
