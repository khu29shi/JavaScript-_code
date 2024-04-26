let a =5;
                    //pyramid
for(let i=1; i<=a; i++)
{
    let diamond = "";

    for(let j=1; j<a-i+1; j++)
    {
        diamond += " ";
    }

    for(let k=1; k<=2*i-1; k++)
    {
        diamond += k;
    }
    console.log(diamond);
}

                    //reverse pyramid
for(let i=1; i<=a-1; i++)
{
    let diamond = "";

    for(let j=1; j<i+1; j++)
    {
        diamond += " ";
    }

    for(let k=1; k<=2*(a-i)-1; k++)
    {
        diamond += k;
    }
    console.log(diamond);
}


