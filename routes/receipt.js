const express = require("express");
const router = express.Router();

const { ensureauthenticated, ensureManager } = require("../middleware/auth");
const salesModel = require("../models/salesModel");
const stockModel = require("../models/stockModel");

router.get("/receipts", async (req, res) => {
  try {
    //sales agent only sees their sales
    const sales = await salesModel.find().populate("salesAgent", "email");
    res.render("receipts", {sales});
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Unable to find sale");
  }
});



module.exports = router;