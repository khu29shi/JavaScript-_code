let para= document.getElementById("j1");
console.log(para);


let B=document.getElementById("button");
B.addEventListener("click",()=>{
    para.style.color="red";
})


let heading=document.createElement("h1");
heading.textContent="JavaScript";
document.body.appendChild(heading);

heading.remove();                    // to remove heading