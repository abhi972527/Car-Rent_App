// let userService = require("../services/userCrud");
// import userService from "../services/userCrud.js";
import * as userService from "../services/userCrud.js";

export const register = async (req, res) => {
    try {
        console.log("🚀 ~ file: user.js:8 ~ register ~ req.body:", req.body)
        let { name, email } = req.body
        if (!name || !email) return res.send({
            status: false,
            message: "Required name email and mobile",
        })
        let isExist = await userService.findEmail({ email })
        console.log("🚀 ~ file: userController.js:10 ~ exports.register= ~ isExist:", isExist)
        if (isExist) return res.send({
            status: false,
            message: "Email already exist",
        })
        let obj = {
            name,
            email,
            phone: req.body.password,
        }
        let data = await userService.saveUser(obj)
        if (!data) return res.send({
            status: 400,
            message: "Internal error",
        })
        return res.send({
            status: 200,
            data: data,
            message: "Successfully signed up",
        })
    } catch (error) {
        console.log("🚀 ~ file: userController.js:5 ~ register ~ error:", error)
        return error;
    }
}

export const login = async (req, res) => {
    console.log("🚀 ~ file: user.js:41 ~ login ~ req:", req.body)
    try {
        let { email, password } = req.body;
        if (!email || !password) return res.send({
            status: false,
            message: "Email and password required"
        })
        // const data = await userService.getUser(email, password);
        let isExistEmail = await userService.findEmail({ email })
        console.log("🚀 ~ file: user.js:50 ~ login ~ isExistEmail:", isExistEmail)
        if (!isExistEmail) return res.send({
            status: false,
            message: "Id doesn't  exist",
        })
        let passwordQuery = {
            email,
            phone: password
        }
        let isExistPassword = await userService.findEmail(passwordQuery)
        console.log("🚀 ~ file: user.js:56 ~ login ~ isExistPassword:", isExistPassword)
        if (!isExistPassword) return res.send({
            status: false,
            message: "Password is wrong",
        })
        console.log("🚀 ~ file: user.js:46 ~ login ~ isExistEmail:", isExistEmail)
        return res.send({
            status: 200,
            data: isExistEmail,
            message: "Successfully logged in",
        })
    } catch (error) {

    }
}

export const editProfile = async (req, res) => {
    try {
        console.log("🚀 ~ file: user.js:42 ~ editProfile ~ req.body:", req.body)
        let { image, name, phone, id } = req.body;
        if (!id) return res.send({
            status: false,
            message: "id required",
        })
        const obj = {
            name,
            phone,
        }
        if (req.file) {
            obj.image = process.env.BASE_URL + "profileImages/" + req.file.filename
        }
        let data = await userService.updateProfile(id, obj);
        if (!data) return res.send({
            status: 400,
            message: "Error updating profile",
        })
        return res.send({
            status: 200,
            data: data,
            message: "Profile updated successfully",
        })
    } catch (error) {
        console.log("🚀 ~ file: userController.js:41 ~ exports.editProfile= ~ error:", error)
        return error;
    }
}
