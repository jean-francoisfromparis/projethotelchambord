import "../../asset/styles/styles.scss";
import "./spa-soins.scss";


// SWIPER
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// MENU CARTE
const menuDetente = document.getElementById('menu-detente');
const menuSoins = document.getElementById('menu-soins');


// Close modal
const closeModal = document.querySelectorAll('.close-modal');
closeModal.forEach((e)=> {
    e.addEventListener('click', (btn)=>{
        let dataID = e.getAttribute('data-id');

        // Close menu restaurant
        if(dataID === 'menuDetente') {
            menuDetente.style.left = '-100vw';
        }
        if(dataID === 'menuSoins') {
            menuSoins.style.left = '-100vw';
        }

    })
})
// Open Modal
const openModal = document.querySelectorAll(".open-modal");
openModal.forEach((e)=> {
    e.addEventListener('click', ()=> {
        let dataID = e.getAttribute('data-id');

        // open menu restaurant
        if(dataID === 'menuDetente') {
            menuDetente.style.left = '0';
        }
        if(dataID === 'menuSoins') {
            menuSoins.style.left = '0';
        }

    })
})