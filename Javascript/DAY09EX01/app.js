const userName = document.getElementById("nameIn");
const inputArea = document.getElementById("inputArea");
const printArea = document.getElementById("printArea");

function namePrint(event){
    event.preventDefault();
    const nameOfUser = userName.value;
    localStorage.setItem("name", nameOfUser);
    const nameTag = document.createElement("h1");
    nameTag.innerText = localStorage.getItem("name");
    printArea.appendChild(nameTag);
    inputArea.style.visibility = "hidden";
};

inputArea.addEventListener("submit", namePrint);