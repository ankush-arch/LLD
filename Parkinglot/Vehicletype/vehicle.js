import VehicleTypes from './vehicletype.js';

class Vehicle {
    constructor(licensePlate, type) {
        if(this.constructor.name === 'Vehicle') {
            throw new Error('Vehicle is an abstract class');
        }

        if(!licensePlate || typeof licensePlate !== 'string') {
            throw new Error('licensePlate must be a string');
        }
        if(!Object.values(VehicleTypes).includes(type)) {
            throw new Error('Vehicle type is invalid type');
        }
        this.licensePlate = licensePlate;
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

export default Vehicle;