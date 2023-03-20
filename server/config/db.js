const mongoose = require("mongoose");
require("dotenv").config();

let url = process.env.DB
// const connection = async () => {
//     try {
//         const conn = await mongoose.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         console.log("Successfully connected to the database");
//     } catch (error) {
//         console.log("Failed to connect to the database, exiting..", error);
//     }
// }
const connection = mongoose.connect(`${url}`);
module.exports = { connection };