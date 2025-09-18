document.getElementById("unitPrice").addEventListener("change", function (){
  const unitPrice = (parseFloat = parseFloat(document.getElementById("unitPrice"), value));
  const quantity = (parseFloat = parseFloat(document.getElementById("quantity"), value));
  const totalPrice = (parseFloat = parseFloat(document.getElementById("totalPrice"), value));
  
  if (!isNaN(quantity) && !isNaN(unitPrice)) {   //isNan means is not a number
    const totalCost = (quantity * unitPrice).toFixed(0);
    totalPrice.value = totalCost;
  } else {
    totalPrice.value = "";
  }
});
