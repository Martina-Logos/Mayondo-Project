const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    // trim: true this one combines the users names which isn't necessary
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  agent: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StockModel", stockSchema);
