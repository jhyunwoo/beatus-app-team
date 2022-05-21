const box = document.getElementById("rainbow")
box.style.backgroundColor = "red"
function changeColor(){
    const color = box.style.backgroundColor
    if(color === "red"){
        box.style.backgroundColor = "orange"
    } else if(color === "orange"){
        box.style.backgroundColor = "yellow"
    } else if(color === "yellow"){
        box.style.backgroundColor = "green"
    } else if(color === "green"){
        box.style.backgroundColor = "red"
    } 
}

box.addEventListener("click", changeColor)