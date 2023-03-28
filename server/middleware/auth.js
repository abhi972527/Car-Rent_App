import jwt from "jsonwebtoken";
import { secretKey } from "../config/tokenKeys.js";

export const authenticateUser = (req, res, next) => {
    console.log("🚀 ~ file: auth.js:5 ~ authenticateUser ~ req:", req.headers)
    const token = req.cookies.token || req.headers.authorization;
    console.log("🚀 ~ file: auth.js:6 ~ authenticateUser ~ token:", token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("🚀 ~ file: auth.js:13 ~ authenticateUser ~ decoded:", decoded)
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};