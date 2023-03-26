import mongoose from "mongoose";

const connection = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url).then(() => {
        console.log("Successfully connected to the database");
    }).catch((error) => {
        console.log("Failed to connect to the database, exiting..", error);
    })
}

export default connection;