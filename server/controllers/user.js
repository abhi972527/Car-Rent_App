let userService = require("../services/userCrud");

exports.register = async (req, res) => {
    try {
        let { name, email, phone } = req.body
        if (!name || !email || !phone) return res.send({
            status: false,
            message: "Required name email and mobile",
        })
        let isExist = await userService.findEmail(email)
        console.log("🚀 ~ file: userController.js:10 ~ exports.register= ~ isExist:", isExist)
        if (isExist) return res.send({
            status: false,
            message: "Email already exist",
        })
        let obj = {
            name,
            email,
            phone,
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

exports.editProfile = async (req, res) => {
    try {
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
