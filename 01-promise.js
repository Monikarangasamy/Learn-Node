const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5
        if (success) {
            resolve('operation completed successfully');
        }
        else{
            reject(new Error('Operation failed'));
        }
    }, 1000);

    });
    mypromise 
    .then(result => console.log('success ', result))
    .catch(err => console.log('error ',err)); // also use err.message to get only message