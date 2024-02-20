const express = require("express");
const router = express.Router();
const checkData = require("../data/checkData.json");
const { addDataToFile, deleteDataFromFile } = require("../dataService.js");

router.use(express.json());

router.get("/", (req, res) => {
  res.send(checkData);
});

router.post("/", (req, res) => {
  const { firstName, lastName, productType } = req.body;
  const newCheckData = { firstName, lastName, productType };
  const success = addDataToFile("checkData", newCheckData);
  if (success) {
    res.status(200).send("Check data updated");
  } else {
    res.status(500).send("Error writing check data");
  }
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const success = deleteDataFromFile("checkData", id);
  if (success) {
    res.status(200).send("Check deleted successfully");
  } else {
    return res.status(500).send("Error writing check data");
  }
});

module.exports = router;
