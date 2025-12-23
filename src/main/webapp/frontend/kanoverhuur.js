async function fetchProducts() {
  try {
    const response = await fetch("/api/products");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function loadKanoOptions() {
  const products = await fetchProducts();
  const kanoSelect = document.getElementById("kano-type");

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.naam} - €${product.prijs} - ${product.capaciteit} personen`;
    kanoSelect.appendChild(option);
  });
}

loadKanoOptions();

async function submitRentingList(event) {
  event.preventDefault();

  const rentalData = {
    productId: parseInt(document.getElementById("kano-type").value),
    kanoCount: parseInt(document.getElementById("kano-count").value),
    rentalDate: document.getElementById("start").value,
    rentalTime: document.getElementById("rental-time").value,
    rentalDuration: parseInt(document.getElementById("duration-select").value),
    name: document.getElementById("name-info").value.trim(),
    phone: document.getElementById("contact-info").value.trim(),
    email: document.getElementById("email-info").value.trim(),
  };

  try {
    const response = await fetch("/api/product-reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rentalData),
    });

    if (response.ok) {
      const json = await response.json();
      const reservationId = json.id;
      window.location.href = `/booking-confirmation?id=${reservationId}`;
    } else {
      const errorText = await response.text();
      console.error("Backend fout:", errorText);
      alert("Fout bij het indienen van de kano verhuur. Controleer de invoer.");
    }
  } catch (error) {
    console.error(error);
    alert("Fout bij het indienen van de kano verhuur.");
  }
}
document
  .getElementById("renting-list")
  .addEventListener("submit", submitRentingList);
