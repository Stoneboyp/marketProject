const express = require("express");
const router = express.Router();
const fs = require("fs");
const productData = require("../data/productData.json");

router.use(express.json());

router.get("/", (req, res) => {
  res.send(productData);
});

router.post("/addProduct", (req, res) => {
  if (req.method == "POST") {
    const { productType } = req.body;
    const newProductData = { productType };
    productData.data.push(newProductData);
    fs.writeFile(
      "./data/productData.json",
      JSON.stringify(productData),
      (err) => {
        if (err) {
          console.error("Error writing product data:", err);
          res.status(500).send("Error writing product data");
          return;
        }
        res.status(200).send("Product data updated");
      }
    );
  }
});

module.exports = router;
