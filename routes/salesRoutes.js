const express = require("express");
const router = express.Router();

const { ensureauthenticated, ensureManager } = require("../middleware/auth");
const salesModel = require("../models/salesModel");
const stockModel = require("../models/stockModel");

router.get("/agentsales",  (req, res) => {
  res.render("agentsales");
});

router.post("/agentsales", async (req, res) => {
  try {
    const {product, quantity, customer, transport, costPrice, totalPrice, soldBy} = req.body
    const userId = req.session.user_id;
    // const stock = await
    const stock = await stockModel.findone({productType:producttype, productName:product})

    if(!stock){
        return req.statusCode(400).send("No stock");
    };
    if (stock.quantity < Number(quantity)){
        return res.status(400).send("Limited stock");
    };

    // Choose between Option 1 & 2 depending on what you are using
    //1. if you don't have total price captured in the frontend then this is what you do.
    let total = unitPrice * quantity
    if(transportCheck){
        total*= 1.05
    };


    //2. If total price is already captured
    // if(transportCheck){
    // totalPrice *= 1.05      //add 5%
    // };

    const sale = new salesModel({
        product, 
        quantity, 
        customer, 
        transport: transportSelected ? "yes" : "no", 
        costPrice, 
        totalPrice: total,
        soldBy: userId
    });

    console.log("Saving sale:", {

    });

    const sales = new salesModel(req.body);
    console.log(req.body);
    await stock.save();
    res.redirect("/dash");
  } catch (error) {
    console.error(error);
    res.redirect("/agentsales");
  }
});

module.exports = router;