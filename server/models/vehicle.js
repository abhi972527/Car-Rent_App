import mongoose from "mongoose";

const vehicle = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9 ]+$/, 'is invalid']
    },
    brand: {
        type: String,
        trim: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9 ]+$/, 'is invalid']
    },
    rent: {
        type: Number,
        require: true,
    },
    capacity: {
        type: Number,
        require: false,
    },
    carType: {
        type: String,
        require: false,
    },
    location: {
        type: String,
        require: true,
    },
    fuelCapacity: {
        type: Number,
        require: false,
    },
    engineType: {
        type: String,
        require: false,
    },
    image: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true },
)

export const Vehicle = mongoose.model("vehicle", vehicle)