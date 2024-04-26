let row = 5;
for(let p=1;p<=row;p++)
{
   
    let pattern = "";      //print space
    for(let q=1; q<=row-p ;q++)
        {
            pattern += " ";
        }                      //printing ******
        
    for(let r=1; r<=2*p-1; r++)
    {
        pattern += "*";        
    }

    console.log(pattern);
}



for(let p=1; p<=row; p++)
{
    let pattern = "";

    for(let q=1; q<=p; q++)
    {
        pattern += " ";
    }

    for(let r=(row-p)*2-1; r>0; r--)
    {
        pattern += "*";
    }

    console.log(pattern);
}