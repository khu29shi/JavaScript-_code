let arr = [1,2,3,4,5,6]
let check = true;

function sorted(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[i-1]){
            check = false;
            break;
        }
    }
    return check;
}
console.log(sorted(arr));