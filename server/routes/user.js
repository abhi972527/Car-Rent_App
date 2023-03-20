var express = require('express');
var router = express.Router();
const userController = require("../controllers/user");
// var { upload } = require("../service/multerServices");

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

router.post('/signUp', userController.register);
// router.post('/editProfile', userController.editProfile);
// router.post('/editProfile', upload.fields([{name: 'images', maxCount: 1}]), userController.editProfile);

module.exports = router;
