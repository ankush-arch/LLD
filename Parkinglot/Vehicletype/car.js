import Vehicle from "./vehicle.js";
import VehicleTypes from "./vehicletype.js";

class Car extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, VehicleTypes.CAR);
    }
}

export default Car;