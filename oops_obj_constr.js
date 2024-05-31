//using a constructor
function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

//Creating new instance of person object
let Person1 = new person("Akshay" , "Thakur");
let person2 = new person("Mahak" , "Karsh");

console.log(Person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);