// Dummy data
const dashboardData = {
    reservations: 18,
    availability: ["12 plekken", "2 accommodaties"],
    messages: "12 ongelezen berichten",
    catering: ["Frikandelbroodjes : 2", "Stokbrood : 25"],
    invoice: "Volgende factuurdatum xx/xx/xxxx \n €420",
    turnover: "€420"
  };
  
  //Reserveringen
  {

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
  