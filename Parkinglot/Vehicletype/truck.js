import Vehicle from "./vehicle.js";
import VehicleTypes from "./vehicletype.js";

class Truck extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, VehicleTypes.TRUCK);
    }
}

export default Truck;