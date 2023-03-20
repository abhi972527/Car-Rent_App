const mongoose = require("mongoose");
require("dotenv").config();

let url = process.env.DB
const connection = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = { connection };