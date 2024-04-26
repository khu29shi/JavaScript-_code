const arr = [1,2,3,4,5]

const totalsum = arr.reduce((acc,cv) =>
{
    return acc*cv;
},2)

console.log(totalsum);