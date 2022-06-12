const bluebox = document.getElementById("hello-box");

function changeText(){
    bluebox.innerText = "Beatus";
}

function restoreText(){
    bluebox.innerText = "Hello"
}



bluebox.addEventListener("mouseover", changeText)
bluebox.addEventListener("mouseleave", restoreText)