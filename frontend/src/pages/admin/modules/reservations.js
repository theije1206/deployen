import reservationsData from './reservations-data.json';
import { navigation } from '../navigation.js';


function splitReservationData(data) {
    const hoofdLabels = ["Naam"];
    const hoofd = data.filter(item => hoofdLabels.includes(item.label));
    const details = data.filter(item => !hoofdLabels.includes(item.label));
    return { hoofd, details };
}

function generateTableRows(rows) {
    return rows.map(item =>
        `<tr><th>${item.label}</th><td>${item.value}</td></tr>`
    ).join('');
}


function generateAllReservations(data) {
    return data.map((reservation, i) => {
        const { hoofd, details } = splitReservationData(reservation);
        return `
        <div class="reservation-block foldable-reservation" tabindex="0">
            <div class="reservation-summary">
                <div class="reservation-title heading-three">Reservering ${i + 1}</div>
                <table class="reserveringen-tabel reservation-summary-table">
                    <tbody>
                        ${generateTableRows(hoofd)}
                    </tbody>
                </table>
                <button class="fold-toggle" aria-expanded="false" aria-label="Toon details">
                    <span class="fold-toggle-icon">▼</span>
                </button>
            </div>
            <div class="reservation-details" hidden>
                <table class="reserveringen-tabel reservation-details-table">
                    <tbody>
                        ${generateTableRows(details)}
                    </tbody>
                </table>
            </div>
        </div>
        `;
    }).join('');
}


export const reservationsPage = [
    navigation,
    '<h1 class="page-title heading-three">Reserveringen</h1>',
    '<section class="reserveringen">',
    '    <h2 class="heading-two">Reserveringen overzicht</h2>',
    '    <div class="reserveringen-content">',
         generateAllReservations(reservationsData),
    '    </div>',
    '</section>'
].join('\n');

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.foldable-reservation').forEach(block => {
            const btn = block.querySelector('.fold-toggle');
            const details = block.querySelector('.reservation-details');
            btn.addEventListener('click', () => {
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', !expanded);
                details.hidden = expanded;
                btn.querySelector('.fold-toggle-icon').textContent = expanded ? '▼' : '▲';
            });
            block.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    btn.click();
                }
            });
        });
    });
}
