
let connectToLogIn = document.getElementById("connect");
connectToLogIn.click();
console.log(connectToLogIn);
let switchToLogIn = () => {
    document.getElementById('sigh-up').style.display = 'none';
    document.getElementById('log-in').style.display = 'block';
};
connectToLogIn.addEventListener("click", switchToLogIn);

let connectToSighUp = document.getElementById("returnToForm1");
connectToSighUp.click();
console.log(connectToLogIn);
let switchToSighUp = () => {
    document.getElementById('sigh-up').style.display = 'block';
    document.getElementById('log-in').style.display = 'none';
};
connectToSighUp.addEventListener("click", switchToSighUp);
let user = {
    name: "",
    mail: "",
    password: "",
    wins: 0
}
let currentUser=localStorage.getItem("currentUser")
let flagFirstTime=false;
localStorage.setItem("flagTimes",flagFirstTime);
let buttonSighUp = document.getElementById('signupbtn');
function sighUp() {
    user.name = document.getElementById("name1").value;
    user.mail = document.getElementById("email1").value;
    user.password = document.getElementById("password1").value;
    if (user.name !== "" && user.mail !== "" && user.password !== "" && (JSON.parse(window.localStorage.getItem(user.name))) === null) {
       flagFirstTime=true;
        localStorage.setItem(user.name, JSON.stringify(user));
        document.getElementById('sigh-up').style.display = "none";
        document.getElementById('page').style.opacity = "1";
        document.getElementById('hello').textContent += " שלום " + user.name;
        window.localStorage.setItem("currentUserName", user.name);
        localStorage.setItem("flagTimes",flagFirstTime);

    }
    else if(user.name === ""&&user.password === "" &&user.mail === "")
    {
        
    }
    else{
        document.getElementById("exist").style.display = "block";
        user.name = document.getElementById("name1").value;
    }
}
buttonSighUp.addEventListener("click", sighUp);


let buttonLogIn = document.getElementById('loginbtn');
let logIn = () => {
    user.name = document.getElementById("name2").value;
    user.password = document.getElementById("password2").value;
    let compare = JSON.parse(window.localStorage.getItem(user.name));
    console.log(compare);
    if (compare === null) {
        document.getElementById("wrongAccount").style.display = "block";
    }
    else if ((user.name === compare.name) && (user.password === compare.password) && (user.name !== "") && (user.password !== "")) {
        console.log("work");
        document.getElementById('log-in').style.display = "none";
        document.getElementById('page').style.opacity = "1";
        document.getElementById('hello').textContent += " שלום " + user.name;
        window.localStorage.setItem("currentUserName", user.name);


    }

}
buttonLogIn.addEventListener("click", logIn);