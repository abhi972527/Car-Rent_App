import * as vehicleModel from "../models/vehicle.js";

export const saveVehicle = async(vehicle) => {
    try {
        console.log("🚀 ~ file: vehicleCrud.js:4 ~ saveVehicle ~ vehicle:", vehicle)
        let data = await vehicleModel.Vehicle.create(vehicle);
        console.log("🚀 ~ file: vehicleCrud.js:6 ~ saveVehicle ~ data:", data)
        return data;
    } catch (error) {
        console.log("🚀 ~ file: vehicleCrud.js:10 ~ saveVehicle ~ error:", error)
        return false;
    }
}

export const getVehicle = async(filter) => {
    try {
        let data = await vehicleModel.Vehicle.find({});
        return data;
    } catch (error) {
        return false;
    }
}

export const getVehicleById = async(id) => {
    try {
        let data = await vehicleModel.Vehicle.findOne({_id: id});
        return data;
    } catch (error) {
        return false;
    }
}