import "../../asset/styles/styles.scss";
import "./recrutement.scss";

const inputValueLength = 255;
const inputAll = document.querySelectorAll('.form-control');

/**
 * @description Check all input and textarea
 *  - set ou remove class="is-invalid"
 *  - setAttribute data-valid
 */
inputAll.forEach((e)=> {
    e.addEventListener('keyup', (elt)=> {
        const regex = new RegExp('^\\w+$');
        if(elt.currentTarget.value.length > inputValueLength || !elt.currentTarget.value.match(regex)) {
            elt.currentTarget.classList.add("is-invalid");
            elt.currentTarget.setAttribute('data-valid', 'false')
        }
        if(elt.currentTarget.value.length < inputValueLength && elt.currentTarget.value.match(regex)) {
            elt.currentTarget.classList.remove("is-invalid");
            elt.currentTarget.setAttribute('data-valid', 'true')
        }
    });
})


/**
 * @description Validation Submit
 */

const employmentForm = document.forms['employmentForm'];

document.querySelector('#valid-form').addEventListener('click', ()=> {
    if(
        employmentForm['nom'].getAttribute('data-valid') === 'true' &&
        employmentForm['prenom'].getAttribute('data-valid') === 'true' &&
        employmentForm['message'].getAttribute('data-valid') === 'true' &&
        employmentForm['lm'].value !== '' &&
        employmentForm['cv'].value !== ''
    ) {
        employmentForm.submit()
    } else {
        document.querySelector('.info').textContent = "Vous devez remplir tout les champs du formulaire.";
    }
})

