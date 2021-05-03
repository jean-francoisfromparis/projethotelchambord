import "bootstrap";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import "../../asset/styles/styles.scss";
import "./reservation.scss";
import {CalendarPicker} from "../../asset/component/calendar/CalendarPicker";
import "../../asset/component/calendar/CalendarPicker.style.scss"
import moment from "moment";


/** ##############################################
 * DATA Picker
 * -----------
 * @description implement configuration and behavior
 */

// Variable
let pikerDeparture;
let pikerArrival;
let eltCurrentVal;
let eltCurrentPrice;
let total;
// init Date
const nextYear = new Date().getFullYear() + 1;
// ElementHTML
const inputChamber = document.getElementById('input-chamber');
const infoLengthStay = document.querySelector('#length-stay span');
const arrivalDate = document.getElementById('arrival-date');
const departureDate = document.getElementById("departure-date");
const infoArrival = document.getElementById("info-arrival");
const infoDeparture = document.getElementById("info-departure");
const inputLengthStay = document.getElementById("input-length-stay");
const infoTotal = document.querySelector('.info-total');
// Array chamber
let arrayOfChamber = [
    {name: "chambre classique", price: 500},
    {name: "chambre confort", price: 750},
    {name: "chambre deluxe", price: 1000},
    {name: "suite", price: 1500},
];

/**
 * @description initialize date of arrival
 * @type {CalendarPicker}
 */
pikerArrival = new CalendarPicker('#piker-arrival', {
    // If max < min or min > max then the only available day will be today.
    min: new Date(),
    max: new Date(nextYear, 10) // NOTE: new Date(nextYear, 10) is "Sun Nov 01 <nextYear>"
}, new Date());


/**
 * @description initialize date of departure
 * @type {CalendarPicker}
 */
pikerDeparture = new CalendarPicker('#piker-departure', {
    // If max < min or min > max then the only available day will be today.
    min: new Date(),
    max: new Date(nextYear, 10) // NOTE: new Date(nextYear, 10) is "Sun Nov 01 <nextYear>"
}, new Date());


/**
 * @description change value and display
 */
pikerArrival.onValueChange((currentValue) => {
    let arrival = currentValue;
    // display none
    arrivalDate.classList.add("d-none");
    departureDate.classList.remove("d-none");
    // init elementHTML
    document.getElementById("piker-departure").innerHTML = "";
    infoArrival.innerHTML = `
        <div id="edit-date-arrrival" class="d-flex">
             <div class="mx-1"><i class="fas fa-trash-alt"></i></div>
            <div>${moment(currentValue).locale('fr').format(`L`)}</div>
        </div>
    `;

    // set new date for departureDate
    let newDate = moment(currentValue).add(1, "day");


    // Display a new CalendarPicker
    pikerDeparture = new CalendarPicker('#piker-departure', {
        // If max < min or min > max then the only available day will be today.
        min: newDate.toDate(),
        max: new Date(nextYear, 10) // NOTE: new Date(nextYear, 10) is "Sun Nov 01 <nextYear>"
    }, newDate.toDate());
    pikerDeparture.onValueChange((currentValue) => {
        infoDeparture.innerHTML = `
        ${moment(currentValue).locale('fr').format(`L`)}
    `
        let lengthStay = moment(currentValue).diff(arrival, 'day');
        //Display length of stay
        let s = "";
        if (lengthStay > 1) {
            s = "s";
        }
        infoLengthStay.innerHTML = ` ${lengthStay} nuit${s}`;
        inputLengthStay.value = lengthStay;
        // Calcul
        total = parseInt(inputLengthStay.value) * eltCurrentPrice;
        if(!isNaN(total)) {
            infoTotal.textContent = `Total du séjour: ${total} €`;
        }
    });

});

/**
 * reset all Date
 */
document.getElementById('info-arrival').addEventListener("click", () => {
    // toggle d-none
    arrivalDate.classList.remove("d-none");
    departureDate.classList.add("d-none");
    // rest picker
    pikerDeparture = new CalendarPicker('#piker-departure', {
        // If max < min or min > max then the only available day will be today.
        min: new Date(),
        max: new Date(nextYear, 10) // NOTE: new Date(nextYear, 10) is "Sun Nov 01 <nextYear>"
    }, new Date());
    // reset value
    infoArrival.innerHTML = `Aucune date`;
    infoDeparture.innerHTML = `Aucune date`;
    inputLengthStay.value = 0;
});


/** ##############################################
 * Form
 * @description manage form reservation
 */

// input select
let countChamber = 0;

for (let item of arrayOfChamber) {
    let eltOption = document.createElement("option");
    inputChamber.append(eltOption);
    eltOption.value = countChamber.toString();
    eltOption.innerHTML = `${item.name} ${item.price} €`;
    countChamber++;
}

inputChamber.addEventListener("change", (e)=>{
    eltCurrentVal = parseInt(e.currentTarget.value);
    eltCurrentPrice = arrayOfChamber[eltCurrentVal].price;
    // console.log(inputLengthStay.value * eltCurrentPrice)
    if(!isNaN(parseInt(inputLengthStay.value) * eltCurrentPrice)) {
        infoTotal.textContent = `Total du séjour: ${parseInt(inputLengthStay.value) * eltCurrentPrice} €`;
    }
})

/** ##############################################
 * Submit
 * @description manage btn submit
 */
document.querySelector("#valid-form").addEventListener("click", () => {
    if(document.forms[0][0].value !== "" && document.forms[0][1].value !== "" && document.forms[0][0].value !== "") {
        document.forms[0].submit();
        window.location.href =  `/panier.html`;
    }
})