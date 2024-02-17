const express = require("express");
const sellerData = require("./data/sellerData");
const productData = require("./data/productData");
const checkData = require("./data/checkData.json");
const app = express();
const port = 3000;

const router = express.Router();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(router);

router.get("/sellers", (req, res) => {
  res.send(sellerData);
});
router.get("/products", (req, res) => {
  res.send(productData);
});
router.get("/checks", (req, res) => {
  res.send(checkData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
