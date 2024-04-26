let x = 5;                // you can take input using prompt or change the value
let string = "";
                           
for (let y = 1; y <= x; y++)          // External loop
{
  for (let z = 0; z < x - y + 1; z++) {
    string += String.fromCharCode((x - y - z) + 65);
  }
  string += "\n";
}
console.log(string);