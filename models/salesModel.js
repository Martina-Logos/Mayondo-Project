const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const salesSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  customer: {
    type: String,
  },
  transport: {
    type: Boolean,
  },
  costPrice: {
    type: Number,
  },
  totalPrice: {
  type: Number,
  },
  soldBy: {
    type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  // salesAgent: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "UserModel",
  //   required: true,
  // },
});


    // Export Model
salesSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("salesModel", salesSchema);