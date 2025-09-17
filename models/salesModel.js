const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signupSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // trim: true this one combines the users names which isn't necessary
  },
  quantity: {
    type: String,
  },
  customer: {
    type: String,
  },
  transport: {
    type: Boolean,
  },
  costPrice: {
    type: String,
  },
  salesAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
});


    // Export Model
signupSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("userModel", signupSchema);