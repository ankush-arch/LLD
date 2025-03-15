// import Vehicle from "./Vehicletype/Vehicle";
// import VehicleTypes from "./Vehicletype/vehicletype";

class ParkingSpot {
    constructor(spotNumber, vehicleType) {
        this.spotNumber = spotNumber;
        this.vehicleType = vehicleType;
        this.parkedVehicle = null;
    }

    isAvailable() {
        return this.parkedVehicle === null;
    }

    parkVehicle(vehicle) {
        this.parkedVehicle = vehicle;
    }

    unParkVehicle() {
        this.parkedVehicle = null;
    }

    getVehicleType() {
        return this.parkedVehicle;
    }

    getSpotNumber() {
        return this.spotNumber;
    }
}

export default ParkingSpot;