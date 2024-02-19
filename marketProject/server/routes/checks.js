const express = require("express");
const router = express.Router();
const fs = require("fs");
const checkData = require("../data/checkData.json");

router.use(express.json());

router.get("/", (req, res) => {
  res.send(checkData);
});

router.post("/addCheck", (req, res) => {
  if (req.method == "POST") {
    const { firstName, lastName, productType } = req.body;
    const newCheckData = { firstName, lastName, productType };
    checkData.data.push(newCheckData);
    fs.writeFile("./data/checkData.json", JSON.stringify(checkData), (err) => {
      if (err) {
        console.error("Error writing check data:", err);
        res.status(500).send("Error writing check data");
        return;
      }
      res.status(200).send("Check data updated");
    });
  }
});

module.exports = router;
