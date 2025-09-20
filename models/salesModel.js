const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const salesSchema = new mongoose.Schema({
  productType: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  transport: {
    type: Boolean,
    required: true,
  },
  costPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  soldBy: {
    type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
});


// Export Model
salesSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("salesModel", salesSchema);