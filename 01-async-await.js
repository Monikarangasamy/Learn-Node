const mypromise = new Promise((resolve, reject) => {
    const mypromise = true;
    if(mypromise) {
        setTimeout(resolve, 3000, 'Promise resolved after 3 seconds');
    } else {
        reject('Promise rejected');
    }
});

async function asyncFunction(){
    try{
        console.log('hi...');
        const res = await mypromise
        console.log(res);
        console.log('bye...');
}
    catch(err){
        console.log(err);
    }   
};
asyncFunction();