// const { User } = require("../models/user")
import * as userModel from "../models/user.js";

export const findEmail = async (element) => {
    console.log("🚀 ~ file: userCrud.js:5 ~ findEmail ~ element:", element)
    try {
        let data = await userModel.User.findOne(element);
        console.log("🚀 ~ file: userCrud.js:8 ~ findEmail ~ data:", data)
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
        console.log("🚀 ~ file: userCrud.js:18 ~ saveUser ~ error:", error)
        return false
    }
}

// export const getUser = async (email, password) => {
//     try {
//         let email = await User.findOne({{}})
//     } catch (error) {

//     }
// }

export const updateProfile = async (id, obj) => {
    try {
        let data = await User.findByIdAndUpdate({ _id: id }, { $set: obj }, { new: true })
        return data;
    } catch (error) {
        return false
    }
}


// module.exports = {findEmail}
