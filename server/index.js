import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
// import multer from "multer";

import connection from "./config/db.js";
dotenv.config();

import userRouter from "./routes/user.js";
import vehicleRouter from "./routes/vehicle.js";

// const storage = multer.memoryStorage();
// export const upload = multer({ storage: storage });


const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get("/", (req, res) => {
    res.send({ message: "Welcome to backend" });
})

const API_PREFIX = '/api'
app.use(`${API_PREFIX}/user`, userRouter)
app.use(`${API_PREFIX}/vehicle`, vehicleRouter)


const url = process.env.DB
const PORT = process.env.PORT || 5000;
const server = async () => {
    try {
        connection(url);
        app.listen(PORT, () => console.log("Backend is running on PORT ", PORT))
    } catch (error) {
        console.log("error: ", error);
    }
}

server();