import main2 from "/mainPage2.js";

export default function transactionPage() {
    mainPage2text.innerHTML = "";
    mainPage2Btns.innerHTML = "";

    let transactionDiv = document.createElement('div');
    content.appendChild(transactionDiv);
    transactionDiv.id = "transactionDiv";

    let receiver = document.createElement('input');
    transactionDiv.appendChild(receiver);
    receiver.placeholder = "Receiver name";
    receiver.id = "receiver";

    let amount = document.createElement('input');
    transactionDiv.appendChild(amount);
    amount.placeholder = "Amount to send";
    amount.id = "amount";

    let sendBtn = document.createElement('button');
    transactionDiv.appendChild(sendBtn);
    sendBtn.innerHTML = "SEND";
    sendBtn.id = "sendBtn";

    let transBackBtn = document.createElement('button');
    transactionDiv.appendChild(transBackBtn);
    transBackBtn.innerHTML = "BACK";
    transBackBtn.id = "transBackBtn";

    var userArrayFaucit = JSON.parse(localStorage.getItem('users'));

    var currentUserFaucit = JSON.parse(localStorage.getItem('currentUserLoggedIn'));

    sendBtn.addEventListener('click', () => {
         
        for(let i = 0; i < userArrayFaucit.array.length; i++){
            //Kolla om currentFaucit är tillräckligt med pengar
            //Kolla om recievern finns med som user
            if(currentUserFaucit.currentFaucit >= amount.value && userArrayFaucit.array[i].username == receiver.value){
                var newCurrentFaucit = currentUserFaucit.currentFaucit - amount.value;
                //adderar inte, lägger bara värdet brevid.
                var newReceiverFaucit = (userArrayFaucit.array[i].faucit) + (amount.value);

                currentUserFaucit.currentFaucit = newCurrentFaucit;
                userArrayFaucit.array[i].faucit = newReceiverFaucit;

                localStorage.setItem('currentUserLoggedIn', JSON.stringify(currentUserFaucit));
                localStorage.setItem('users', JSON.stringify(userArrayFaucit));
            }
            if(userArrayFaucit.array[i].username == currentUserFaucit.currentUsername){
                var newUserFaucit = userArrayFaucit.array[i].faucit - amount.value;
                userArrayFaucit.array[i].faucit = newUserFaucit;
                //lägger inte till nya värdet i arrayn.
                localStorage.setItem('users', JSON.stringify(userArrayFaucit));
            }
        };
    })


    transBackBtn.addEventListener('click', main2);
}