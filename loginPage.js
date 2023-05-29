import createUser from "/createPage.js";
import main2 from "/mainPage2.js";
// import content from "/script.js";

export default function logIn() {

    content.innerHTML = "";

    let text2 = document.createElement('h1');
    content.appendChild(text2);
    text2.innerHTML = "LOG IN";
    text2.id = "text2";

    let formDivLogin = document.createElement('div');
    content.appendChild(formDivLogin);
    formDivLogin.id = "formDivLogin";

    let userName = document.createElement('input');
    formDivLogin.appendChild(userName);
    userName.placeholder = "Username";
    userName.id = "userName";

    let passWord = document.createElement('input');
    formDivLogin.appendChild(passWord);
    passWord.placeholder = "Password";
    passWord.id = "passWord";
    passWord.type = "password";

    let buttonDivLogin = document.createElement("div");
    content.appendChild(buttonDivLogin);
    buttonDivLogin.id = "buttonDivLogin";

    let logInBtn = document.createElement('button');
    buttonDivLogin.appendChild(logInBtn);
    logInBtn.innerHTML = "LOG IN";
    logInBtn.id = "logInBtn";

    let backBtn = document.createElement('button');
    buttonDivLogin.appendChild(backBtn);
    backBtn.innerHTML = "REGISTRER";
    backBtn.id = "backBtn";

    backBtn.addEventListener('click', createUser);

    logInBtn.addEventListener('click', () => {

        var userNameArray = JSON.parse(localStorage.getItem("users"));

        if(localStorage.getItem("users")){
            findAUser();
        } else {
            let popUpText3 = document.createElement('p');
            content.appendChild(popUpText3);
            popUpText3.innerHTML = "user doesn't exist";
            popUpText3.id = "popUpText3";
        }
        
        function findAUser() {
            for (var i = 0; i < userNameArray.array.length; i++) {
                if(userName.value === userNameArray.array[i].username && passWord.value === userNameArray.array[i].password){

                    var currentUser = {

                        currentUsername: userName.value,
                        currentPassword: passWord.value,
                        currentFaucit: userNameArray.array[i].faucit
                
                    }

                    localStorage.setItem("currentUserLoggedIn", JSON.stringify(currentUser));

                    main2();
                } else {
                    let popUpText2 = document.createElement('p');
                    content.appendChild(popUpText2);
                    popUpText2.innerHTML = "wrong username or password";
                    popUpText2.id = "popUpText2";
                }
            }
        
        }
        
    })
}
