
  // Bar Chart – Sales Over Time
  new Chart(document.getElementById("salesChart"), {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Sales (UGX)",
        data: [300000, 450000, 200000, 500000, 600000, 350000, 400000],
        backgroundColor: "#a8d5ba"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Pie Chart – Payment Method Breakdown
  new Chart(document.getElementById("paymentChart"), {
    type: "pie",
    data: {
      labels: ["Cash", "Cheque", "Bank Overdraft"],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: ["#b3d4fc", "#a8d5ba", "#fdd9a0"]
      }]
    },
    options: {
      responsive: true
    }
  });
