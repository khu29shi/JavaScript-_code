let row = 5;
for(let p=1;p<=row;p++)
{
   
    let pattern = "";
    for(let q=1;q<=row-p;q++)
        {
            pattern += " ";
        }
        
    for(let r=1;r<=p;r++)
    {
        pattern += "*";  //pattern = pattern+"*";
    }

    console.log(pattern);
}