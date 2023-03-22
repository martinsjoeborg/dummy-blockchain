import main from "./mainPage.js";
import UserArray from "./userArray.js";
import User from "./users.js";

export default function createUser() {

    content.innerHTML = ""; 

    let text1 = document.createElement('h1');
    content.appendChild(text1);
    text1.innerHTML = "Please choose nickname and password";
    text1.id = "text1";

    let formDiv = document.createElement('div');
    content.appendChild(formDiv);
    formDiv.id = "formDiv";

    let userNameForm = document.createElement('input');
    formDiv.appendChild(userNameForm);
    userNameForm.id = "userNameForm";
    userNameForm.placeholder = "Enter username";

    let passWordForm = document.createElement('input');
    formDiv.appendChild(passWordForm);
    passWordForm.placeholder = "Enter password";
    passWordForm.id = "passWordForm";

    let buttonDivCreate = document.createElement("div");
    content.appendChild(buttonDivCreate);
    buttonDivCreate.id = "buttonDivCreate";

    let createNewUserBtn = document.createElement('button');
    buttonDivCreate.appendChild(createNewUserBtn);
    createNewUserBtn.innerHTML = "OK";
    createNewUserBtn.id = "createNewUserBtn";

    let backBtn = document.createElement('button');
    buttonDivCreate.appendChild(backBtn);
    backBtn.innerHTML = "BACK";
    backBtn.id = "backBtn";

    backBtn.addEventListener('click', main)

    createNewUserBtn.addEventListener('click', () => {

        if(!localStorage.getItem("users")){
            var users = new UserArray();

            console.log(users)
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            users = JSON.parse(localStorage.getItem("users"));
        }

        var newUser = new User(userNameForm.value, passWordForm.value);

        users.array.push(newUser);
        
        localStorage.setItem("users", JSON.stringify(users));

        let popUpText = document.createElement('p');
        content.appendChild(popUpText);
        popUpText.id = "popUpText";
        popUpText.innerHTML = "REGISTERD";
    })
}