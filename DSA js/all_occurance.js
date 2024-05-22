let arr = [1,2,3,1,5,1,1,2]
let x = 2;
let count = 0;

const allOcr = (arr,x) =>{              //using arrow function
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x){
            count++;
        }
    }
    return count;
}
console.log(allOcr(arr,x));