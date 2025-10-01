document.addEventListener('DOMContentLoaded', () => {

    // Functie om navigatie te koppelen
    function voegLinkToe(id, link) {
        const knop = document.getElementById(id);
        if (knop) { // checkt of de knop bestaat op deze pagina
            knop.addEventListener('click', () => {
                window.location.href = link;
            });
        }
    }

    // Basis knoppen
    voegLinkToe('bestellingenBtn', 'catering.html');
    voegLinkToe('broodjesBtn', 'cat_broodjes.html');

    // dagen apart)
    voegLinkToe('maandag', 'cat_overzicht.html');
    voegLinkToe('dinsdag', 'cat_overzicht.html');
    voegLinkToe('woensdag', 'cat_overzicht.html');

// ID en link
});
