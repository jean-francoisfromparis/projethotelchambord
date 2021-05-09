import "../../asset/styles/styles.scss";
import "./panier.scss";




let arrayBasket = [
    {chambre: "classic", nbrNuit: 4 ,prix: 500},
    {chambre: "suite", nbrNuit: 15 ,prix: 1500},
    {chambre: "deluxe", nbrNuit: 7 ,prix: 1000},
    {chambre: "confort", nbrNuit: 12 ,prix: 750},
]

const displayBasket = document.querySelector('.display-basket');

for (const elt of arrayBasket) {
    let eltDiv = document.createElement('div');
    eltDiv.innerHTML = `
    <div class="row tab-panier px-2">
        <div class="col-5">${elt.chambre}</div>
        <div class="col-2 text-end">${elt.nbrNuit}</div>
        <div class="col-2 text-end">${elt.prix}</div>
        <div class="col-3 total-col text-end">${elt.nbrNuit * elt.prix} €</div>
    </div>
    `;
    displayBasket.append(eltDiv);
}


const totalCol = document.querySelectorAll('.total-col');

let totalDay = 0;
totalCol.forEach((e)=> {
    totalDay += parseInt(e.textContent);
})

document.querySelector('.total').textContent = totalDay;
