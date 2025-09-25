import reservationsData from './reservations-data.json';

function generateTableRows(data) {
    return data.map(item =>
        `<tr><th>${item.label}</th><td>${item.value}</td></tr>`
    ).join('');
}

function generateAllReservations(data) {
    return data.map((reservation, i) => `
        <div class="reservation-block">
            <h3 class="heading-three">Reservering ${i + 1}</h3>
            <table class="reserveringen-tabel">
                <tbody>
                    ${generateTableRows(reservation)}
                </tbody>
            </table>
        </div>
    `).join('');
}

export const reservationsPage = `
<h1 class="page-title heading-three">Reserveringen</h1>
<section class="reserveringen">
    <h2 class="heading-two">Reserveringen overzicht</h2>
    <div class="reserveringen-content">
        ${generateAllReservations(reservationsData)}
    </div>
</section>
`;
