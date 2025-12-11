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
    const kanoSelect = document.getElementById('kano-type');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.naam} - €${product.prijs} - ${product.capaciteit} personen`;
        kanoSelect.appendChild(option);
    });
}

loadKanoOptions();

async function submitRentingList(event) {
    event.preventDefault();

    const rentalData = {
        productId: parseInt(document.getElementById('kano-type').value),
        kanoCount: parseInt(document.getElementById('kano-count').value),
        rentalDate: document.getElementById('start').value,
        rentalTime: document.getElementById('rental-time').value,
        rentalDuration: document.getElementById('duration-select').value,
        name: document.getElementById('name-info').value,
        contact: document.getElementById('contact-info').value,
        email: document.getElementById('email-info').value
    };

    try {
        const response = await fetch('/api/product-reservations', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rentalData)
        });

        if (response.ok) {
            const json = await response.json();
            const reservationId = json.id; 
            window.location.href = `/booking-confirmation?id=${reservationId}`;
        } else {
            alert('Fout bij het indienen van de kano verhuur.');
        }
    } catch (error) {
        console.error(error);
        alert('Fout bij het indienen van de kano verhuur.');
    }
}

document.getElementById('renting-list').addEventListener('submit', submitRentingList);
