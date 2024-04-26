let obj={
    name:"Khushboo",
    age:23,
    hobbies:["Sketching","Drawing","Badminton"]
}

for(let i in obj)
{
    // console.log(i);  //print key
    // console.log(obj[i]); //print key & values seperately
    console.log(`${i} : ${obj[i]}`); //template literals
}