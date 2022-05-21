const box = document.getElementById("box")
box.style.backgroundColor = "blue"
function changeColor(){
    const boxColor = box.style.backgroundColor
    if(boxColor === "blue"){
        box.style.backgroundColor = "red"
    } else{
        box.style.backgroundColor = "blue"
    }
}

box.addEventListener("click", changeColor)