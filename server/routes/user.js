// var express = require('express');
import express from 'express';
var router = express.Router();
// const userController = require("../controllers/user");
import * as  userController from "../controllers/user.js";
// var { upload } = require("../service/multerServices");

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

router.post('/signUp', userController.register);
// router.post('/editProfile', userController.editProfile);
// router.post('/editProfile', upload.fields([{name: 'images', maxCount: 1}]), userController.editProfile);

// module.export = router;
export default router;
