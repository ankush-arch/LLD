import Vehicle from "./vehicle.js";
import VehicleTypes from "./vehicletype.js";

class MotorCycle extends Vehicle {
    constructor(licensePlate) {
        super(licensePlate, VehicleTypes.MOTORCYCLE);
    }
}

export default MotorCycle;