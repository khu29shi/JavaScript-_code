let arr = [2,11,8,15,5,4]
let target = 9;

let twoSum = function(nums,target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return[i,j];
            }
        }
    }
    return[];
}
console.log(twoSum(arr,target));