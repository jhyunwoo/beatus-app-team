const bgColor = document.querySelector("body")

function changeBg(){
    const winWidth = window.innerWidth
    if(winWidth > 1500){
        bgColor.style.backgroundColor = "green"
    }else if(winWidth > 1000){
        bgColor.style.backgroundColor = "blue"
    } else{
        bgColor.style.backgroundColor = "red"
    }
}

changeBg()

window.addEventListener("resize", changeBg)