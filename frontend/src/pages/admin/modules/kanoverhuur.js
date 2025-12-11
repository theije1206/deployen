async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

async function loadKanoOptions() {
    const products = await fetchProducts();

    const kanoSelect = document.querySelector('[select="rental-option"]');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.naam} - €${product.prijs} - ${product.capaciteit} personen`;
        kanoSelect.appendChild(option);
    });
}

loadKanoOptions();

async function submitRentalForm(event) {
    event.preventDefault();

    const kanoType = document.getElementById('kano-type').value;
    const kanoCount = document.getElementById('kano-count').value;
    const rentalDate = document.getElementById('start').value;
    const rentalTime = document.getElementById('rental-time').value;
    const rentalDuration = document.getElementById('duration-select').value;
    const nameInfo = document.getElementById('name-info').value;
    const contactInfo = document.getElementById('contact-info').value;
    const emailInfo = document.getElementById('email-info').value;

    const rentalData = {
        kanoType,
        kanoCount,
        rentalDate,
        rentalTime,
        rentalDuration,
        nameInfo,
        contactInfo,
        emailInfo
    };

    try {
        const response = await fetch('/api/kano-rentals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify    (rentalData)
        });

        if (response.ok) {
            alert('Kano verhuur succesvol ingediend!');
        } else {
            alert('Fout bij het indienen van de kano verhuur.');
        }
    } catch (error) {
        alert('Fout bij het indienen van de kano verhuur.');
    }
}

const rentalForm = document.getElementById('renting-list');
rentalForm.addEventListener('submit', submitRentalForm);
