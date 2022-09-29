 


 
const mongoose = require("mongoose")
require("dotenv").config();
const mongodb_url=process.env.MONGODB_URL

const connection = mongoose.connect(mongodb_url)

module.exports = {connection};
