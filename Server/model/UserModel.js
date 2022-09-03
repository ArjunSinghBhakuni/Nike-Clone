const mongoose = require("mongoose");
const reqString = { type: String, required: true };

const userSchema = mongoose.Schema(
  {
    firstName: reqString,
    lastName: String, 
    email: reqString,
    password: reqString,
    gender: reqString,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
