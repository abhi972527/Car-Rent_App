// let userService = require("../services/userCrud");
// import userService from "../services/userCrud.js";
import * as userService from "../services/userCrud.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../config/tokenKeys.js";

export const register = async (req, res) => {
    try {
        console.log("🚀 ~ file: user.js:8 ~ register ~ req.body:", req.body)
        let { name, email, password } = req.body
        if (!name || !email || !password) return res.status(400).json({
            status: 400,
            message: "Required name email and password",
        })
        let isExist = await userService.findEmail({ email })
        console.log("🚀 ~ file: userController.js:10 ~ exports.register= ~ isExist:", isExist)
        if (isExist) return res.status(400).json({
            status: 400,
            message: "Email already exist",
        })
        let obj = {
            name,
            email,
            password,
        }
        let data = await userService.saveUser(obj)
        if (!data) return res.status(400).json({
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
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
}

export const login = async (req, res) => {
    console.log("🚀 ~ file: user.js:41 ~ login ~ req:", req.body)
    try {
        let { email, password } = req.body;
        if (!email || !password) return res.status(400).json({
            status: 400,
            message: "Email and password required"
        })
        // const data = await userService.getUser(email, password);
        let ifEmailExist = await userService.findEmail({ email })
        console.log("🚀 ~ file: user.js:50 ~ login ~ ifEmailExist:", ifEmailExist)
        if (!ifEmailExist) return res.status(400).json({
            status: 400,
            message: "Id doesn't  exist",
        })
        // let passwordQuery = {
        //     email,
        //     phone: password
        // }
        // let isExistPassword = await userService.findEmail(passwordQuery)
        // if(password != ifEmailExist.phone)
        // console.log("🚀 ~ file: user.js:56 ~ login ~ isExistPassword:", isExistPassword)
        if (password != ifEmailExist.password) return res.status(400).json({
            status: 400,
            message: "Password is wrong",
        })
        console.log("🚀 ~ file: user.js:46 ~ login ~ ifEmailExist:", "Password verified")
        const token = jwt.sign({ email }, secretKey, { expiresIn: '1hr' });
        // res.cookie('token', token);
        console.log("🚀 ~ file: user.js:69 ~ login ~ token:", token)
        return res.send({
            status: 200,
            data: ifEmailExist,
            message: "Successfully logged in",
            token: token,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
}

export const editProfile = async (req, res) => {
    try {
        console.log("🚀 ~ file: user.js:42 ~ editProfile ~ req.body:", req.body)
        let { image, name, phone, id } = req.body;
        if (!id) return res.status(400).json({
            status: 400,
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
        if (!data) return res.status(400).json({
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
        return res.status(400).json({
            status: 400,
            message: error.message
        });
    }
}
