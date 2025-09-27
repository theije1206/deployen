import reservationsData from "./reservations-data.json";
import { navigation } from "../navigation.js";

// splitst reserveringsdata //
function splitReservationData(data) {
  const hoofdLabels = ["Naam"];
  const hoofd = data.filter((item) => hoofdLabels.includes(item.label));
  const details = data.filter((item) => !hoofdLabels.includes(item.label));
  return { hoofd, details };
}

// genereert HTML rijen //
function generateTableRows(rows) {
  return rows
    .map((item) => `<tr><th>${item.label}</th><td>${item.value}</td></tr>`)
    .join("");
}

// genereert alle reserveringsblokken als HTML string //
function generateAllReservations(data) {
  return data
    .map((reservation, i) => {
      const { hoofd, details } = splitReservationData(reservation);
      return `
    <div class="reservation-block foldable-reservation" tabindex="0" data-original="${
      i + 1
    }">
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
    })
    .join("");
}

// combineert alles //
export const reservationsPage = [
  navigation,
  '<h1 class="page-title heading-three">Reserveringen</h1>',
  '<section class="reserveringen">',
  '    <h2 class="heading-two">Reserveringen overzicht</h2>',
  '<button class="sort-button button" id="sort-button">Sorteer op naam</button>',
  '    <div class="reserveringen-content">',
  generateAllReservations(reservationsData),
  "    </div>",
  "</section>",
].join("\n");

if (typeof window !== "undefined") {
  // Maakt foldable reserveringsblokken functioneel //

  function activateFoldable() {
    document.querySelectorAll(".foldable-reservation").forEach((block) => {
      const btn = block.querySelector(".fold-toggle");
      const details = block.querySelector(".reservation-details");
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        details.hidden = expanded;
        btn.querySelector(".fold-toggle-icon").textContent = expanded
          ? "▼"
          : "▲";
      });
      block.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          btn.click();
        }
      });
    });
  }

  // sorteert op naam //
  window.addEventListener("DOMContentLoaded", () => {
    activateFoldable();
    const sortButton = document.getElementById("sort-button");
    if (sortButton) {
      const container = document.querySelector(".reserveringen-content");
      const originalBlocks = Array.from(container.children);
      let sorted = false;
      sortButton.addEventListener("click", () => {
        if (!sorted) {

          // Sorteer op naam //
          const blocks = Array.from(container.children);
          blocks.sort((a, b) => {
            const naamA = a
              .querySelector(".reservation-summary-table tr td")
              .textContent.trim();
            const naamB = b
              .querySelector(".reservation-summary-table tr td")
              .textContent.trim();
            return naamA.localeCompare(naamB, "nl", { sensitivity: "base" });
          });
          blocks.forEach((block) => container.appendChild(block));
          blocks.forEach((block) => {
            const title = block.querySelector(".reservation-title");
            const orig = block.getAttribute("data-original");
            if (title && orig) title.textContent = `Reservering ${orig}`;
          });

          sortButton.textContent = "Sorteer op reservering";
          sorted = true;
        } else {

          // originele volgorde //
          originalBlocks.forEach((block) => container.appendChild(block));
          originalBlocks.forEach((block) => {
            const title = block.querySelector(".reservation-title");
            const orig = block.getAttribute("data-original");
            if (title && orig) title.textContent = `Reservering ${orig}`;
          });
          sortButton.textContent = "Sorteer op naam";
          sorted = false;
        }
      });
    }
  });
}
