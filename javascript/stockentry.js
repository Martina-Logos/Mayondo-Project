const form = document.getElementById("stockForm");
const tableBody = document.querySelector("#stockTable tbody");

// Entry-level value field
const entryValueInput = document.getElementById("entryValue");

// Summary fields
const totalQtyInput = document.getElementById("totalQty");
const summaryValueInput = document.getElementById("summaryValue");

// Auto-calculate entry value
document
  .getElementById("quantity")
  .addEventListener("input", calculateEntryValue);
document
  .getElementById("unitPrice")
  .addEventListener("input", calculateEntryValue);

function calculateEntryValue() {
  const qty = parseInt(document.getElementById("quantity").value) || 0;
  const price = parseFloat(document.getElementById("unitPrice").value) || 0;
  entryValueInput.value = (qty * price).toLocaleString();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const productName = document.getElementById("productName").value;
  const category = document.getElementById("category").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const unitPrice = parseFloat(document.getElementById("unitPrice").value);
  const costPrice = parseFloat(document.getElementById("costPrice").value);
  const supplier = document.getElementById("supplier").value;
  const dateReceived = document.getElementById("dateReceived").value;

  if (quantity <= 0 || unitPrice < 0) {
    alert("Please enter valid quantity and price.");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${productName}</td>
    <td>${category}</td>
    <td>${quantity}</td>
    <td>${unitPrice.toLocaleString()}</td>
    <td>${costPrice.toLocaleString()}</td>
    <td>${supplier}</td>
    <td>${dateReceived}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  tableBody.appendChild(row);
  form.reset();
  entryValueInput.value = "";
  updateSummary();
});

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
  updateSummary();
}

function updateSummary() {
  let totalQty = 0;
  let totalVal = 0;

  const rows = document.querySelectorAll("#stockTable tbody tr");
  rows.forEach((row) => {
    const qty = parseInt(row.cells[2].textContent);
    const price = parseFloat(row.cells[3].textContent.replace(/,/g, ""));
    totalQty += qty;
    totalVal += qty * price;
  });

  totalQtyInput.value = totalQty;
  summaryValueInput.value = totalVal.toLocaleString();
}
