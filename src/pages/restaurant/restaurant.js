import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "../../asset/styles/styles.scss";
import "./restaurant.scss";
import {laCarte} from "./menu/restaurant/la-carte";
import {menuDegustation} from "./menu/restaurant/menu-degustation";
import {menuEvasion} from "./menu/restaurant/menu-evasion";
import {laBrochure} from "./menu/cafe/la-brochure";
import {menuEquitable} from "./menu/cafe/menu-equitable";
import {leMenu} from "./menu/brasserie/le-menu";
import {menuParis} from "./menu/brasserie/menu-paris";

// SWIPER
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// MENU CARTE
const menuRestauration = document.getElementById('menu-restaurant');
const menuCafe = document.getElementById('menu-cafe');
const menuBrasserie = document.getElementById('menu-brasserie');

// Close modal
const closeModal = document.querySelectorAll('.close-modal');
closeModal.forEach((e)=> {
    e.addEventListener('click', (btn)=>{
        let dataID = e.getAttribute('data-id');

        // Close menu restaurant
        if(dataID === 'restaurant') {
            menuRestauration.style.left = '-100vw';
        }
        if(dataID === 'menuCafe') {
            menuCafe.style.left = '-100vw';
        }
        if(dataID === 'menuBrasserie') {
            menuBrasserie.style.left = '-100vw';
        }
    })
})
// Open Modal
const openModal = document.querySelectorAll(".open-modal");
openModal.forEach((e)=> {
    e.addEventListener('click', ()=> {
        let dataID = e.getAttribute('data-id');
        // open menu restaurant
        if(dataID === 'restaurant') {
            menuRestauration.style.left = '0';
        }
        if(dataID === 'menuCafe') {
            menuCafe.style.left = '0';
        }
        if(dataID === 'menuBrasserie') {
            menuBrasserie.style.left = '0';
        }
    })
})

/**
 * PDF
 */

pdfMake.vfs = pdfFonts.pdfMake.vfs;
document.querySelectorAll('.btn-print').forEach((e)=> {
    e.addEventListener('click', () => {
        let dataID = e.getAttribute('data-id');
        // RESTAURANT
        if(dataID === "laCarte") {
            pdfMake.createPdf(laCarte).open();
        }
        if(dataID === "menuEvasion") {
            pdfMake.createPdf(menuEvasion).open();
        }
        if(dataID === "menuDegustation") {
            pdfMake.createPdf(menuDegustation).open();
        }
        // CAFE
        if(dataID === "laBrochure") {
            pdfMake.createPdf(laBrochure).open();
        }
        if(dataID === "menuEquitable") {
            pdfMake.createPdf(menuEquitable).open();
        }
        // BRASSERIE
        if(dataID === "leMenu") {
            pdfMake.createPdf(leMenu).open();
        }
        if(dataID === "menuParis") {
            pdfMake.createPdf(menuParis).open();
        }
    })
})
