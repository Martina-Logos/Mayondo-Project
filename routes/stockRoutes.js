const express = require("express");
const router = express.Router();
const multer = require("multer");

const { ensureauthenticated, ensureManager } = require("../middleware/auth");
const StockModel = require("../models/stockModels");


router.get("/stockentry", ensureauthenticated, ensureManager, (req, res) => {
  //like the registerStock, you can use any  name that's not the file namebut better to have it related to what content is in the file
  res.render("stockentry");
});

router.post("/stockentry", async (req, res) => {
  try {
    const stock = new StockModel(req.body);
    console.log(req.body);
    await stock.save();
    res.redirect("/dash");
  } catch (error) {
    console.error(error);
    res.redirect("/index");
  }
});


router.get("/dash", (req, res) => {
  res.render("dash");
});

//Getting stock from the database
router.get("/stocklist", async (req, res) => {
  try {
    let items = await StockModel.find().sort({ $natural: -1 });
    console.log(items);
    res.render("stocktable", { items });
  } catch (error) {
    res.status(400).send("Unable to get data from the database");
  }
});

//updating stock
router.put("/stocklist", (req, res) => {});

module.exports = router;



