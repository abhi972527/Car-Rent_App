// var express = require('express');
import express from "express";
var router = express.Router();
import * as vehicleController from "../controllers/vehicle.js";

router.post("/", vehicleController.addVehicle);
router.get("/", vehicleController.getVehicle);
router.get("/:id", vehicleController.getVehicleById);




// module.exports = router;
export default router;
