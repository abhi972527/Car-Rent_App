const mongoose = require("mongoose");
require("dotenv").config();

let url = process.env.DB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Failed to connect to the database, exiting..", err);
    process.exit();
});

// module.exports = { connection };