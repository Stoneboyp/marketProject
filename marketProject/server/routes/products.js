const express = require("express");
const router = express.Router();
const productData = require("../data/productData.json");
const { addDataToFile, deleteDataFromFile } = require("../dataService.js");

router.use(express.json());

router.get("/", (req, res) => {
  res.send(productData);
});

router.post("/", (req, res) => {
  const { productType } = req.body;
  const newProductData = { productType };
  const success = addDataToFile("productData", newProductData);
  if (success) {
    res.status(200).send("Product data updated");
  } else {
    res.status(500).send("Error writing product data");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const success = deleteDataFromFile("productData", id);
  if (success) {
    res.status(200).send("Product deleted successfully");
  } else {
    return res.status(500).send("Error writing Product data");
  }
});

module.exports = router;
