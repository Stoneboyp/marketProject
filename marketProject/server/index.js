const express = require("express");
const fs = require("fs");
const sellerData = require("./data/sellerData.json"); // Используйте sellerData.json
const productData = require("./data/productData.json"); // Используйте productData.json
const checkData = require("./data/checkData.json");
const app = express();
const port = 3000;

app.use(express.json()); // Парсинг тела запроса в формате JSON

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/sellers", (req, res) => {
  res.send(sellerData);
});

app.get("/products", (req, res) => {
  res.send(productData);
});

app.get("/checks", (req, res) => {
  res.send(checkData);
});
app.post("/addSeller", (req, res) => {
  const { firstName, lastName } = req.body;
  const newSellerData = { firstName, lastName };
  sellerData.data.push(newSellerData);
  fs.writeFile("./data/sellerData.json", JSON.stringify(sellerData), (err) => {
    if (err) {
      console.error("Error writing seller data:", err);
      res.status(500).send("Error writing seller data");
      return;
    }
    res.status(200).send("Seller data updated");
  });
});

app.post("/addProduct", (req, res) => {
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
});

app.post("/addCheck", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
