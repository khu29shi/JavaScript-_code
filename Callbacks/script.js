function customMapper(arr, fn){
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let ans = fn(arr[i], i)
        result.push(ans)
    }
    return result
}

let nums = [1, 2, 3, 4, 5]
let myFun = customMapper(nums, function square(v, i){
    return v*v
})

console.log(myFun);