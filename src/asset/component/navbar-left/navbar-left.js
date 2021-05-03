const navbarLeft = document.getElementById("navbar-left");
// init
navbarLeft.style.left = "-250px";
navbarLeft.appendChild(document.createElement("div")).innerHTML = `
       <div class="search">   
            <input type="text" placeholder="SEARCH">
       </div>
       <div class="navLink"></div>
    `;

const menuArray = [
    "accueil",
    "chambres",
    "restaurant",
    "spa-soins"
]
const navLink= document.querySelector(".navLink");
for (let item of menuArray) {
    if(item === "accueil") {
        navLink.appendChild( document.createElement("div")).innerHTML = `
        <a href="index.html" alt="chambord palace hôtel de lux ${item}"><h1>${item}</h1></a>
    `;
    } else {
        navLink.appendChild( document.createElement("div")).innerHTML = `
        <a href="${item}.html" alt="chambord palace hôtel de lux ${item}"><h1>${item}</h1></a>
    `;
    }


}
