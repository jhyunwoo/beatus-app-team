const title = document.querySelector("body")

function resizeWindow(){
    if(window.innerWidth > 1000){
        title.style.backgroundColor = "blue";
    } else if(window.innerWidth > 700){
        title.style.backgroundColor = "green"
    } else{
        title.style.backgroundColor = "red"
    }
}

window.addEventListener("resize", resizeWindow)
