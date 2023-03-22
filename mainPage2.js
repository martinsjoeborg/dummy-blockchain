import main from "/mainPage.js";
import transactionPage from "/transactionPage.js";
import walletPage from "/walletPage.js";
import faucitPage from "/faucitPage.js";
import content from "/script.js";

export default function main2() {

    var loggedInName = JSON.parse(localStorage.getItem("currentUserLoggedIn"));

    console.log(loggedInName.currentUsername);

    content.innerHTML = "";
    
    let logOutBtn = document.createElement('button');
    content.appendChild(logOutBtn);
    logOutBtn.innerHTML = "LOG OUT";
    logOutBtn.id = "logOutBtn";

    let mainPage2text = document.createElement('h2');
    content.appendChild(mainPage2text);
    mainPage2text.innerHTML = "Happy days! You are logged in as " + loggedInName.currentUsername;
    mainPage2text.id = "mainPage2text";

    let mainPage2Btns = document.createElement('div');
    content.appendChild(mainPage2Btns);
    mainPage2Btns.id = "mainPage2Btns";

    let transactionBtn = document.createElement('button');
    mainPage2Btns.appendChild(transactionBtn);
    transactionBtn.innerHTML = "MAKE TRANSACTION";

    let walletBtn = document.createElement('button');
    mainPage2Btns.appendChild(walletBtn);
    walletBtn.innerHTML = "WALLET";

    let faucitBtn = document.createElement('button');
    mainPage2Btns.appendChild(faucitBtn);
    faucitBtn.innerHTML = "FAUCIT";





    faucitBtn.addEventListener('click', faucitPage)

    walletBtn.addEventListener('click', walletPage)

    transactionBtn.addEventListener('click', transactionPage)


    logOutBtn.addEventListener('click', () => {
        localStorage.removeItem("currentUserLoggedIn");
        main();
    })
    

}