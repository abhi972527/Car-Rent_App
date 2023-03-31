// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const user = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        maxlength: 32,
        trim: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9 ]+$/, 'is invalid']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        require: true,
        minLength: 4,
        maxlength: 12,
    },
    profilePic: {
        type: String,
        require: false,
    },
    coverPic: {
        type: String,
        require: false,
    }
},
    { timestamps: true },
);
// exports.User = mongoose.model("user", user)
export const User = mongoose.model("user", user);
// export default User;
