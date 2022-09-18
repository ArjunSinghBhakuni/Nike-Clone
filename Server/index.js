const express = require("express");
const { connection } = require("./config/db");
 
const productController = require("./controller/productController");
const userController = require("./controller/userController");
 

const cors = require("cors");
const cartController = require("./controller/cartController");
const authentication = require("./middleware/authentication");
const singleProductController = require("./controller/singleProductController");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("home");
});

app.use("/user", userController);
//  app.use(authentication)
app.use("/products", productController);
 
 
app.use("/cart",cartController)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connection success");
  } catch (err) {
    console.log(err);
  }

  console.log("server connected at 8080");
});
