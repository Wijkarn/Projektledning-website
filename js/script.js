const logInBtn = document.querySelector("#formBtn");
const select = document.querySelector("#select");
const logInPageBtn = document.querySelector("#logInPageBtn");
const formDiv = document.querySelector("#form");
const profileBtn = document.querySelector(".profile");

logInBtn.addEventListener("click", logIn);
logInPageBtn.addEventListener("click", logInPagePopup);
profileBtn.addEventListener("click", showProfilePage);

let studentLoggedIn = false;
let businessLoggedIn = false;

let consultant = ["Telavox", "Aeb software", "Advania", "knowIT", "wise IT", "Front IT öresund", "Great IT", "Living IT", "Consid", "Intendit", "Xlent", "Advicon", "Atea", "CGI", "Manpower", "Semcon", "Dreamwork", "Student consulting", "Academic Work", "Poolia", "ANTS", "HF IT LÖSNINGAR", "Litebreeze", "It Support Ystad", "Future IT", "SolidX AB"];
let consultantList = consultant.sort();

function logIn(event) {
    event.preventDefault();

    if (!studentLoggedIn && !businessLoggedIn) {
        if (select.value == "student") {
            studentLoggedIn = true;
            profileBtn.innerText = "Student";
        }
        else {
            businessLoggedIn = true;
            profileBtn.innerText = "Företag";
        }
        profileBtn.style.display = "block";
        logInPageBtn.innerText = "logga ut";
    }
    else {
        studentLoggedIn = false;
        businessLoggedIn = false;
    }

    console.log("student: ", studentLoggedIn, " Företag: ", businessLoggedIn);
    formDiv.style.display = null;
}

function logInPagePopup() {

    if (!studentLoggedIn && !businessLoggedIn) {
        formDiv.style.display = "flex";
    }
    else {
        profileBtn.style.display = null;
        formDiv.style.display = null;
        logInPageBtn.innerText = "logga in";
        studentLoggedIn = false;
        businessLoggedIn = false;
        studentAdd.style.display = null;
        articleContainer.style.display = "flex";
        alert("You have been logged out!");
    }
}

function showProfilePage() {

    studentAdd = document.querySelector("#studentAdd");
    articleContainer = document.querySelector("#articleContainer");
    addArticle = document.querySelector("#addArticle");

    if(studentLoggedIn){
        studentAdd.style.display = "flex";
        articleContainer.style.display = "none";
    }
    else{
        addArticle.style.display = "flex";
        articleContainer.style.display = "none";
    }

}
