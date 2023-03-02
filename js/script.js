const logInBtn = document.querySelector("#formBtn");
const select = document.querySelector("#select");
const logInPageBtn = document.querySelector("#logInPageBtn");
const formDiv = document.querySelector("#form");
const profileBtn = document.querySelector(".profile");
const publishBtn = document.querySelector("#publishButton");
const articleContainer = document.querySelector("#articleContainer");
const addArticle = document.querySelector("#addArticle");

logInBtn.addEventListener("click", logIn);
logInPageBtn.addEventListener("click", logInPagePopup);
profileBtn.addEventListener("click", showProfilePage);
publishBtn.addEventListener("click", publishArticle);

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

    if (studentLoggedIn) {
        studentUpload();
    }
    else {
        busAddArticle();
    }

}

function studentUpload() {

    const studentAdd = document.querySelector("#studentAdd");

    studentAdd.style.display = "flex";
    articleContainer.style.display = "none";

}

function busAddArticle() {

    addArticle.style.display = "block";
    articleContainer.style.display = "none";

}

function publishArticle(event) {
    event.preventDefault();

    const busName = document.querySelector("#articleHeaderInput").value;
    const input = document.querySelector("#articleMainInput").value;
    const publish = document.querySelector("#publishArticle").value;

    if (publish == "direct" && busName.length != 0 && input.length != 0) {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const main = document.createElement("p");
        const time = document.createElement("p");

        articleContainer.append(article);
        article.append(h2);
        article.append(main);
        article.append(time);

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;

        let d = new Date();
        d.getHours();
        d.getMinutes();

        const output = "yeet";
        output.concat(" ", d.getMinutes());

        h2.innerText = busName;
        main.innerText = input;
        time.innerText = "Publisherad kl. ".concat(d.getHours(), ":", d.getMinutes(), " ", today);

        addArticle.style.display = "none";
        articleContainer.style.display = "flex";
    }
}

