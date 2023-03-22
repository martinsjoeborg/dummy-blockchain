import createUser from "/createPage.js";
import logIn from "/loginPage.js";

export default function main() {
    
    content.innerHTML = "";

    let mainPageContent = document.createElement('div');
    content.appendChild(mainPageContent);
    mainPageContent.id = "mainPageContent";

    let welcomeText = document.createElement('h1');
    mainPageContent.appendChild(welcomeText);
    welcomeText.innerHTML = "WELCOME TO DUMMIE BLOCKCHAIN ISLAND";
    welcomeText.id = "welcomeText";

    let buttonDiv = document.createElement("div");
    mainPageContent.appendChild(buttonDiv);
    buttonDiv.id = "buttonDiv";

    let loginBtn = document.createElement('button');
    buttonDiv.appendChild(loginBtn);
    loginBtn.innerHTML = "LOG IN";
    loginBtn.id = "loginBtn";

    let createBtn = document.createElement('button');
    buttonDiv.appendChild(createBtn);
    createBtn.innerHTML = "REGISTER";
    createBtn.id = "createBtn";

    createBtn.addEventListener('click', createUser)

    loginBtn.addEventListener('click', logIn)



}