import * as vehicleService from "../services/vehicleCrud.js";

export const addVehicle = async (req, res) => {
    console.log("🚀 ~ file: vehicle.js:4 ~ addVehicle ~ req:", req.body);
    try {
        // let image = req.file;
        let { name, brand, rent, capacity, carType, location, fuelCapacity, transmission, wishlist, availability, userId } = req.body;
        if (!name || !brand || !rent || !location || !userId) {
            console.log("returning back");
            return res.send({
                status: 400,
                message: "Required name, brand, rent, location, image",
            })
        }
        console.log("console after if condition");
        let obj = {
            name : name || null,
            brand : brand || null,
            rent: rent || null,
            capacity: capacity || null,
            carType: carType || null,
            location: location || null,
            fuelCapacity: fuelCapacity || null,
            transmission: transmission || null,
            wishlist: wishlist || null,
            availability: availability || null,
            userId: userId,
            // image: image || null,
        }
        console.log("🚀 ~ file: vehicle.js:15 ~ addVehicle ~ obj:", obj)
        let data = await vehicleService.saveVehicle(obj);
        console.log("🚀 ~ file: vehicle.js:28 ~ addVehicle ~ data:", data)
        if (!data) {
            return res.send({
                status: 500,
                data: null,
                message: "Something went wrong",
            })
        }
        return res.send({
            status: 200,
            data: data,
            message: "Vehicle registered successfully",
        })
    } catch (error) {
        return error
    }
}

export const getVehicle = async (req, res) => {
    try {
        let { filter } = req.body;
        let data = await vehicleService.getVehicle(filter);
        return res.send({
            status: 200,
            data: data,
            message: "Vehicle retrived successfully",
        })
    } catch (error) {
        return error;
    }
}

export const getVehicleById = async (req, res) => {
    try {
        let { id } = req.query;
        let data = await vehicleService.getVehicleById(id);
        return res.send({
            status: 200,
            data: data,
            message: "Vehicle fetched successfully",
        })
    } catch (error) {
        return error;
    }
}

