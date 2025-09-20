const express = require("express");
const router = express.Router();

const { ensureauthenticated, ensureManager } = require("../middleware/auth");
const salesModel = require("../models/salesModel");
const stockModel = require("../models/stockModel");

router.get("/agentsales", async (req, res) => {
    try {
        const stocks = await stockModel.find()
         res.render("agentsales", {stocks});
    } 
    catch (error) {
        console.error(error.message)
    }
 
});

router.post("/agentsales", async (req, res) => {
  try {
    const {productType, productName, quantity, customer, payment, transport, costPrice, totalPrice, soldBy} = req.body
    const userId = req.session.user_id;
    // const stock = await
    const stock = await stockModel.findOne({productType:producttype, productName:product})

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
        total*= 1.05  //5% * the actual price + the charge (total += total * 0.05)
    };


    //2. If total price is already captured
    // if(transportCheck){
    // totalPrice *= 1.05      //add 5%
    // };

    if (stock && stock.quantity > 0) {
    const sale = new salesModel({
        productType,
        productName, 
        quantity, 
        customer, 
        payment,
        transportCheck:!! transportCheck, 
        costPrice, 
        totalPrice: total,
        soldBy: userId
    });

    console.log("Saving sale", sale);
    console.log(userId);
    await sale.save();


//Decrease  quantity from the stock collection
stock.quantity -= quantity
console.log("new quantity after sale", stock.quantity)
await stockModel.save();
res.redirect("/saleslist");
}else{
    return res.status(404).send("Product Sold Out!")
}
} catch (error) {
    console.error(error.message);
    res.redirect("/agentsales");
}
});


router.get("/salestable", async (req, res) => {
  try {
    //sales agent only sees their sales
    const sales = await salesModel.find().populate("salesAgent", "email");
    // req.session.user = currentUser
    const currentUser = req.session.user;
    console.log(currentUser);
    res.render("salestable", { sales, currentUser });
  } catch (error) {
    console.log(error.message);
    res.redirect("/");
}
});


//     const sales = new salesModel(req.body);
//     console.log(req.body);
//     await sale.save();
//     res.redirect("/dash");
//   } catch (error) {
//     console.error(error);
//     res.redirect("/agentsales");
//   }
// });

module.exports = router;