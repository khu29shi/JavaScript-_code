function add (num1, num2, callback) {
    let result = num1 + num2;
    console.log("Add function result: ",result);
    callback(result);
}
add(4,6);