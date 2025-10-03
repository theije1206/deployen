document.addEventListener('DOMContentLoaded', () => {

    // Function to add navigation links
    function addThisLink(id, link) {
        const knop = document.getElementById(id);
        if (knop) { // check if the button exists on this page
            knop.addEventListener('click', () => {
                window.location.href = link;
            });
        }
    }

    // Basic buttons
    addThisLink('ordersBtn', 'catering.html');
    addThisLink('bakeryBtn', 'cat_bakery.html');

    // days buttons
    addThisLink('monday', 'cat_orders.html');
    addThisLink('tuesday', 'cat_orders.html');
    addThisLink('wednesday', 'cat_orders.html');

// ID and link
});
