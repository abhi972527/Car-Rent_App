const { User } = require("../models/user")

exports.findEmail = async (email) => {
    try {
        let data = await User.findOne({ email: email });
        return data;
    } catch (error) {
        return false
    }
}

exports.saveUser = async (obj) => {
    try {
        let data = await User.create(obj);
        return data;
    } catch (error) {
        return false
    }
}

exports.updateProfile = async (id, obj) => {
    try {
        let data = await User.findByIdAndUpdate({ _id: id }, { $set: obj }, { new: true })
        return data;
    } catch (error) {
        return false
    }
}


// module.exports = {findEmail}