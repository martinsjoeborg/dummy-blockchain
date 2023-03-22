import main from "./mainPage.js";
import main2 from "./mainPage2.js";

const content = document.getElementById('content');


if(localStorage.getItem("currentUserLoggedIn")){
    main2();
} else {
    main();
}