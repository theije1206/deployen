document.addEventListener('DOMContentLoaded', () => {

    // Functie om navigatie te koppelen
    function voegLinkToe(id, link) {
        const knop = document.getElementById(id);
        if (knop) { // check of de knop bestaat op deze pagina
            knop.addEventListener('click', () => {
                window.location.href = link;
            });
        }
    }

    // Links naar andere pagina's
    voegLinkToe('bestellingenBtn', 'catering.html');
    voegLinkToe('broodjesBtn', 'cat_broodjes.html');

    // Voor dagen (als je aparte knoppen wilt)
    voegLinkToe('maandag', 'cat_overzicht.html');
    voegLinkToe('dinsdag', 'cat_overzicht.html');
    voegLinkToe('woensdag', 'cat_overzicht.html');

    // Als je later meer knoppen toevoegt, hoef je alleen een regel toe te voegen:
    // voegLinkToe('idVanDeKnop', 'link.html');
});
