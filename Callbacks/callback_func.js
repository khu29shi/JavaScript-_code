function sayHello(name, callback) {
    console.log("Hello, " + name);
    callback();
};

function greet() {
    console.log("Welcome");
};

sayHello("Khushboo", greet);
