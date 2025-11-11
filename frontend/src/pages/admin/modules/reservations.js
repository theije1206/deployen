// Maakt een reserverings HTML element door de template te klonen en gegevens in te vullen.
function createReservationElement(reservation, index) {
  const tpl = document.getElementById("reservation-template");
  if (!tpl) return document.createElement("div");
  const node = tpl.content.firstElementChild.cloneNode(true);
  const id = reservation.id ?? reservation._id ?? index + 1;
  node.setAttribute("data-original", id);

  // Vult de gekloonde template.
  const setField = (field, value) => {
    const el = node.querySelector(".field-" + field);
    if (el) el.textContent = value ?? "";
  };

  setField("Naam", reservation.naam ?? reservation.Naam ?? "");
  setField("Aankomst", reservation.aankomst ?? reservation.Aankomst ?? "");
  setField("Vertrek", reservation.vertrek ?? reservation.Vertrek ?? "");
  setField("Plaats", reservation.plaats ?? reservation.Plaats ?? "");
  setField("Contact", reservation.contact ?? reservation.Contact ?? "");
  setField("Status", reservation.status ?? reservation.Status ?? "");

  const title = node.querySelector(".reservation-id");
  if (title) title.textContent = id;

  const details = node.querySelector(".reservation-details");
  if (details) details.hidden = true;
  node.setAttribute("aria-expanded", "false");

  return node;
}

