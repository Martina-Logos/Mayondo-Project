function generateReceipt(data) {
  document.getElementById("receiptId").textContent = Math.floor(
    Math.random() * 10000
  );
  document.getElementById("receiptDate").textContent =
    new Date().toLocaleDateString();
  document.getElementById("receiptCustomer").textContent = data.customer;
  document.getElementById("receiptProduct").textContent = data.product;
  document.getElementById("receiptQuantity").textContent = data.quantity;
  document.getElementById("receiptPayment").textContent = data.payment;
  document.getElementById("receiptTransport").textContent =
    data.transportFee.toFixed(2);
  document.getElementById("receiptTotal").textContent = data.total.toFixed(2);
  document.getElementById("receiptNotes").textContent = data.notes || "None";
}
