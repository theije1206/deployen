import Navbar from "@/components/navbar/index.js";
import "@/styles/global.css";
import "@/styles/typography.css";
import "@/pages/admin/styles.css";
import {Chart, registerables} from "chart.js";

const navbar = Navbar();

document.querySelector("body").prepend(navbar);

Chart.register(...registerables);

export function initDashboard() {
    const container = document.querySelector(".dashboard-container");
    if (!container) return;

    console.log("Dashboard initialized!");

    const dateInput = container.querySelector(".date");
    const ctx = container.querySelector("#reservationsChart").getContext("2d");
    let chart;

    async function loadData(dateKey) {
        try {
            const response = await fetch("http://localhost:8080/api/dashboard?date=" + dateKey);
            if (!response.ok) throw new Error("Server returned " + response.status);
            const data = await response.json();
            renderDashboard(data);
        } catch (err) {
            console.error("Could not load data:", err);
            alert("Geen data beschikbaar voor deze datum.");
        }
    }

    function renderDashboard(data) {
        if (chart) chart.destroy();
        chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
                datasets: [{
                    label: "Aantal reserveringen",
                    data: data.reservations,
                    backgroundColor: "#8ED968",
                    borderColor: "#8ED968",
                    borderWidth: 1,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {title: {display: true, text: "Reserveringen per dag"}},
                scales: {y: {beginAtZero: true}}
            }
        });

        const availList = container.querySelector("#availList");
        availList.replaceChildren();
        data.availability.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            availList.appendChild(li);
        });

        container.querySelector("#unreadCount").textContent = data.unreadMessages;

        const catList = container.querySelector("#catList");
        catList.replaceChildren();
        data.catering.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = `${entry.name}: ${entry.count}`;
            catList.appendChild(li);
        });

        container.querySelector("#invoiceDate").textContent = data.invoice.date;
        container.querySelector("#invoiceAmount").textContent = data.invoice.amount;
        container.querySelector("#turnoverAmount").textContent = data.turnover;
    }

    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
    loadData(today);

    dateInput.addEventListener("change", e => loadData(e.target.value));
}