import mongoose from "mongoose";

const vehicle = new mongoose.Schema({
    name: {
        type: String,
    },
    brand: {
        type: String,
    },
    rent: {
        type: Number,
    },
    capacity: {
        type: Number,
    },
    carType: {
        type: String,
    },
    location: {
        type: String,
    },
    fuelCapacity: {
        type: Number,
    },
    transmission: {
        type: String,
    },
    wishlist: {
        type: Boolean,
    },
    availability: {
        type: Boolean,
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

// export default Vehicle;