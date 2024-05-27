// a promise
let promise = new Promise (function(resolve,reject){
    setTimeout(function () {
        resolve('Promise resolved')}, 4000);
})

// async function
async function asyncfunc() {

    //wait until the promise resolved
    let result = await promise;

    console.log(result);
    console.log('Hello');
}

// calling the async function
asyncfunc(); 
