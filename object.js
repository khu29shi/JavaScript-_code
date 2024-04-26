let student = {
    name : "Khushboo",
    age : 23,
    skills : ["HTML","CSS","Java","Php"],
    Bio : function() {
        console.log(`${this.name} is ${this.age} years old and her skill are ${this.skills}`);
    }
}
//student.Bio()

student.name = "Ankush"
student.Bio()