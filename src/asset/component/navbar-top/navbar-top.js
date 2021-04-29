/**
 * variable
 */
//HTML
const navbarTop = document.getElementById("navbar-top");
// Condition

/**
 * HTML
 */
let  languageLocalStorage = localStorage.getItem('language')
if(!languageLocalStorage) {
    localStorage.setItem('language', 'Fr');
    languageLocalStorage = localStorage.getItem('language');
} else {
    languageLocalStorage = localStorage.getItem('language');
}

navbarTop.innerHTML = `
<div class="d-flex justify-content-between align-items-center h-100 mx-2">
    <div class="menu-btn">
        <div class="sandwich d-flex justify-content-center align-items-center">
            <div class="open d-flex justify-content-center align-items-center">
                <i class="fas fa-bars fa-lg m-1 open-close"></i>
                <h5 class="mt-2">open</h5>
            </div>
            <div class="close d-none d-flex justify-content-center align-items-center">
                <i class="fas fa-times-circle fa-lg m-1 open-close"></i>
                <h5 class="mt-2">close</h5>
            </div>
        </div>
    </div>
    <a href="/index.html">
        <div class="logo">
        <img class="img-logo" src="./asset/images/logo.png" alt="palace de luxe hôtel chambord">
        <h1 class="py-0 m-0 text-center title">CHAMBORD</h1>
        <h6 class="py-0 m-0 text-center sub-title" >hotel d'exellence à paris</h6>
    </div>
    </a>
    <div class="d-flex menu-option">
        <div class="d-flex align-items-center"><a href="#"><i class="fas fa-gem fa-sm mx-1"></i><span class="text-price">0</span><span class="fw-bold fs-6 mx-1 text-price">€</span></div></a>
        <span class="separator"><div>|</div></span>
        <div class="d-flex justify-content-center block-language"></a><i class="fas fa-globe m-1"></i><span class="language">${languageLocalStorage}</span></div>
    </div>
    <div id="modal-search"></div>
    <div id="modal-sandwich"></div>
</div>`

/**
 * Events
 */
// Sandwich menu-left
document.querySelector(".sandwich").addEventListener("click", ()=> {
    let navLet = document.getElementById("navbar-left");
    const open = document.querySelector(".open");
    const close = document.querySelector(".close");
    if (navLet.style.left === "-250px") {
        navLet.style.left = "0px";
        open.classList.add("d-none");
        close.classList.remove("d-none");
    } else {
        navLet.style.left = "-250px";
        open.classList.remove("d-none");
        close.classList.add("d-none");
    }
})
// language
document.querySelector(".block-language").addEventListener('click', ()=> {
    const language = document.querySelector(".language");
    if(language.textContent === "Fr") {
        language.textContent = "En";
        localStorage.setItem('language', 'En');
    } else {
        language.textContent = "Fr";
        localStorage.setItem('language', 'Fr');
    }
})
