import CateringService from '../../../../../catering-service.js';

const cateringService = new CateringService();

const modal = document.getElementById("myModal");
const closeSpan = document.getElementsByClassName("close")[0];
const cancelBtn = document.getElementById("closeModal");
const form = document.getElementById('breadform');
const container = document.getElementById("breadsContainer");

// SLUIT MODAL
const closeModal = () => modal.style.display = "none";

// OPENEN
document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        modal.style.display = "block";
    });
});

closeSpan.onclick = closeModal;
cancelBtn.onclick = closeModal;
window.onclick = e => { if (e.target === modal) closeModal(); };



// BROODJES TONEN

async function showAllBread() {
    const breads = await cateringService.getAllBread();
    container.innerHTML = "";

    breads.forEach(b => {
        const card = document.createElement("div");
        card.className = "bread";

        const delBtn = document.createElement("button");
        delBtn.className = "delete-bread";
        delBtn.dataset.name = b.name;
        delBtn.textContent = "×";

        const name = document.createElement("p");
        name.textContent = b.name;

        const price = document.createElement("p");
        price.textContent = `€${Number(b.price).toFixed(2)}`;

        const editBtn = document.createElement("button");
        editBtn.className = "edit-bread";
        editBtn.dataset.name = b.name;
        editBtn.textContent = "✎";

        card.appendChild(editBtn);
        card.appendChild(delBtn);
        card.appendChild(name);
        card.appendChild(price);

        container.appendChild(card);
    });
}



// DELETE

container.addEventListener("click", async (e) => {
    if (!e.target.classList.contains("delete-bread")) return;

    const name = e.target.dataset.name;
    const ok = await cateringService.deleteBread(name);

    if (ok) {
        showAllBread();
    }
});

container.addEventListener("click", async (e) => {

    // DELETE
    if (e.target.classList.contains("delete-bread")) {
        const name = e.target.dataset.name;
        const ok = await cateringService.deleteBread(name);
        if (ok) showAllBread();
    }

    // EDIT
    if (e.target.classList.contains("edit-bread")) {
        const name = e.target.dataset.name;

        const bread = await cateringService.getAllBread()
            .then(arr => arr.find(b => b.name === name));

        // vul modal
        document.getElementById("itemName").value = bread.name;
        document.getElementById("itemPrice").value = bread.price;

        form.dataset.mode = "edit";  // toggle mode
        form.dataset.originalName = name;

        modal.style.display = "block";
    }
});


// add

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const bread = {
        name: document.getElementById("itemName").value,
        price: Number(document.getElementById("itemPrice").value)
    };

    const result = await cateringService.addBread(bread);

    if (result) {
        closeModal();
        form.reset();
        showAllBread();
    }
});

document.addEventListener("DOMContentLoaded", showAllBread);
