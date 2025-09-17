// reports.js
document.addEventListener("DOMContentLoaded", () => {
  const stockData = [
    {
      name: "Mahogany Bed",
      type: "Furniture",
      costPrice: 300000,
      productPrice: 450000,
      supplier: "Upcountry Woods Ltd",
      date: "2025-08-25",
      quantity: 10,
    },
    {
      name: "Timber Planks",
      type: "Wood",
      costPrice: 150000,
      productPrice: 200000,
      supplier: "GreenPole Suppliers",
      date: "2025-08-28",
      quantity: 50,
    },
  ];

  const tbody = document.querySelector("#stock-table tbody");
  stockData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>${item.costPrice.toLocaleString()}</td>
      <td>${item.productPrice.toLocaleString()}</td>
      <td>${item.supplier}</td>
      <td>${item.date}</td>
      <td>${item.quantity}</td>
    `;
    tbody.appendChild(row);
  });

  // Sales Summary (mocked)
  const totalSales = stockData.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );
  document.getElementById(
    "sales-summary"
  ).innerText = `Total Sales: UGX ${totalSales.toLocaleString()}`;

  // Promotional Spend (5%)
  const promoSpend = totalSales * 0.05;
  document.getElementById(
    "promo-spend"
  ).innerText = `Promotional Budget: UGX ${promoSpend.toLocaleString()}`;
});
