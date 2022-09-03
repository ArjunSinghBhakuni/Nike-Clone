const express = require("express");
const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const userController = express.Router();

userController.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, gender } = req.body;

  let user = await UserModel.findOne({ email: email });

  if (user) {
    return res
      .status(500)
      .json({ status: "Failed", message: "Please try with different email" });
  }

  bcrypt.hash(password, 8, async function (err, hash) {
    const users = new UserModel({
      firstName,
      lastName,
      email,
      password: hash,
      gender,
    });

    await users.save();
    res.send("user successfully created");
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res
      .status(500)
      .json({ status: "failed", message: "Please check your email" });
  }
  const hash = user.password;
  const userId = user._id;
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      var token = jwt.sign({ email, userId }, "secret");
      return res.send({ message: "login success", token: token });
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "Please check your password" });
    }
  });
});

module.exports = userController;
