import "../../asset/styles/styles.scss";
import "./presse.scss";

const printArticle = document.querySelector(".print-article");

let arrayDataArticle = [
    {
        title: `Fashion Week Paris`,
        press: `le figaro`,
        date: `02/03/2021`,
        links: `https://madame.lefigaro.fr/tag/fashion-week-paris`,
        article: `
L'hôtel Chambord accueil avec style quelques grands noms, comme certains couturiers libanais ou Jean Paul Gaultier, jeune retraité qui a promis de revenir avec des collaborations.
On s’intéresse également à Charles de Vilmorin, qui, à 24 ans, vient de lancer sa marque. Retrouvez aussi le couturier camerounais Imane Ayissi, invité pour la 3ème fois à participer à la semaine de la Haute Couture par la Fédération française de la Couture et de la Mode.`,
        img: `./asset/images/presse/la_semaine_de_la_mode_2019.jpg`,
        alt: `festival de la mode hôtel chambord`
    },
    {
        title: `Renovation de l'hôtel`,
        press: `createursdinterieur.com`,
        date: `15/06/2020`,
        links: `https://www.createursdinterieur.com/realisations/architecture-commerciale/amenagement-lobby-batiment-bureaux/`,
        article: `
        Nous sommes heureux de pouvoir vous accueillir dans notre nouvel hôtel Chambord, vous trouverez une nouvelle architecture moderne tout en conservant l'histoire du bâtiment. Nous avons voulu faire ressortir tous les caractères de l'hôtel afin de le rendre unique.
        `,
        img: `./asset/images/presse/Article_1.JPG`,
        alt: `Renovation de l'hôtel chambord`
    },
    {
        title: `Nouvelle piscine Chambord`,
        press: `vogue.fr`,
        date: `28/08/2020`,
        links: `https://www.vogue.fr/lifestyle/article/les-plus-belles-piscines-suspendues-a-travers-le-monde`,
        article: `
        Nous avons créé une piscine pour chaque étage de notre hôtel, si vous aimez les endroits calmes c'est ici que vous allez aimer vous reposer
        `,
        img: `./asset/images/presse/piscine_hotel.jpg`,
        alt: `nouvelle piscine Chambord`
    }
];

for (const elt of arrayDataArticle) {
    let eltDiv = document.createElement('div');
    eltDiv.innerHTML = `
    <div class="d-flex flex-wrap align-items-center border rounded article p-2 my-5">
        <div class="col-12 col-lg-4 p-2">
            <div class="d-flex justify-content-center">
                <img src="${elt.img}" alt="${elt.alt}" class="w-100 img-fluid img-press rounded"> 
            </div>
        </div>
        <div class="col-12 col-lg-8 article-press p-2">
            <h1>${elt.title}</h1>
            <div>${elt.date}</div>
            <p>lien : <a href="${elt.links}" target="_blank"><strong>${elt.press}</strong></a></p>
            <p>${elt.article}</p>
        </div>
        
    </div>
    `
    printArticle.append(eltDiv);
}