import "../../asset/styles/styles.scss";
import "./contact.scss";



var loginForm = document.forms.formulaire;
var alert = document.querySelector(".alerte");

document.querySelector("#valid").addEventListener("click", ()=> {
    if(loginForm.elements.nom.value == "" || loginForm.elements.email.value == "" || loginForm.elements.prenom.value == ""  
    || loginForm.elements.societe.value == "" || loginForm.elements.pays.value == "" || loginForm.elements.sujet.value == "" ||
    loginForm.elements.categorie.value == "" || loginForm.elements.message.value == "") {
        alert.textContent = "les champs sont requis"
    } else {
        const REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        // console.log(loginForm.elements.email.value);
        if(loginForm.elements.email.value.match(REGEX)){
        alert.textContent = "message envoyé, nous attendons la response du serveur";
        var valform = document.querySelector('form').elements;
        var obj = {};
        for(let i =0; i<valform.length; i++) {
            var item = valform.item(i);
            obj[item.name] = item.value;
        }
        console.log(obj)
        setTimeout(()=>{
           
            loginForm.submit(); 
        }, 10000)
    }else {
        alert.textContent = "le champs email n'est correctement remplis"
    }
    }
});

//^([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\\.([a-zA-Z]{2,6})$ email
// ^([a-zA-Z0-9._-]+)$ input

