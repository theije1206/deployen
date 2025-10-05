import reservationsData from "./reservations-data.json";
// import { navigation } from "../navigation.js";

// splitst reserveringsdata
function splitReservationData(data) {
  const hoofdLabels = ["Naam"];
  const hoofd = data.filter((item) => hoofdLabels.includes(item.label));
  const details = data.filter((item) => !hoofdLabels.includes(item.label));
  return { hoofd, details };
}

// genereert HTML rijen
function generateTableRows(rows) {
  return rows
    .map((item) => `<tr><th>${item.label}</th><td>${item.value}</td></tr>`)
    .join("");
}

// genereert alle reserveringsblokken als HTML string
function generateAllReservations(data) {
  return data
    .map((reservation, i) => {
      const { hoofd, details } = splitReservationData(reservation);
      return `
    <div class="reservation-block foldable-reservation" tabindex="0" data-original="${i + 1}">
      <div class="reservation-summary">
        <div class="reservation-header">
          <div class="reservation-title heading-three">Reservering ${i + 1}</div>
          <a href="#" class="ui-btn ui-corner-all ui-icon-edit ui-btn-icon-notext">Bewerk</a>
        </div>
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
    </div>`;
    })
    .join("");
}

// combineert alles
export const reservationsPage = [
  navigation,
  '<section class="reserveringen">',
  '  <div class="page-header">',
  '    <h1 class="header">Reserveringen overzicht</h1>',
  '    <div class="buttons-container">',
  '      <input type="text" id="search-input" placeholder="Zoek op naam..." class="search-input">',
  '      <select id="sort-select" class="sort-select">',
  '        <option value="default">Sorteer op reservering</option>',
  '        <option value="name">Sorteer op naam</option>',
  '        <option value="status">Sorteer op status</option>',
  "      </select>",
  "    </div>",
  "  </div>",
  '  <div class="reserveringen-content">',
  generateAllReservations(reservationsData),
  "  </div>",
  "</section>",
].join("\n");

if (typeof window !== "undefined") {
  // Maak foldable reserveringsblokken functioneel
  function activateFoldable() {
    document.querySelectorAll(".foldable-reservation").forEach((block) => {
      const btn = block.querySelector(".fold-toggle");
      const details = block.querySelector(".reservation-details");
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        details.hidden = expanded;
        btn.querySelector(".fold-toggle-icon").textContent = expanded ? "▼" : "▲";
      });
      block.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          btn.click();
        }
      });
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Activeer foldable functionaliteit voor reserveringsblokken
    activateFoldable();

    // Haal de sorteer dropdown op
    const sortSelect = document.querySelector(".sort-select");
    if (!sortSelect) return;

    // Container met alle reserveringsblokken
    const container = document.querySelector(".reserveringen-content");
    const originalBlocks = Array.from(container.children);

    // zoekfunctie op naam
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        const blocks = Array.from(container.children);

        blocks.forEach((block) => {
          const naamCell = block.querySelector(".reservation-summary-table tr td");
          const naam = naamCell ? naamCell.textContent.trim().toLowerCase() : "";
          block.style.display = naam.includes(query) ? "" : "none";
        });
      });
    }

    // EventListener voor wanneer de sorteeroptie verandert
    sortSelect.addEventListener("change", () => {
      const value = sortSelect.value;
      let blocks = Array.from(container.children);

      // Sorteer op naam
      if (value === "name") {
        blocks.sort((a, b) => {
          const naamA = a.querySelector(".reservation-summary-table tr td").textContent.trim();
          const naamB = b.querySelector(".reservation-summary-table tr td").textContent.trim();
          return naamA.localeCompare(naamB, "nl", { sensitivity: "base" });
        });

      // Sorteer op status
      } else if (value === "status") {
        // volgorde van status
        const statusReservation = {
          "In behandeling": 1,
          "Bevestigd": 2,
          "Geannuleerd": 3
        };

        // functie om de status uit een blok te halen
        function getStatus(block) {
          const rows = block.querySelectorAll(".reservation-details-table tr");
          for (const row of rows) {
            const th = row.querySelector("th");
            if (th && th.textContent.trim() === "Status") {
              const td = row.querySelector("td");
              return td ? td.textContent.trim() : "";
            }
          }
          return "";
        }

        // Sorteer de blokken op basis van statusReservation
        blocks.sort((a, b) => {
          const statusA = getStatus(a);
          const statusB = getStatus(b);
          const reservationA = statusReservation[statusA] || 999;
          const reservationB = statusReservation[statusB] || 999;
          return reservationA - reservationB;
        });

      // Terug naar originele volgorde
      } else {
        blocks = originalBlocks;
      }

      // Zet de blokken opnieuw in de container
      blocks.forEach((block) => container.appendChild(block));

      // Nummer de reserveringen opnieuw
      blocks.forEach((block) => {
        const title = block.querySelector(".reservation-title");
        const orig = block.getAttribute("data-original");
        if (title && orig) title.textContent = `Reservering ${orig}`;
      });
    });
  });
}
