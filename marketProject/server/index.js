const express = require("express");

const sellersRouter = require("./routes/sellers");
const productsRouter = require("./routes/products");
const checksRouter = require("./routes/checks");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
app.use("/sellers", sellersRouter);
app.use("/products", productsRouter);
app.use("/checks", checksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
