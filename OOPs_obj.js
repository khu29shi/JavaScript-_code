let person = {
    first_name : 'Mahak',
    last_name : 'Karsh',

    
    //method
    getFunction: function() {
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    }, 

    //object within object
    phone_number : {
        mobile : "98567462",
        landline : "0771"
    }
}

console.log(person.getFunction());
console.log(person.phone_number.mobile);