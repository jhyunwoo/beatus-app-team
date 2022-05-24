const userName = prompt("이름을 입력해주세요.");
const nameLoc = document.querySelector("#userName");
const createName = document.createElement("h1");
createName.innerText = userName + "님 안녕하세요.";
nameLoc.appendChild(createName);
