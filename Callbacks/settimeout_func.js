let task1 = setInterval(()=> {
    console.log("First task");
},7000)

let task =  setInterval(()=> {
    console.log("second task");
    clearInterval(task1)
},4000)