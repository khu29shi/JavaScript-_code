function customMapper(arr,fn) {
    let result = []
    for (i=0; i<arr.length; i++) {
        let ans = fn(arr[i],i)
        result.push(ans)
    }
    return result;
}

let a = [2,4,6,8]
let b = customMapper(a, function square(v,i){
    return v+v;
})
console.log(b);