let name = "Akshay";
function first() {
    function second() {
        let name = "Khushi";
        function third() {
            function fourth() {
                return name;
            }
            return fourth();
        }
        return third();
    }
    return second();
}
//let print = first();
console.log(name);