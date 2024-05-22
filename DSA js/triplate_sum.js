let arr = [2,5,6,7,4]
let target = 13;

let threeSum = function(arr,target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            for(let k=j+1; k<arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === target){
                    return[i,j,k]
                }
            }
        }
    }
    return[];
}
console.log(threeSum(arr,target));