// Bereidt de reserveringenpagina voor, laadt de reserveringen en activeert alle knoppen en functies.
async function setupReservationsPage() {
  const container = document.querySelector(".reservations-list");
  const formulier = document.getElementById("reservation-formulier");
  const form = document.getElementById("reservation-form");
  const searchInput = document.getElementById("search-input");
  const searchToggle = document.getElementById("search-toggle");
  const sortToggle = document.getElementById("sort-toggle");
  const sortMenu = document.getElementById("sort-menu");
  const deleteBtn = document.getElementById("delete-reservation");

  if (!container) return;

  // Haalt alle reserveringen op van de backend.
  async function fetchReservations() {
    try {
      const r = await fetch("/api/reservations");
      return r.ok ? await r.json() : [];
    } catch (e) {
      console.error("fetch reservations failed", e);
      return [];
    }
  }

  const reservations = await fetchReservations();
  container.replaceChildren(); 
  reservations.forEach((reservation, index) =>
    container.appendChild(createReservationElement(reservation, index))
  );

  let originalOrder = Array.from(container.children);

  // Opent het formulier
  function showFormulier(title) {
    if (!formulier) return;
    const heading = formulier.querySelector(".formulier-content h2");
    if (heading) heading.textContent = title || "Nieuwe boeking";
    formulier.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  // Verbergt het formulier
  function hideFormulier() {
    if (!formulier) return;
    formulier.classList.add("hidden");
  }

  // Regelt het klikken binnen de reserveringenlijst (bewerken en details tonen).
  container.addEventListener("click", (e) => {
    const editBtn = e.target.closest(".edit-button");
    if (editBtn) {
      e.stopPropagation();
      const block = editBtn.closest(".reservation-block");
      if (!block || !form) return;

      // Lees de waarde op basis van het label.
      const getField = (label) => {
        const row = Array.from(block.querySelectorAll("tr")).find(
          (r) => r.querySelector("th")?.textContent.trim() === label
        );
        return row?.querySelector("td")?.textContent.trim() || "";
      };

      form.dataset.editing = block.getAttribute("data-original") || "";
      if (form.naam) form.naam.value = getField("Naam");
      if (form.aankomst) form.aankomst.value = getField("Aankomst");
      if (form.vertrek) form.vertrek.value = getField("Vertrek");
      if (form.plaats) form.plaats.value = getField("Plaats");
      if (form.contact) form.contact.value = getField("Contact");

      if (deleteBtn) deleteBtn.style.display = "inline-block";
      showFormulier("Boeking wijzigen");
      return;
    }

    // Toggle details weergave
    const block = e.target.closest(".reservation-block");
    if (!block) return;
    const details = block.querySelector(".reservation-details");
    const expanded = block.getAttribute("aria-expanded") === "true";
    block.setAttribute("aria-expanded", String(!expanded));
    if (details) details.hidden = expanded;
  });

  // Activeert zoekveld en filtert op naam
  if (searchToggle && searchInput) {
    searchToggle.addEventListener("click", () => {
      searchInput.classList.toggle("hidden");
      if (!searchInput.classList.contains("hidden")) searchInput.focus();
    });
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      Array.from(container.children).forEach((b) => {
        const naam =
          b.querySelector(".field-Naam")?.textContent.trim().toLowerCase() ||
          "";
        b.style.display = naam.includes(q) ? "" : "none";
      });
    });
  }

  // Activeert sorteer functionaliteit voor naam/status/reservering
  if (sortToggle && sortMenu) {
    sortToggle.addEventListener("click", () =>
      sortMenu.classList.toggle("hidden")
    );
    sortMenu.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const sortType = btn.dataset.sort;
        let blocks = Array.from(container.children);
        sortMenu
          .querySelectorAll("button")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        if (sortType === "name") {
          blocks.sort((a, b) =>
            (a.querySelector(".field-Naam")?.textContent || "").localeCompare(
              b.querySelector(".field-Naam")?.textContent || "",
              "nl",
              { sensitivity: "base" }
            )
          );
        } else if (sortType === "status") {
          const statusOrder = {
            "In behandeling": 1,
            Bevestigd: 2,
            Geannuleerd: 3,
          };
          const getStatus = (block) =>
            block.querySelector(".field-Status")?.textContent?.trim() || "";
          blocks.sort(
            (a, b) =>
              (statusOrder[getStatus(a)] || 99) -
              (statusOrder[getStatus(b)] || 99)
          );
        } else {
          blocks = Array.from(originalOrder);
        }

        blocks.forEach((b) => container.appendChild(b));
        sortMenu.classList.add("hidden");
        sortToggle.textContent =
          sortType === "default"
            ? "Sorteer ▼"
            : sortType === "name"
            ? "Sorteer: Naam"
            : "Sorteer: Status";
      });
    });
  }

  // Opent formulier via knop
  const openBtn = document.getElementById("open-form-btn");
  if (openBtn)
    openBtn.addEventListener("click", () => {
      if (deleteBtn) deleteBtn.style.display = "none";
      if (form) form.dataset.editing = "";
      showFormulier("Nieuwe boeking");
    });

  // Sluit formulier via knop
  const closeBtn = document.getElementById("close-formulier");
  if (closeBtn) closeBtn.addEventListener("click", () => hideFormulier());

  // Verstuurt formulierdata naar backend (POST of PUT)
  if (form)
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      data.status = data.status || "In behandeling";
      const editing = form.dataset.editing;
      const method = editing ? "PUT" : "POST";
      const url = editing
        ? `/api/bookings/${editing}`
        : "/api/bookings";

      try {
        const r = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const saved = await r.json();

        if (editing) {
          const old = container.querySelector(`[data-original='${editing}']`);
          const newEl = createReservationElement(saved, 0);
          if (old && !saved.id && !saved._id) {
            newEl.setAttribute("data-original", editing);
            const idEl = newEl.querySelector(".reservation-id");
            if (idEl) idEl.textContent = editing;
          }
          if (old) old.replaceWith(newEl);
          form.dataset.editing = "";
        } else {
          const el = createReservationElement(saved, container.children.length);
          container.appendChild(el);
          const num = saved.id ?? saved._id ?? container.children.length;
          el.setAttribute("data-original", num);
          const idEl = el.querySelector(".reservation-id");
          if (idEl) idEl.textContent = num;
          originalOrder.push(el);
        }

        hideFormulier();
        form.reset();
      } catch (err) {
        console.error("save failed", err);
      }
    });

  // Verwijdert reservering van de backend en frontend
  if (deleteBtn && form) {
    deleteBtn.addEventListener("click", async () => {
      const editing = form.dataset.editing;
      if (!editing) {
        alert("Geen boeking geselecteerd om te verwijderen.");
        return;
      }

      if (!confirm("Weet je zeker dat je deze boeking wilt verwijderen?"))
        return;

      try {
        const response = await fetch(`/api/bookings/${editing}`, {
          method: "DELETE",
        });
        if (response.ok) {
          const block = container.querySelector(`[data-original='${editing}']`);
          if (block) block.remove();
          form.reset();
          form.dataset.editing = "";
          hideFormulier();
          alert("Reservering succesvol verwijderd.");
        } else if (response.status === 404) {
          alert("Reservering niet gevonden.");
        } else {
          alert("Verwijderen mislukt.");
        }
      } catch (err) {
        console.error("delete failed", err);
        alert("Er is een fout opgetreden bij het verwijderen.");
      }
    });
  }
}

if (typeof window !== "undefined") {
  setupReservationsPage().catch((err) =>
    console.error("Failed to initialize reservations page", err)
  );
}
