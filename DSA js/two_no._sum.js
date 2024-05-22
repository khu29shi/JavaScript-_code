let arr = [2,11,7,15,5,4]
let target = 9;
let count = 0;

let twoSum = function(nums,target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                count++
            }
        }
    }
    return count;
}
console.log(twoSum(arr,target));