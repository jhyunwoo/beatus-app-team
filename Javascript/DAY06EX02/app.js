const title = document.getElementById("h1-title")

function resizeWindow(){
    if(window.innerWidth > 1000){
        title.innerText = "브라우저 창의 크기가 너무 큽니다.";
    } else if(window.innerWidth > 700){
        title.innerText = "브라우저 창의 크기가 적당합니다."
    } else{
        title.innerText = "브라우저 창의 크기가 작습니다."
    }
}

window.addEventListener("resize", resizeWindow)