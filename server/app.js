const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();
const userRouter = require('./routes/user');
// const vehicleRouter = require('./routes/vehicle');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const API_PREFIX = '/api'
app.use(`${API_PREFIX}/user`, userRouter)
app.use(`${API_PREFIX}/user`, vehicleRouter)

app.get("/", (req, res) => res.send("welcome to backend"));

// const PORT = process.env.PORT || 5000;

// connection().then(() => {
//     app.listen(PORT, () => {
//         // try {
//         //     await connection
//         //     console.log("Successfully connected to the database");
//         // } catch (error) {
//         //     console.log("Failed to connect to the database, exiting..", error);
//         // }
//         console.log("Port running on", PORT);
//     })
// })

app.listen(process.env.PORT, async()=>{
    try {
        await connection;
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database not connected");
    }
    console.log(`Server running on ${process.env.PORT}`);
})