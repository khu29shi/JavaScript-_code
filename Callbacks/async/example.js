let h1 = document.querySelector("h1");

function colorChange(color,delay,nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColor) nextColor();
    }, delay)
}

