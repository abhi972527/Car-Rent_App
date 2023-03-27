// var express = require('express');
import express from "express";
import * as vehicleController from "../controllers/vehicle.js";
// import upload from "../index";
import multer from "multer";

var router = express.Router();

const storage = multer.memoryStorage();
export const upload = multer({
    storage: storage,
    // limits: {
    //     files: 3, // limit to 3 files
    // },
});

router.post("/", upload.single('image'), vehicleController.addVehicle);
router.get("/", vehicleController.getVehicle);
router.get("/:id", vehicleController.getVehicleById);




// module.exports = router;
export default router;
