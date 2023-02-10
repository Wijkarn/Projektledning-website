const logInBtn = document.querySelector("#formBtn");
const select = document.querySelector("#select");
const logInPageBtn = document.querySelector("#logInPageBtn");
const formDiv = document.querySelector("#form");
const username = document.querySelectorAll(".username");

logInBtn.addEventListener("click", logIn);
select.addEventListener("click", selectFunc);
logInPageBtn.addEventListener("click", logInPagePopup);

let loggedIn = false;

let consultant = ["Telavox", "Aeb software", "Advania", "knowIT", "wise IT", "Front IT öresund", "Great IT", "Living IT", "Consid", "Intendit", "Xlent", "Advicon", "Atea", "CGI", "Manpower", "Semcon", "Dreamwork", "Student consulting", "Academic Work", "Poolia", "ANTS", "HF IT LÖSNINGAR", "Litebreeze", "It Support Ystad", "Future IT", "SolidX AB"];
let consultantList = consultant.sort();

function logIn(event){
    event.preventDefault();
    console.log(select.value);
    const user = document.querySelector("#logInInput").value
    
    if(!loggedIn){
        logInPageBtn.innerText ="logga ut";
        loggedIn = true;
        for(let i = 0; i < username.length; i++){
            username[i].innerText = user;
        }
    }
    else{
        loggedIn = false;
    }
    formDiv.style.display = "none";

    console.log(loggedIn);
}

function selectFunc(){
    console.log(select.value);
    const logInlabel = document.querySelector("#logIn");
    const logInInput = document.querySelector("#logInInput");

    if(select.value == "student"){
        logInlabel.innerText = "Personnummer";
        logInInput.placeholder = "yyyymmdd-xxxx"
    }
    else{
        logInlabel.innerText = "Organisationsnummer";
        logInInput.placeholder = "xxxxxx-xxxx";
    }
}

function logInPagePopup(){
    if(!loggedIn){
        formDiv.style.display = "flex";
    }
    else{
        formDiv.style.display = "none";
        logInPageBtn.innerText ="logga in";
        loggedIn = false;
        for(let i = 0; i < username.length; i++){
            username[i].innerText = "";
        }
    }
}

const a = document.querySelectorAll("a");

for(let i = 0; i < a.length; i++){
    a[i].style.color = "white";
}