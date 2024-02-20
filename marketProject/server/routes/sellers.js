const express = require("express");
const router = express.Router();
const sellerData = require("../data/sellerData.json");
const { addDataToFile, deleteDataFromFile } = require("../dataService.js");

router.use(express.json());

router.get("/", (req, res) => {
  res.send(sellerData);
});

router.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  const newSellerData = { firstName, lastName };
  const success = addDataToFile("sellerData", newSellerData);
  if (success) {
    res.status(200).send("Seller data updated");
  } else {
    res.status(500).send("Error writing seller data");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const success = deleteDataFromFile("sellerData", id);
  if (success) {
    res.status(200).send("Seller deleted successfully");
  } else {
    return res.status(500).send("Error writing Seller data");
  }
});
module.exports = router;
