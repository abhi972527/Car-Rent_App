// const { User } = require("../models/user")
import User from "../models/user.js";

export const findEmail = async (email) => {
    try {
        let data = await User.findOne({ email: email });
        return data;
    } catch (error) {
        return false
    }
}

export const saveUser = async (obj) => {
    try {
        let data = await User.create(obj);
        return data;
    } catch (error) {
        return false
    }
}

export const updateProfile = async (id, obj) => {
    try {
        let data = await User.findByIdAndUpdate({ _id: id }, { $set: obj }, { new: true })
        return data;
    } catch (error) {
        return false
    }
}


// module.exports = {findEmail}
