let arr = [1,2,3,1,2,5,1,7]
let a = 6;                     
let count = -1;

function lastindex(arr,a){                   
    for(let i=0; i<arr.length; i++){
        if(arr[i] === a){
            count = i;
        }
    }
    return count;
}
console.log(lastindex(arr,a));