// Splitst reserveringsdata in hoofd- en detailgegevens
function splitReservationData(data) {
  const hoofdLabels = ["Naam"];
  const hoofd = data.filter((item) => hoofdLabels.includes(item.label));
  const details = data.filter((item) => !hoofdLabels.includes(item.label));
  return { hoofd, details };
}

// Genereert HTML-rijen
function generateTableRows(rows) {
  return rows
    .map((item) => `<tr><th>${item.label}</th><td>${item.value}</td></tr>`)
    .join("");
}

// Zet backend-data om naar het juiste format voor de tabel
function formatReservationData(reservation) {
  return [
    { label: "Naam", value: reservation.naam },
    { label: "Aankomst", value: reservation.aankomst },
    { label: "Vertrek", value: reservation.vertrek },
    { label: "Plaats", value: reservation.plaats },
    { label: "Status", value: reservation.status },
    { label: "Contact", value: reservation.contact },
  ];
}

// Genereert alle reserveringsblokken
function generateAllReservations(data) {
  return data
    .map((reservation, i) => {
      const formattedData = formatReservationData(reservation);
      const { hoofd, details } = splitReservationData(formattedData);

      return `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="reservation-block foldable-reservation" tabindex="0" data-original="${i + 1}">
        <div class="reservation-summary">
          <div class="reservation-header">
            <button class="fold-toggle" aria-expanded="false" aria-label="Toon details">
              <div class="reservation-title heading-three">Reservering ${i + 1}</div>
            </button>
            <button class="edit-button" title="Bewerk reservering">
              <i class="fa-solid fa-gear"></i>
            </button>
          </div>
          <table class="reserveringen-tabel reservation-summary-table">
            <tbody>
              ${generateTableRows(hoofd)}
            </tbody>
          </table>
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

// Exporteer HTML-structuur van de pagina
export const reservationsPage = `
<section class="reserveringen">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <div class="page-header">
    <h1 class="header">Reserveringen overzicht</h1>
  </div>

  <div class="filter-bar">
    <div class="filter-left">
      <div class="search-container">
        <button id="search-toggle" class="icon-button" title="Zoeken">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <input type="text" id="search-input" placeholder="Zoek op naam..." class="search-input hidden">
      </div>

      <div class="dropdown">
        <button id="sort-toggle" class="icon-button">Sorteer ▼</button>
        <div id="sort-menu" class="dropdown-menu hidden">
          <button data-sort="default">Op reservering</button>
          <button data-sort="name">Op naam</button>
          <button data-sort="status">Op status</button>
        </div>
      </div>
    </div>

    <div class="add-reservation">
      <button type="button" class="icon-button" title="Reservering toevoegen">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>

  <div class="reservations-list"></div>
</section>
`;

// ===== FRONTEND LOGICA =====
if (typeof window !== "undefined") {
  // Fetch data van backend
  async function fetchReservations() {
    try {
      const response = await fetch("http://localhost:8080/api/reservations");
      if (!response.ok) throw new Error("Network response was not ok");
      const reservations = await response.json();
      console.log("Fetched reservations:", reservations);
      return reservations;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  }

  // Inklapbare blokken activeren
  function activateFoldable() {
    document.querySelectorAll(".foldable-reservation").forEach((block) => {
      const btn = block.querySelector(".fold-toggle");
      const details = block.querySelector(".reservation-details");
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        details.hidden = expanded;
      });
    });
  }

  // Pagina logica
  window.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".reservations-list");

    // Data ophalen en tonen
    const reservations = await fetchReservations();
    container.innerHTML = generateAllReservations(reservations);
    activateFoldable();

    // Zoek- en sorteerfunctionaliteit
    const searchInput = document.getElementById("search-input");
    const searchToggle = document.getElementById("search-toggle");
    const sortMenu = document.getElementById("sort-menu");
    const sortToggle = document.getElementById("sort-toggle");
    const originalBlocks = Array.from(container.children);

    // Zoekbalk toggle
    searchToggle.addEventListener("click", () => {
      searchInput.classList.toggle("hidden");
      if (!searchInput.classList.contains("hidden")) searchInput.focus();
    });

    // Zoeken op naam
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      Array.from(container.children).forEach((block) => {
        const naamCell = block.querySelector(".reservation-summary-table tr td");
        const naam = naamCell ? naamCell.textContent.trim().toLowerCase() : "";
        block.style.display = naam.includes(query) ? "" : "none";
      });
    });

    // Sorteer dropdown toggle
    sortToggle.addEventListener("click", () => {
      sortMenu.classList.toggle("hidden");
    });

    // Sorteer opties
    sortMenu.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const sortType = btn.dataset.sort;
        let blocks = Array.from(container.children);

        // Reset actieve knop
        sortMenu.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Sorteer op naam
        if (sortType === "name") {
          blocks.sort((a, b) => {
            const naamA = a.querySelector(".reservation-summary-table tr td")?.textContent?.trim() || "";
            const naamB = b.querySelector(".reservation-summary-table tr td")?.textContent?.trim() || "";
            return naamA.localeCompare(naamB, "nl", { sensitivity: "base" });
          });
        }

        // Sorteer op status
        else if (sortType === "status") {
          const statusOrder = {
            "In behandeling": 1,
            "Bevestigd": 2,
            "Geannuleerd": 3,
          };
          function getStatus(block) {
            const rows = block.querySelectorAll(".reservation-details-table tr");
            for (const row of rows) {
              if (row.querySelector("th")?.textContent.trim() === "Status") {
                return row.querySelector("td")?.textContent.trim() || "";
              }
            }
            return "";
          }
          blocks.sort((a, b) => {
            const sa = statusOrder[getStatus(a)];
            const sb = statusOrder[getStatus(b)];
            return sa - sb;
          });
        }

        // Standaardvolgorde herstellen
        else {
          blocks = originalBlocks;
        }

        // Update volgorde
        blocks.forEach((b) => container.appendChild(b));

        // Dropdown sluiten met animatie
        sortMenu.classList.add("close");
        setTimeout(() => {
          sortMenu.classList.add("hidden");
          sortMenu.classList.remove("close");
        }, 200);
      });
    });
  });
}
