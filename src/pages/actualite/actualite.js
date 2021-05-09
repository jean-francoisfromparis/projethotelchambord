import "../../asset/styles/styles.scss";
import "./actualite.scss";


// <img src="https://picsum.photos/200/300?random=1">
// <img src="https://picsum.photos/200/300?random=2">

const arrayActuality = [
    {
        title: `Coronavirus : les clients d’un hôtel confinés dans les Canaries`,
        img: `https://www.lechotouristique.com/wp-content/uploads/2020/02/h10-costa-adeje-palace.png`,
        link: `https://www.lechotouristique.com/article/coronavirus-les-clients-dun-hotel-confines-dans-les-canaries`,
        name: `lechotouristique.com`,
        description: `
        Plusieurs centaines de touristes logés dans l’hôtel H10 Costa Adeje Palace, sur l’île de Tenerife, dans l’archipel espagnol des Canaries, ont été confinés dans leur chambre mardi après l’annonce d’un cas suspect de coronavirus. Ce possible cas concerne un ressortissant italien dont le premier test de dépistage effectué s’est révélé positif, selon le ministère espagnol de la Santé.
        Cet Italien, qui aurait séjourné comme vacancier dans cet hôtel, « a été placé à l’isolement sous contrôle sanitaire », a précisé le gouvernement régional des Canaries. Selon un client britannique de l’hôtel, les clients du H10 Costa Adeje Palace ont reçu un communiqué glissé sous la porte de leur chambre, leur annonçant que l’hôtel était fermé et qu’ils devaient rester dans leur chambre. « Nous regrettons de vous informer que l’hôtel a été scellé pour raisons sanitaires. Vous devez rester dans votre chambre » jusqu’à nouvel ordre des autorités, explique cette note en plusieurs langues dont le français.`
    },
    {
        title: `PREFERRED HOTELS AND RESORTS RENFORCE SON PARTENARIAT AVEC ULTIMA COLLECTION`,
        img: `https://journalduluxe.fr/wp-content/uploads/2015/04/hotel-luxe-beijing.jpg`,
        link: `https://www.journaldespalaces.com/communique-60618-preferred-hotels-resorts-renforce-partenariat-avec-ultima-collection-.html`,
        name: `journaldespalaces.com`,
        description: `Après un premier partenariat en 2019 avec quatre des établissements d'Ultima Collection à Crans Montana, Megève, Courchevel Belvédère et Genève, ce nouveau partenariat s'étend désormais à Ultima Gstaad et Ultima Corfu et compte à présent cinq établissements sur six au sein de la collection Preferred Residences, l’une des cinq collections de Preferred Hotels & Resorts.`
    },
    {
        title: `Louvre Hotels, fer de lance du groupe hôtelier Jin Jiang`,
        img: `https://i.f1g.fr/media/figaro/616x347_cropupscale/2018/03/14/XVM2b44dcfc-27a0-11e8-a155-9eab006934e7.jpg`,
        link: `https://www.lefigaro.fr/societes/2018/03/14/20005-20180314ARTFIG00286-louvre-hotels-fer-de-lance-de-jin-jiang.php`,
        name: `lefigaro.fr`,
        description: `Un robot pour le check-in et capable de prendre l'ascenseur pour un room-service. Au rez-de-chaussée, des espaces de travail modulables et des tables à partager avec cuisine ouverte. Plus haut, un appartement avec kitchenette pour les longs séjours… À Shanghaï, ce tout nouveau «smart Campanile» ouvrira ses portes en mai. Unique dans son genre, il sera la nouvelle vitrine de Campanile, qui envisage une centaine de nouveaux établissements en Chine d'ici deux ans. Une vingtaine a déjà ouvert.`
    },
    {
        title: `Promotion touristique : les destinations françaises passent à l’offensive`,
        img: `https://hospitality-on.com/sites/default/files/styles/image994x499/public/2021-05/pexels-pixabay-34223.jpg?h=2d399fb1&itok=b51e6Jq-`,
        link: `https://hospitality-on.com/fr/tourisme/promotion-touristique-les-destinations-francaises-passent-loffensive`,
        name: `hospitality-on.com`,
        description: `Alors que la saison estivale approche, les actions de promotion touristique sont de plus en plus nombreuses au sein des destinations françaises. Chaque destination adopte une stratégie bien à elle pour mettre en avant ses atouts et spécificités afin d’attirer le plus de touristes possible dans les mois à venir. Cette année encore, les destinations misent sur la clientèle domestique qui avait pris d’assaut certains territoires l’année dernière en raison des restrictions de voyages. Ainsi, les départements et les régions mettent tout en œuvre pour préparer un été qui s’annonce tout aussi particulier que le dernier.`
    },
    {
        title: `Un mois d'octobre dans l'ensemble positif pour le marché hôtelier français (In Extenso)`,
        img: `https://medias.businessimmo.com/default/0002/15/114438/htel_admin.jpg`,
        link: `https://www.businessimmo.com/contents/92643/un-mois-d-octobre-dans-l-ensemble-positif-pour-le-marche-hotelier-francais-in-extenso`,
        name: `businessimmo.com`,
        description: `Les taux d’occupation au sein de l’hôtellerie française sont en progression sur l’ensemble des catégories, allant de 1 % sur la catégorie Luxe à 5 % sur l’hôtellerie Milieu de gamme, selon le dernier baromètre In Extenso Tourisme pour le mois d’octobre 2017. Hormis une légère baisse sur le marché Economique, les prix moyens sont en hausse sur tous les segments.`
    },
    {
        title: `Top 5 des tendances technologiques de l’hôtellerie pour 2021`,
        img: `http://www.hoteldefrance.org/wp-content/uploads/2021/04/rfid-hotel-cloud-678x381.jpg`,
        link: `http://www.hoteldefrance.org/top-5-tendances-technologiques-hotellerie-2021/`,
        name: `hoteldefrance.org`,
        description: `Jamais dans l’histoire le secteur de l’hôtellerie n’a connu une année comparable à celle de 2020. Aucun aspect n’a été laissé de côté. Comme pour les crises précédentes, cela aura sans aucun doute des effets durables sur le fonctionnement de l’industrie et nous pouvons nous attendre à voir de nouvelles opportunités surgir à partir de cela également.`
    },
    {
        title: `Hôtellerie de luxe : un secteur en pleine expansion`,
        img: `https://www.esg-tourisme.com/sites/default/files/image/inline/block/desktop/photo-1474690455603-a369ec1293f9.jpg`,
        link: `https://www.esg-tourisme.com/actus/hotellerie-de-luxe-un-secteur-en-pleine-expansion-esgt?gge_source=google&gge_medium=cpc&gge_term=&gge_campaign=DSA&gclid=CjwKCAjwkN6EBhBNEiwADVfya3i5c4Zg3P4LKq_VShbXgCnQ-j43eoPSmP60soehIHgF6adle0bVZRoCFQsQAvD_BwE`,
        name: `esg-tourisme.com`,
        description: `L’industrie hôtelière française poursuit son développement. Le secteur de l’hôtellerie de luxe a effectivement dépassé son record en 2018. Certes, les opérateurs n’ont pas tous connu un rebondissement dans leurs chiffres d’affaires, mais la forte croissance du marché reste effective.`
    },
    {
        title: `Perte de deux milliards d'euros pour Accor`,
        img: `https://www.challenges.fr/assets/img/2018/02/21/cover-r4x3w1000-6035ffd38101f-le-groupe-fait-mieux-qu-attendu.jpg`,
        link: `https://www.challenges.fr/entreprise/perte-de-deux-milliards-d-euros-pour-accor_752498`,
        name: `challenges.fr`,
        description: `Le géant français de l'hôtellerie Accor a annoncé mercredi une perte nette proche de 2 milliards d'euros l"an dernier (1,98 milliard exactement) et une activité en chute de 60% à 1,61 milliard d'euros. Le sixième groupe hôtelier mondial, qui possède des enseignes comme Ibis, Sofitel, Novotel, Mercure ou Pullman, avait déjà vu son volume d'affaires plonger, de juillet à septembre, de 68,7% à 329 millions d'euros. Au premier semestre, le groupe avait  enregistré une perte de 1,52 milliard d'euros.`
    },
    {
        title: `Dossier de Presse du groupe Barrière`,
        img: `https://www.groupebarriere.com/content/dam/corporate/notre-actualite/dossiers-de-presse/images/le-normandy-1247x681.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg`,
        link: `https://www.groupebarriere.com/fr/notre-actualite/dossiers-de-presse/nouvelles-et-informations.html`,
        name: `groupebarriere.com`,
        description: `Barrière est une Marque sous laquelle sont commercialisés les hôtels, casinos et restaurants de deux groupes distincts : Groupe Lucien Barrière (GLB) et Société Fermière du Casino Municipal de Cannes (SFCMC). Fondé en 1912 par François André et développé successivement par Lucien Barrière, Diane Barrière-Desseigne et Dominique Desseigne, Barrière a développé des offres sans équivalent dans le domaine des loisirs haut de gamme, fondées sur le souci de l’excellence opérationnelle, de la qualité de service, et de l’art de vivre à la française.`
    },
    {
        title: `Disneyland Paris amorce la rénovation de son pôle hôtelier`,
        img: `https://www.lhotellerie-restauration.fr/journal/hotellerie/2021-05/img/n019751_02.jpg`,
        link: `https://www.lhotellerie-restauration.fr/journal/hotellerie/2021-05/disneyland-paris-amorce-la-renovation-de-son-pole-hotelier.htm`,
        name: `lhotellerie-restauration.fr`,
        description: `Disneyland Paris annonce la transformation du Disneyland Hotel, prochaine étape d'un plan pluriannuel de réhabilitation de tous les hôtels de Disneyland Paris, soit plus de 5 700 chambres. Pour sa rénovation totale, le Disneyland Hotel (5 étoiles) adoptera un thème royal autour de classiques de Disney comme La Belle et la Bête, Cendrillon et La Belle au Bois Dormant, mais aussi de succès plus récents comme La Reine des Neiges et Raiponce. Les espaces publics, et les chambres et suites seront repensés pour rendre hommage à ces films et à leurs personnages, et offrir une expérience immersive.`
    },
    {
        title: `Loire Valley Lodges à Esvres-sur-Indre (37) : Un hôtel atypique au cœur d’une forêt privée`,
        img: `https://www.industrie-hoteliere.com/wp-content/uploads/sites/7/2021/05/03_IH734_S1_indep1.jpg`,
        link: `https://www.industrie-hoteliere.com/terrain/loire-valley-lodges-a-esvres-sur-indre-37-un-hotel-atypique-au-coeur-dune-foret-privee/`,
        name: `industrie-hoteliere.com`,
        description: `Lieu de ressourcement qui conjugue dimension artistique et bien-être, Loire Valley Lodges offre une expérience inédite et haut de gamme. Situé en Touraine, le domaine compte 18 cabanes confortables perchées dans les arbres, réparties dans une forêt privée de 300 hectares. Une ouverture en plein Covid qui nécessite de naviguer à vue.`
    },
    {
        title: `LA COUR DES VOSGES : UN HÔTEL CHIC PARISIEN SUR LA CÉLÈBRE PLACE DES VOSGES`,
        img: `https://i1.wp.com/www.experiencesluxe.com/wp-content/uploads/2020/02/Cour-de-Vosges.jpg?resize=1050%2C700&ssl=1`,
        link: `https://www.experiencesluxe.com/fr/world-france-paris-hotels-la-cour-des-vosges-un-hotel-chic-parisien-sur-la-celebre-place-des-vosges/`,
        name: `experiencesluxe.com`,
        description: `Le groupe Evok Hotels lève le voile sur son tout nouvel hôtel haut de gamme dans l’un des lieux les plus chics de la capitale : la place des Vosges ! Après l’ouverture du Brach puis du Sinner, c’est maintenant au tour de cet hôtel 5 étoiles chargé d’histoire de voir le jour !Situé au 19 de la célèbre place, cet hôtel particulier datant du 17ème siècle et classé aux monuments historiques, affiche un panorama exceptionnel. Cette demeure intime abrite 12 chambres et suites seulement pour une intimité maximum et l’impression d’être dans son propre pied à terre parisien.`
    },
    {
        title: `Marseille : « Maison Pépite » récupère les textiles des hôtels de luxe pour en faire des accessoires bord de mer`,
        img: `https://img.20mn.fr/egLsBcHPQBijENTZPfpXTg/640x410_maison-pepite-recycle-tissus-grands-hotels.jpg`,
        link: `https://www.20minutes.fr/societe/3006999-20210327-marseille-maison-pepite-recupere-textiles-hotels-luxe-faire-accessoires-bord-mer`,
        name: `20minutes.fr`,
        description: `Elle voulait monter un projet de mode responsable basé sur « l’upcycling ». Pour cela, Mathilde Godart a fait deux choses : d’abord quitter Paris pour Marseille, puis toquer à la porte des hôtels de luxe du sud de la France. « Je ne savais pas du tout s’ils étaient dans une démarche verte et responsable, je leur ai proposé de récupérer leurs textiles dormants ou destinés à être jetés », rembobine la jeune fondatrice de  Maison Pépite.`
    },
    {
        title: `L’hôtellerie de luxe : métier de passion et d’engagement`,
        img: `https://www.studyrama.com/pro/sites/default/files/styles/content/public/articles/hotellerie.jpg?itok=VapJJ5Cy`,
        link: `https://www.studyrama.com/pro/efficacite-professionnelle/l-hotellerie-de-luxe-metier-de-passion-et-d-engagement-20711.html`,
        name: `studyrama.com`,
        description: `Destination favorite de nombreux candidats à la reconversion l’hôtellerie et particulièrement l’hôtellerie de luxe fait rêver. Secteur de tradition, secteur d’excellence, il est vrai que le domaine est prometteur. Co-auteur des « Coulisses de l’hôtellerie de luxe » paru aux Editions studyrama en octobre 2015, Jean-Paul Guedj est un habitué de cet univers.`
    },
    {
        title: `Terrasses d’hiver pour l’hôtellerie`,
        img: `https://www.tubbo.com/files/2019/11/Beau-Rivage-6-tubbo-outdoor-bubble-dome-winter-terrace-hospitality-business-restaurant-hotel-bar-1024x683.jpg`,
        link: `https://www.tubbo.com/fr/?gclid=CjwKCAjwkN6EBhBNEiwADVfya4jyloal8frRBCt4rwi7oRKXS3BC94Ae8ephcsHn3DapFJCA6OKWnhoCTkcQAvD_BwE`,
        name: `tubbo.com`,
        description: `Augmentez vos réservations, attirez une nouvelle clientèle.Tubbo est une structure extérieure modulaire destinée à abriter et à protéger vos invités et visiteurs des intempéries. Elle offre un design transparent futuriste permettant une vue panoramique sur le paysage environnant.Découvrez le nouvel amélioration extérieure Food & Beverage pour les hôtels, les restaurants, les rooftops et les bars. Parlez-en avec nous ! Galerie`
    },
]

const fluxActuality = document.getElementById('flux-actuality');

for(let elt of arrayActuality) {
    let eltDiv = document.createElement('div');
    eltDiv.innerHTML = `
    <div class="row mt-5 block-actuality rounded">
        <div class="col-12 col-lg-4 p-2">
            <div class="d-flex justify-content-center">
                <img src="${elt.img}" alt="${elt.alt}" class="w-100 img-fluid img-press rounded"> 
            </div>
        </div>
        <div class="col-12 col-lg-8 article-press p-2">
            <h1>${elt.title}</h1>
            <p>lien : <a href="${elt.link}" target="_blank"><strong>${elt.name}</strong></a></p>
            <p>${elt.description}</p>
        </div>
    </div>
    `
    fluxActuality.append((eltDiv));
}