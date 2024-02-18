const express = require("express");
const router = express.Router();
const fs = require("fs");
const sellerData = require("../data/sellerData.json");

router.get("/", (req, res) => {
  res.send(sellerData);
});

router.post("/addSeller", (req, res) => {
  const { firstName, lastName } = req.body;
  const newSellerData = { firstName, lastName };
  sellerData.data.push(newSellerData);
  fs.writeFile("../data/sellerData.json", JSON.stringify(sellerData), (err) => {
    if (err) {
      console.error("Error writing seller data:", err);
      res.status(500).send("Error writing seller data");
      return;
    }
    res.status(200).send("Seller data updated");
  });
});

module.exports = router;
