const express = require("express");
const { connection } = require("./config/db");
const kidController = require("./controller/kidController");
const menController = require("./controller/menController");
const productController = require("./controller/productController");
const userController = require("./controller/userController");
const womenController = require("./controller/womenController");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("home");
});

app.use("/user", userController);
app.use("/products", productController);
app.use("/men", menController);
app.use("/women", womenController);
app.use("/kids", kidController);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connection success");
  } catch (err) {
    console.log(err);
  }

  console.log("server connected at 8080");
});
