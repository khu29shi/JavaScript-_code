function customfilter(arr,fn) {
    let result = []
    for(i=0; i<arr.length; i++) {
        let ans = fn(arr[i],i)
        result.push(ans)
    }
    return result;
}

let x = [1,2,3,4,5,6,7,8,9,10];
let filteredArr = customfilter (x, function filterArr(ele) {
   if( ele>=6){
        return ele;
   }
})
console.log(filteredArr);