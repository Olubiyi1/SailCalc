let display = document.getElementById('display');
let toShow = document.getElementById("collect")


let toDisplay = (number)=>{
   if (display.textContent.length >= 25) {
    alert("number too long,advised to clear")
   }
    return display.textContent += number;
}

let clr = ()=>{
    display.textContent = " ";
    toShow.textContent = " "

}

let del = ()=>{
   display.textContent = display.innerText.slice(0,-1)
}

let calculate = ()=>{
    toShow.textContent = eval(display.textContent)
    // display.textContent =eval(display.textContent);
}

