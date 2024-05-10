function todo (task) {
    let done = setTimeout(function update() {
        console.log("completed",task);
    },4000)
    return done;
}

console.log("Not completed assignment");
todo("Assignment")
console.log("Not completed assignment");