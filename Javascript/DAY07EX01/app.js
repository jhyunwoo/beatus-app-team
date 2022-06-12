const box = document.getElementById("box")
function changeColor(){
    box.style.backgroundColor = "red";
}
box.addEventListener("click", changeColor)