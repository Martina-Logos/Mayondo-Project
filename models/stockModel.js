const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("StockModel", stockSchema);
