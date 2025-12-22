// Dummy data
const dashboardData = {
  reservations: 18,
  availability: ["12 plekken", "2 accommodaties"],
  messages: "12 ongelezen berichten",
  catering: ["Pistolletjes : 2", "Stokbrood : 25"],
  invoice: "Volgende factuur datum xx/xx/xxxx \n €420",
  turnover: "€420"
};

//Reserveringen
{
document.getElementById("reservationsTotal").textContent =
  `Totaal: ${dashboardData.reservations} reserveringen`;

const ctx = document.getElementById("reservationsChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12","08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12","08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12",],
    datasets: [{
      label: "Aantal reserveringen",
      data: [2, 5, 3, 7, 4, 8, 6,2, 5, 3, 7, 4, 8, 6,2, 5, 3, 7, 4, 8, 6,2, 5, 3, 7, 4, 8, 6,], 
      backgroundColor: '#8ED968',
      borderColor: '#8ED968',
      borderWidth: 1,
      borderRadius: 5
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: { title: { display: true, text: "Reserveringen per dag" } },
    scales: { y: { beginAtZero: true } }
}
});
}

// Beschikbaarheid
{
const ul = document.createElement("ul");
dashboardData.availability.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
document.getElementById("availabillity").appendChild(ul);
}

//Berichten
{
const p = document.createElement("p");
p.textContent = dashboardData.messages;
document.getElementById("messages").appendChild(p);
}

//Catering
{
const ul = document.createElement("ul");
dashboardData.catering.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
document.getElementById("catering").appendChild(ul);
}

//Factuur
{
const p = document.createElement("p");
p.textContent = dashboardData.invoice;
document.getElementById("invoice").appendChild(p);
}

//Omzet
{
const p = document.createElement("p");
p.textContent = dashboardData.turnover;
document.getElementById("turnover").appendChild(p);
}
