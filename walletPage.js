import main2 from "/mainPage2.js";
import faucitPage from "/faucitPage.js";

export default function walletPage() {
    mainPage2text.innerHTML = "";
    mainPage2Btns.innerHTML = "";

    let walletText = document.createElement('h2');
    content.appendChild(walletText);
    walletText.innerHTML = "Wallet view";
    walletText.id = "walletText";

    let walletSaldoText = document.createElement('h3');
    content.appendChild(walletSaldoText);
    walletSaldoText.id = "walletSaldoText";

    let walletBtnDiv = document.createElement('div');
    content.appendChild(walletBtnDiv);
    walletBtnDiv.id = "walletBtnDiv";

    let walletBackBtn = document.createElement('button');
    walletBtnDiv.appendChild(walletBackBtn);
    walletBackBtn.innerHTML = "BACK";
    walletBackBtn.id = "walletBackBtn";

    // var walletSaldo = 110;
    // walletSaldoText.innerHTML = "Your Saldo: " + saldoVar + " DummieCoins";

    var userArrayFaucit = JSON.parse(localStorage.getItem('users'));

    var currentUserFaucit = JSON.parse(localStorage.getItem('currentUserLoggedIn'));
    
    for(let i = 0; i < userArrayFaucit.array.length; i++){
        // console.log(userArrayFaucit.array[i].faucit);
        if(currentUserFaucit.currentUsername == userArrayFaucit.array[i].username){
            // console.log(userArrayFaucit.array[i].faucit);
            var saldoVar = userArrayFaucit.array[i].faucit;
        }
    };
    walletSaldoText.innerHTML = "Your Saldo: " + saldoVar + " DummieCoins";

    walletBackBtn.addEventListener('click', main2)
}