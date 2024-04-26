let n = 5;
let string = "";

for (let x = 1; x <= n; x++)               // External loop
 {
  
  for (let y = 0; y < n - x; y++)          // creating spaces
   {
    string += " ";
  }
  
  for (let z = 0; z < 2 * x - 1; z++)       // creating alphabets

   {
    string += String.fromCharCode(z + 65);
  }
  
  string += "\n";
}
 
console.log(string);