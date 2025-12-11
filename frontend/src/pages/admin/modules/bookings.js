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
        const response = await fetch('/api/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rentalData)
        });

        if (!response.ok) {
            alert('Fout bij het indienen van de kano verhuur.');
            return;
        }

        const json = await response.json();

        const reservationId = json.id || json.reservationId;

        window.location.href = `/booking-confirmation.html?id=${reservationId}`;

    } catch (error) {
        console.error(error);
        alert('Fout bij het indienen van de kano verhuur.');
    }
}

const rentalForm = document.getElementById('renting-list');
rentalForm.addEventListener('submit', submitRentalForm);
