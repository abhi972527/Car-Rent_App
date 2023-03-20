const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./config/db");

const userRouter = require('./routes/user');
const vehicleRouter = require('./routes/vehicle');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const API_PREFIX = '/api'
app.use(`${API_PREFIX}/user`, userRouter)
app.use(`${API_PREFIX}/user`, vehicleRouter)

app.get("/", (req, res) => res.send("welcome to backend"));

// await connection.then((res) => {
//     console.log("Successfully connected to the database");
// }).catch((err) => {
//     console.log("Failed to connect to the database, exiting..", error);
// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Port running on", PORT);
})