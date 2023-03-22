import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connection from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'5mb'}));

app.get("/",(req,res) => {
    res.send({message: "Welcome to backend"});
})

const url = process.env.DB
const PORT = process.env.PORT || 5000;
const server = async() => {
    try {
        connection(url)
        app.listen(PORT, () => console.log("Backend is running on PORT ", PORT))
    } catch (error) {
        console.log("error: ", error);
    }
}

server();