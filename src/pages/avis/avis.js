import "../../asset/styles/styles.scss";
import "./avis.scss";

var loginForm = document.forms.formulaire;
var alert = document.querySelector("#info h2");

document.querySelector("#valid").addEventListener("click", ()=> {
    if (loginForm.elements.nom.value === "" ||
        loginForm.elements.email.value === "" ||
        loginForm.elements.prenom.value === "" ||
        loginForm.elements.categorie.value === "" ||
        loginForm.elements.message.value === "") {

        alert.textContent = "les champs sont requis"
        alert.style.color = "#c0392b";

    } else {
        const REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        const regexInput = new RegExp('^\\w+$');
        // console.log(loginForm.elements.email.value);
        if (
            loginForm.elements.email.value.match(REGEX) &&
            loginForm.elements.nom.value.match(regexInput) &&
            loginForm.elements.prenom.value.match(regexInput) &&
            loginForm.elements.categorie.value.match(regexInput)
        ) {
            alert.textContent = "message envoyé, nous attendons la response du serveur";
            alert.style.color = "#27ae60";

            var valform = document.querySelector('form').elements;
            var obj = {};
            for (let i = 0; i < valform.length; i++) {
                var item = valform.item(i);
                obj[item.name] = item.value;
            }
            setTimeout(() => {
                loginForm.submit();
            }, 1500)
        } else {
            alert.textContent = "le champs ne sont pas correctement remplis";
            alert.style.color = "#c0392b";
        }
    }
});


