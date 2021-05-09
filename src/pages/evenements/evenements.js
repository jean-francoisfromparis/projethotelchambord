import "../../asset/styles/styles.scss";
import "./evenements.scss";

// Selection de la modale video
const modalTrailer = document.querySelector("#modal-video");
modalTrailer.classList.add("hidden");

// Selection des image avec video
const imgVideo =document.querySelectorAll('.video-youtube');

imgVideo.forEach((e)=> {
    e.addEventListener('click',(elt)=> {
        // affichage de la modal youtube
        modalTrailer.classList.remove("hidden");

        let urlID;
        if(elt.currentTarget.getAttribute("data-id") === "seminaire") {
            urlID = "Med_qI-adB8"
        }
        if(elt.currentTarget.getAttribute("data-id") === "mariage") {
            urlID =  "93kEaCEgZRM";
        }

        // ajout de l'id video dans l'api youtube
        const video = document.querySelector("iframe");
        video.setAttribute(
            "src",
            "https://www.youtube.com/embed/" + urlID + "?enablejsapi=1&version=3&playerapiid=ytplayer"
        );
    })
})

modalTrailer.addEventListener('click', ()=> {
    // arreter la video au clic à la fermeture de la modal -> API youtube
    document.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    // on cache la modal
    modalTrailer.classList.add('hidden');

})