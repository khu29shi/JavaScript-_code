let arr = [1,2,3,4,5,6,7]
let x = 5;
function linerSearch(arr, x){
    for(let i=0; i<arr.length; i++)
        {
            if(arr[i] === x)
                {
                    return i;
                }
        }
        return none;
}
console.log(linerSearch(arr,x));