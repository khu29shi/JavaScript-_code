let num = [11, 12, 13, 14]

function totalsum(arr) {
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

let acc = totalsum(num)
console.log(acc);