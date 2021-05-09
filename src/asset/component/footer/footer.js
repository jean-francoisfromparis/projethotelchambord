const footer = document.querySelector("footer");
footer.innerHTML = `
<div class="container d-flex justify-content-center flex-wrap">
    <div class="d-flex block-footer flex-wrap w-100">
        <div class="col-12 col-md-4">
            <h3 class="text-decoration-underline text-center">l'hôtel</h3>
            <div class=" d-flex align-items-center flex-column">
                <ul>
                    <li><a href="/qui-sommes-nous.html">Qui sommes-nous ?</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li><a href="/actualite.html">Actualités TODO A FAIRE</a></li>
                    <li><a href="/evenements.html">Evénements TODO A FAIRE</a></li>
                    <li><a href="/presse.html">Presse</a></li>
                    <li>
                        <a href="/avis.html" class="d-flex w-100">
                            <h5 class="mx-1">Avis</h5> 
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <h3 class="text-decoration-underline text-center">Liens divers</h3>
            <div class=" d-flex align-items-center flex-column">
                 <ul>
                    <li><a href="/acces.html">Accès</a></li>
                    <li><a href="/mentions-legales.html">Mentions Légales</a></li>
                    <li><a href="/cgv.html">Conditions Générales de Vente</a></li>
                    <li><a href="/plan-du-site.html">Plan du site TODO a FAIRE</a></li>
                    <li><a href="/recrutement.html">Recrutement</a></li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <h3 class="text-decoration-underline text-center">En savoir plus ?</h3>
            <div class=" d-flex align-items-center flex-column">
                <ul class="list-group">
                    <li class="list-group-item text-white">
                        <p class="info-news-letter">News letters</p>
                        <form name="form-news-letter" action="">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" name="email-news-letter" placeholder="mon-adress@email.fr" aria-label="mon-adress@email.fr" aria-describedby="button-addon2">
                                <button class="btn btn-outline-secondary news-letters" type="button" id="button-addon2">envoyé</button>
                            </div>
                        </form>
                    </li>
                    <li class="list-group-item">
                        <button class="btn-rsx"><i class="fab fa-2x fa-twitter-square"></i></a>
                        <button class="btn-rsx"><i class="fab fa-2x fa-facebook-square"></i></a>
                        <button class="btn-rsx"><i class="fab fa-2x fa-google-plus-square"></i></a>
                        <button class="btn-rsx"><i class="fab fa-2x fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="d-flex flex-column align-items-center">
        <h1>HOTEL CAHMBORD</h1>
        <p>1 avenue Montaigne, 75008 Paris</p>
    </div>
</div>
`;

// new Letter
const infoNewsLetter = document.querySelector('.info-news-letter');
const btnNewsLetters = document.querySelector('.news-letters');
const formNewsLetter = document.forms["form-news-letter"];
btnNewsLetters.addEventListener('click', () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

    if (formNewsLetter["email-news-letter"].value.match(regex)) {
        infoNewsLetter.style.color = "green";
        infoNewsLetter.textContent = 'Nous avons bien reçu votre email';
    } else if (formNewsLetter["email-news-letter"].value === "") {
        infoNewsLetter.style.color = "#e67e22";
        infoNewsLetter.textContent = 'Vous devez entrez un email';
    } else {
        infoNewsLetter.style.color = "red";
        infoNewsLetter.textContent = 'Votre email n\'est pas valid';
    }


});