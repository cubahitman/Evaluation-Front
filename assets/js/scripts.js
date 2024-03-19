let myForm = document.querySelector("form");
let inputPrenom = document.getElementById("prenom");
let inputNom = document.getElementById("nom");
let inputSelect = document.getElementById("select");
let inputEmail = document.getElementById("email");



myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let valuePrenom = inputPrenom.value.trim();
    let valueNom = inputNom.value.trim();
    let valueEmail = inputEmail.value.trim();
    let valueselect = inputSelect.value.trim();
    let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let donnees = [valuePrenom, valueNom, valueEmail, valueselect];

    console.log(donnees);
    let lengthPrenom = valuePrenom.length;
    let lengthNom = valueNom.length;
    // let lengthSelect = valueselect.length;

    if (donnees.includes("")) {
        error.innerHTML = "<p> Tout les champs sont requis !</p>";
        error.classList.add("error");
    } else {
        error.innerHTML = "";
        if (lengthPrenom < 2 || lengthPrenom > 15) {
            // le pseudo n'est pas valide

            // error.innerHTML =error.innerText = "<p> le pseudo n'est pas valide</p> " + "<p> le pseudo n'est pas valide</p> ";

            // ou

            // error.innerText = "<p> le pseudo n'est pas valide </p> ";
            errorPrenom.innerHTML = "<p> Le prenom n'est pas valide</p>";
            errorPrenom.classList.add("error");
        }
        if (lengthNom < 2 || lengthNom > 15) {
            // le pseudo n'est pas valide

            // error.innerHTML =error.innerText = "<p> le pseudo n'est pas valide</p> " + "<p> le pseudo n'est pas valide</p> ";

            // ou

            // error.innerText = "<p> le pseudo n'est pas valide </p> ";
            errorNom.innerHTML = "<p> Le nom n'est pas valide</p>";
            errorNom.classList.add("error");
        }
        if (select = "") {
            // le pseudo n'est pas valide

            // error.innerHTML =error.innerText = "<p> le pseudo n'est pas valide</p> " + "<p> le pseudo n'est pas valide</p> ";

            // ou

            // error.innerText = "<p> le pseudo n'est pas valide </p> ";
            errorSelect.innerHTML = "<p> Champ requi</p>";
            errorSelect.classList.add("error");
        }
        if (!regexMail.test(valueEmail)) {
            errorMail.innerHTML = "<p> Le mail n'est pas valide</p>";
            errorMail.classList.add("error");


        }

    }
});