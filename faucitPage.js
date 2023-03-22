import main2 from "/mainPage2.js";
import User from "/users.js";
import content from "/script.js";

export default function faucitPage() {
    mainPage2text.innerHTML = "";
    mainPage2Btns.innerHTML = "";

    let faucitText = document.createElement('h3');
    content.appendChild(faucitText);
    faucitText.id = "faucitText";

    let faucitSaldo = document.createElement('h4');
    content.appendChild(faucitSaldo);
    faucitSaldo.id = "faucitSaldo";

    let faucitBtnDiv = document.createElement('div');
    content.appendChild(faucitBtnDiv);
    faucitBtnDiv.id = "faucitBtnDiv";

    let addFaucitBtn = document.createElement('button');
    faucitBtnDiv.appendChild(addFaucitBtn);
    addFaucitBtn.innerHTML = "Collect Faucit";
    addFaucitBtn.id = "addFaucitBtn";

    let faucitBackBtn = document.createElement('button');
    faucitBtnDiv.appendChild(faucitBackBtn);
    faucitBackBtn.innerHTML = "Back";

    // var faucitVar = 100;

    var userArrayFaucit = JSON.parse(localStorage.getItem('users'));

    var currentUserFaucit = JSON.parse(localStorage.getItem('currentUserLoggedIn'));

    addFaucitBtn.addEventListener('click', () => {
        // console.log(currentUserFaucit);
        // console.log(userArrayFaucit);

        // console.log(currentUserFaucit.currentUsername);
        // console.log(userArrayFaucit.array[0].username);

        for(let i = 0; i < userArrayFaucit.array.length; i++){
            // console.log(userArrayFaucit.array[i].username);
            if(currentUserFaucit.currentUsername == userArrayFaucit.array[i].username){
                // console.log("Add 100 coins to svens faucit");
                var newSum = userArrayFaucit.array[i].faucit + 100;
                // console.log(newSum);
                currentUserFaucit.currentFaucit = newSum;
                userArrayFaucit.array[i].faucit = newSum;
                // console.log(userArrayFaucit.array[i]);
                // console.log(userArrayFaucit.array);
                // console.log(userArrayFaucit);
                localStorage.setItem('users', JSON.stringify(userArrayFaucit));
                localStorage.setItem('currentUserLoggedIn', JSON.stringify(currentUserFaucit));
                
                var saldoVar = userArrayFaucit.array[i].faucit;
                faucitText.innerHTML = "Click 'Collect Faucit' button to collect 100 DummieCoins:";
                faucitSaldo.innerHTML = "Your Saldo: " + saldoVar + " DummieCoins";
                
                
            }
        };
    })

    for(let i = 0; i < userArrayFaucit.array.length; i++){
        // console.log(userArrayFaucit.array[i].faucit);
        if(currentUserFaucit.currentUsername == userArrayFaucit.array[i].username){
            // console.log(userArrayFaucit.array[i].faucit);
            var saldoVar = userArrayFaucit.array[i].faucit;
            
        }
    };
    faucitText.innerHTML = "Click 'Collect Faucit' button to collect 100 DummieCoins:";
    faucitSaldo.innerHTML = "Your Saldo: " + saldoVar + " DummieCoins";

    localStorage.setItem('users', JSON.stringify(userArrayFaucit));

    faucitBackBtn.addEventListener('click', main2)

}