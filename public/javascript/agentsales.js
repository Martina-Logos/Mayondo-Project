document.getElementById("date").textContent = new Date().toLocaleDateString();

document.getElementById("saleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const product = document.getElementById("product").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const customer = document.getElementById("customer").value;
  const payment = document.getElementById("payment").value;
  const transport = document.getElementById("transport").checked;
  const basePrice = parseFloat(document.getElementById("basePrice").value);
  const notes = document.getElementById("notes").value;
  const soldBy = document.getElementById("soldBy").value;

  const transportFee = transport ? 0.05 * basePrice * quantity : 0;
  const total = basePrice * quantity + transportFee;

  const receipt = `
      <strong>Receipt ID:</strong> #MWF${Math.floor(Math.random() * 10000)}<br>
      <strong>Product:</strong> ${product}<br>
      <strong>Quantity:</strong> ${quantity}<br>
      <strong>Customer:</strong> ${customer}<br>
      <strong>Payment Method:</strong> ${payment}<br>
      <strong>Transport Fee:</strong> UGX ${transportFee.toFixed(2)}<br>
      <strong>Total Price:</strong> UGX ${total.toFixed(2)}<br>
      <strong>Sales Agent:</strong> Tee<br>
      <strong>Date:</strong> ${new Date().toLocaleDateString()}<br>
      <strong>Notes:</strong> ${notes || "None"}
      <strong>Sold by:</strong> ${soldBy}<br>
    `;
  document.getElementById("receiptOutput").innerHTML = receipt;
});
