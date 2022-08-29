const express = require("express");
const UserModel = require("../model/UserModel");

const userController = express.Router();

userController.post("/signup", (req, res) => {
  const { firstName, lastName, email, password, gender } = req.body;
  console.log(firstName, lastName, email, password, gender )
  const users = new UserModel({
    firstName,
    lastName,
    email,
    password,
    gender,
  });

  users.save()
  res.send("user successfully created"
  )
});

module.exports = userController;
